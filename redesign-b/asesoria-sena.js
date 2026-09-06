const senaForm=document.querySelector('#sena-request-form');
const senaStatus=document.querySelector('#sena-form-status');
senaForm?.addEventListener('submit',event=>{
  event.preventDefault();
  if(!senaForm.reportValidity())return;
  if(senaStatus)senaStatus.textContent='Solicitud preparada. El envío todavía no está habilitado hasta conectar el almacenamiento privado y la verificación de pagos.';
});
