const input = document.getElementById('ingrese');
const btnEncriptar = document.querySelector("#encriptar");
const btnDecencriptar = document.querySelector("#desencriptar");
const resultado = document.querySelector('.mostrarresultado');
const btnCopiar = document.querySelector('#bcopiar');
const imgAlerta = document.querySelector('.alerta');
input.addEventListener('keypress', function(event) {
  const key = event.key;
  if (!/[a-z,ñ, ]/.test(key)) {
    event.preventDefault();    
    imgAlerta.src = "img/alert_.svg";    
  }else{imgAlerta.src = "img/alert.svg";}
  
});
input.addEventListener('keyup', function() {
  var screenWidth = window.offsetWidth;    
  if (this.value.length > 0)  {    
    document.querySelector(".mostrarresultado").textContent= null;
    bcopiar.style.display="none"; 
    resultado.style.backgroundImage = "none";      
  } else {
    if (screenWidth > 543) {resultado.style.backgroundImage = "url('img/encriptar_.jpg')";}
    else {resultado.style.backgroundImage = "url('img/encriptar.jpg')";}
  }
});
/********************(ENcriptar mensaje)-->Encrypter / Decrypter***********************/
(() => {

  encriptar.addEventListener('click', encriptarM);
  desencriptar.addEventListener('click', desencriptarM);
  bcopiar.addEventListener('click', copiarM);

})()
function encriptarM() {    
  let texto = document.querySelector("#ingrese").value;    
  let textoEncriptado = texto.replace(/e/img, 'enter');
  textoEncriptado = textoEncriptado.replace(/i/mg, 'imes');
  textoEncriptado = textoEncriptado.replace(/a/mg, 'ai');
  textoEncriptado = textoEncriptado.replace(/o/mg, 'ober');
  textoEncriptado = textoEncriptado.replace(/u/mg, 'ufat');     
  document.querySelector(".mostrarresultado").textContent = textoEncriptado ;     
  document.querySelector(".ingrese").value = '';  
  btnCopiar.style.display="block";
}
function desencriptarM() {      
  let texto = document.querySelector(".ingrese").value;
    let textoEncriptado = texto.replace(/enter/mg, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/mg, 'i');
    textoEncriptado = textoEncriptado.replace(/ai/mg, 'a');
    textoEncriptado = textoEncriptado.replace(/ober/mg, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/mg, 'u');    
    document.querySelector(".mostrarresultado").textContent = textoEncriptado ;
  document.querySelector(".ingrese").value = '';
  btnCopiar.style.display="block";
}
/*******************************COPIAR*********************************/
function copiarM() {  
  var screenWidth = window.offsetWidth;    
  input.focus();     
    if (screenWidth > 543) {resultado.style.backgroundImage = "url('img/encriptar_.jpg')";}
    else {resultado.style.backgroundImage = "url('img/encriptar.jpg')";}      
  try {
    navigator.clipboard.writeText(document.querySelector(".mostrarresultado").textContent);
    console.log('El texto se copio en el portapapaeles');
  } catch (err) {
    console.error('No se pudo copiar: ', err);
  }  
  document.querySelector(".mostrarresultado").textContent= null;
  btnCopiar.style.display="none";
}
