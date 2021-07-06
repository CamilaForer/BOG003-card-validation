// import validator from './validator.js';

// console.log(validator);

// Cambio de pagina
const btn= document.querySelector("#btnCar")
const car=document.querySelector("#validationPage")
const principal=document.querySelector("#principalPage")
btn.addEventListener("click", changePage)
// Eliminar espacios en blanco, letras,separar en grupos de cuatro y eliminar ultimo espacio en blanco


// Cambio de pagina
function changePage(){
    car.classList.remove("hide") 
    principal.classList.add("hide")
}

// Llenado formulario
// Eliminar espacios en blanco, letras,separar en grupos de cuatro y eliminar ultimo espacio en blanco
// Plasmar el formulario en la tarjeta
const inputNumber= document.querySelector("#inputNumber")
inputNumber.addEventListener("keyup", noSpace)
const cardNumber= document.querySelector("#tarjeta .numero")
const cardName= document.querySelector("#tarjeta .nombre")
const logo= document.querySelector("#logo")

function noSpace(n){

    let numberValue=n.target.value;
    inputNumber.value=numberValue.replace(/\s/g,"")
    .replace(/([A-Za-z])/g,"")
    .replace(/([0-9]{4})/g, "$1 ")
    .trim();
    // Plasmar el formulario en la tarjeta
    cardNumber.textContent= numberValue;

    if(numberValue ==""){
    // Cuando no hay nada en el input en la tarjeta se cambia el contenido
        cardNumber.textContent="#### #### #### ####";
    // Borra el logo cuando se borran o no hay elementos en el input
        logo.innerHTML="";
    }
// Cuando la primera posicion lleve un 4 se mostrara el logo de Visa
    if(numberValue[0] == 4){
        logo.innerHTML="";
        const image=document.createElement("img");
        image.src="img/Logo/visa.png";
        logo.appendChild(image);
// Cuando la primera posicion lleve un 5 se mostrara el logo de MasterCard
    } else if(numberValue[0] == 5){
        logo.innerHTML="";
        const image=document.createElement("img");
        image.src="img/Logo/Master.png";
        logo.appendChild(image);
    }
}
// Input nombre de tarjeta
const inputName= document.querySelector("#inputName")
inputName.addEventListener("keyup", inputNam)
// Eliminar numeros en el input de nombre
function inputNam(a){
    let nameValue=a.target.value;
    inputName.value=nameValue.replace(/[0-9]/g,"")
// Plasmar el formulario en la tarjeta
    cardName.textContent=nameValue;

    if(nameValue ==""){
        cardName.textContent="Your card name here";

    }


}






  





