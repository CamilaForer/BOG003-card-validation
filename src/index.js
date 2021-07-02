import validator from './validator.js';

console.log(validator);

// Cambio de pagina
const btn= document.querySelector("#botonCarrito")
const carrito=document.querySelector("#validationPage")
const principal=document.querySelector("#principalPage")
btn.addEventListener("click", cambioPagina)

function cambioPagina(){
    carrito.classList.remove("hide") 
    principal.classList.add("hide")
}

// Llenado formulario
// Eliminar espacios en blanco

let numb= document.querySelector("#inputNumero")
numb.addEventListener("keyup", noEspacios)





