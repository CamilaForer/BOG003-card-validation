const validator = {
  //Funcion encargada de comprobar el numero de tarjeta 
  isValid:(creditCardNumber)=>{
      let reverseNumber= []
      let plus=0
    //   Eliminar espacios en blanco para obtener una cadena de texto limpia
      let creditWithoutSpace=creditCardNumber.replace(/\s/g,"")
    //   Dividir la cadena de texto en un arreglo de caracteres
    creditWithoutSpace=creditWithoutSpace.split("")
    // Invertir el arreglo de caracteres
    reverseNumber=creditWithoutSpace.reverse()
     
    //   Iterador de suma de posiciones pares 
      for (let index = 0; index <= reverseNumber.length; index++) {
    // Condicion que multiplica a los numeros por dos al estar en una posicion par  
        if (index%2==1) {
              reverseNumber[index]=reverseNumber[index]*2
    
          }
      console.log("Posicion:", index, ' ', reverseNumber[index])    
          
      }
    //   console.log("Numero tarjeta", reverseNumber)
  }
};

export default validator;
