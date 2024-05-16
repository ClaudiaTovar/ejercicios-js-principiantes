
/* Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", e)) // 4 
*/

let incluido = (str1, str2)=>{


    let contador = 0;

    for(let i = 0; i <= str1.length; i++){
          if(str1[i] == str2 ){
               contador++;
          }
     }
 return contador;

}

console.log(incluido("claudia", 'a'))