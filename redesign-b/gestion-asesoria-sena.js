const API='https://wayrasystem.online/asesoria-api';
const login=document.querySelector('#admin-login');
const consoleBox=document.querySelector('#admin-console');
const loginForm=document.querySelector('#admin-key-form');
const keyInput=document.querySelector('#admin-key');
const loginStatus=document.querySelector('#admin-login-status');
const dateInput=document.querySelector('#admin-date');
const statusBox=document.querySelector('#admin-status');
const rowsBox=document.querySelector('#admin-rows');
let adminKey=sessionStorage.getItem('senaAdminKey')||'';
const money=new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0});
function headers(){return {'X-Admin-Key':adminKey};}
async function api(path,options={}){
  const response=await fetch(`${API}${path}`,{...options,headers:{...headers(),...(options.headers||{})}});
  if(response.status===401)throw new Error('Clave administrativa inválida.');
  if(!response.ok){const data=await response.json().catch(()=>({}));throw new Error(data.error||'Error del servidor.');}
  return response;
}
function showConsole(){login.hidden=true;consoleBox.hidden=false;}
function showLogin(msg=''){consoleBox.hidden=true;login.hidden=false;loginStatus.textContent=msg;}
async function load(){
  const date=dateInput.value;
  statusBox.textContent='Cargando…';
  try{
    const qs=date?`?fecha=${encodeURIComponent(date)}`:'';
    const [listRes,sumRes]=await Promise.all([api(`/admin/solicitudes${qs}`),api(`/admin/resumen${qs}`)]);
    const list=await listRes.json(); const sum=await sumRes.json();
    document.querySelector('#kpi-total').textContent=sum.total;
    document.querySelector('#kpi-confirmed').textContent=sum.confirmados;
    document.querySelector('#kpi-pending').textContent=sum.pendientes;
    document.querySelector('#kpi-value').textContent=money.format(sum.valor_confirmado);
    rowsBox.innerHTML=(list.items||[]).map(r=>`<tr><td><strong>${r.code}</strong></td><td>${r.nombre||''}</td><td>${r.telefono||''}</td><td>${r.programa||''}</td><td>${r.fecha_atencion||''}</td><td>${r.pago_estado||''}<br><small>${r.pago_metodo||r.pago_declarado||''}</small></td><td>${r.has_comprobante?'Sí':'No'}</td><td>${r.estado||''}</td><td><div class="admin-actions"><button class="ok" data-id="${r.id}" data-pay="confirmado">Confirmar pago</button><button data-id="${r.id}" data-state="atendido">Atendido</button><button class="cancel" data-id="${r.id}" data-state="cancelado">Cancelar</button></div></td></tr>`).join('');
    statusBox.textContent=`${list.items?.length||0} registros cargados.`;
  }catch(e){statusBox.textContent=e.message;if(/Clave/.test(e.message)){sessionStorage.removeItem('senaAdminKey');adminKey='';showLogin(e.message);}}
}
loginForm?.addEventListener('submit',async e=>{e.preventDefault();adminKey=keyInput.value.trim();try{await api('/admin/resumen');sessionStorage.setItem('senaAdminKey',adminKey);showConsole();load();}catch(err){showLogin(err.message);}});
document.querySelector('#admin-refresh')?.addEventListener('click',load);
dateInput?.addEventListener('change',load);
document.querySelector('#admin-logout')?.addEventListener('click',()=>{adminKey='';sessionStorage.removeItem('senaAdminKey');showLogin('Sesión cerrada.');});
rowsBox?.addEventListener('click',async e=>{const b=e.target.closest('button[data-id]');if(!b)return;const body={};if(b.dataset.pay)body.pago_estado=b.dataset.pay;if(b.dataset.state)body.estado=b.dataset.state;try{await api(`/admin/solicitudes/${b.dataset.id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});load();}catch(err){statusBox.textContent=err.message;}});
async function download(path){try{const r=await api(path);const blob=await r.blob();const disp=r.headers.get('content-disposition')||'';const m=disp.match(/filename\*?=(?:UTF-8'')?"?([^";]+)/i);const name=m?decodeURIComponent(m[1]):'solicitudes.xlsx';const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}catch(e){statusBox.textContent=e.message;}}
document.querySelector('#admin-export-day')?.addEventListener('click',()=>{if(!dateInput.value){statusBox.textContent='Seleccione primero una fecha.';return;}download(`/admin/export.xlsx?fecha=${encodeURIComponent(dateInput.value)}`);});
document.querySelector('#admin-export-all')?.addEventListener('click',()=>download('/admin/export.xlsx?all=1'));
if(adminKey){showConsole();load();}
