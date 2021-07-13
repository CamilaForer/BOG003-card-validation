import validator from './validator.js';
const btnValidation= document.querySelector("#validation")
const invalid=document.querySelector("#ConfirmInvalid")
const Valid=document.querySelector("#Confirm")
const btnInvalid=document.querySelector(".btnBack")
const btnPrincipal=document.querySelector(".btnInvalidPrincipal")
const BackPrincipal=document.querySelector(".BackPrincipal")
btnValidation.addEventListener("click", cardValidation)
btnInvalid.addEventListener("click", backPage)
btnPrincipal.addEventListener("click", backPage)
BackPrincipal.addEventListener("click", backPage)

function cardValidation(){
    const numberValue=document.querySelector("#inputNumber").value
    if(validator.isValid(numberValue)){
       Valid.classList.remove("hide")
       Valid.classList.add("show")
       car.classList.add("hide")  
    }
    else{
        invalid.classList.remove("hide")
        car.classList.add("hide")
        principal.classList.add("hide")
    }

}

// Cambio de pagina
const btn= document.querySelector("#btnCar")
const car=document.querySelector("#validationPage")
const principal=document.querySelector("#principalPage")
btn.addEventListener("click", changePage)

// Cambio de pagina
function changePage(){
    car.classList.remove("hide") 
    principal.classList.add("hide")
}
// Volver a pagina d validación y volver a pagina principal
function backPage(a){
    let back=a.target.className
    if(back=="btnBack"){
        invalid.classList.add("hide")
        car.classList.remove("hide")
    }
    else if(back=="btnInvalidPrincipal"){
        invalid.classList.add("hide")
        principal.classList.remove("hide")
    }
    else if(back=="BackPrincipal"){
        Valid.classList.add("hide")
        Valid.classList.remove("show")
        principal.classList.remove("hide")
    }
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
    cardNumber.textContent= validator.maskify(numberValue);
    if(numberValue ==""){
    // Cuando no hay nada en el input en la tarjeta se cambia el contenido
        cardNumber.textContent="#### #### #### ####";
    // Borra el logo cuando se borran o no hay elementos en el input
        logo.innerHTML="";
    }
// Cuando inicie con un 4 se mostrara el logo de Visa
    if(numberValue[0] == 4){
        logo.innerHTML="";
        const image=document.createElement("img");
        image.src="img/Logo/visa.png";
        logo.appendChild(image);
// Cuando inicie con un 5 se mostrara el logo de MasterCard
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
// Plasmar los select en la tarjeta
const expMonth= document.querySelector(".mes")
const expYear= document.querySelector(".year")
// Select mes
selectMes.addEventListener("change", selectMonth)
function selectMonth(b){
    expMonth.textContent=b.target.value;
}

// Select Año
selectYear.addEventListener("change", selectYea)
function selectYea(c){
    expYear.textContent=c.target.value;
}
// input CVV
const inputCVV= document.querySelector("#inputCVV")
inputCVV.addEventListener("keyup", inputCv)

function inputCv(c){
    let cvvValue=c.target.value;
    inputCVV.value=cvvValue.replace(/([A-Za-z])/g,"")
}






  





