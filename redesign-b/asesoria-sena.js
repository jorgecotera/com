const senaForm=document.querySelector('#sena-request-form');
const senaStatus=document.querySelector('#sena-form-status');
const SENA_API='https://wayrasystem.online/asesoria-api';
senaForm?.addEventListener('submit',async event=>{
  event.preventDefault();
  if(!senaForm.reportValidity())return;
  const button=senaForm.querySelector('button[type="submit"]');
  const data=new FormData(senaForm);
  const file=data.get('comprobante');
  if(file?.size>5*1024*1024){senaStatus.textContent='El comprobante supera el máximo de 5 MB.';return;}
  button.disabled=true;
  senaStatus.textContent='Enviando solicitud…';
  try{
    const response=await fetch(`${SENA_API}/solicitudes`,{method:'POST',body:data});
    const result=await response.json().catch(()=>({}));
    if(!response.ok)throw new Error(result.error||'No fue posible registrar la solicitud.');
    senaStatus.innerHTML=`Solicitud registrada: <strong>${result.code}</strong>. Conserve este código. El cupo está pendiente de verificación del pago.`;
    senaForm.reset();
  }catch(error){
    senaStatus.textContent=error.message||'No fue posible registrar la solicitud.';
  }finally{button.disabled=false;}
});
