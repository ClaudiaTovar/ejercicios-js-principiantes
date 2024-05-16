/* Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
*/

let numeroDeAes = ( str ) => {
    let a = 0;

    for(let i = 0; i < str.length; i++){
        str[i] === "a";    
            a++;
        
     }
 console.log(`El numero de de "a" en la palabra ingresada es: ${a}`)
  return a;
  
 }

 console.log(numeroDeAes("abracadabra"))