const validator = {
  //Funcion encargada de comprobar el numero de tarjeta 
  isValid:(creditCardNumber)=>{
      let reverseNumber= []
      let Sum=0
      let plusPair=[]
    //   Eliminar espacios en blanco para obtener una cadena de texto limpia
      let creditWithoutSpace=creditCardNumber.replace(/\s/g,"")
    //   Dividir la cadena de texto en un arreglo de caracteres
    creditWithoutSpace=creditWithoutSpace.split("")
    // Invertir el arreglo de caracteres
    reverseNumber=creditWithoutSpace.reverse()
     
    //   Iterador de suma de posiciones pares 
      for (let index = 0; index < reverseNumber.length; index++) {
    // Condicion que multiplica a los numeros por dos al estar en una posicion par  
        if (index%2==1) {
              reverseNumber[index]=reverseNumber[index]*2
            //Condicion que separa y suma los numeros de la casilla si son mayores o iguales a 10  
            if(reverseNumber[index]>=10) {
            plusPair=reverseNumber[index].toString().split("")
            // Suma de los numeros separados mayores o iguales a 10
            reverseNumber[index]=parseInt(plusPair[0])+parseInt(plusPair[1])     
            }
          }

          Sum = parseInt(Sum) + parseInt(reverseNumber[index])
          console.log("TSuma", Sum)
      }
       if(Sum%10==0){
           return true

       }  
       else{
           return false
       }
  }
};

export default validator;
