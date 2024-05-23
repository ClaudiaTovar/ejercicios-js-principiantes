/*  
Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:

// escribe tu función acá

// código de prueba
console.log(numAsteriscos([
  ['*', '', '*'],
  ['', '*', ''],
  ['*', '', '*']
]))
// 5
*/

console.log("HOLA")

let numAsteriscos = ( arr )=>{
    let contador = 0;
    
    for(let i= 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){

        if(arr[i][j] === '*'){
            contador++
        }
     }
      
    }
    return contador; 
}


console.log(numAsteriscos([
    ['*', '', '*', 'a'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
  

/* Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:

// escribe tu función acá

// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0 */


  let numAsAr = (arr2) =>{
    let contador2 = 0;

    for( let k = 0; k < arr2.length; k++)
    if(arr2[k] === '*'){
        contador2++
    }
    return contador2;

  }

console.log(numAsAr(['', '*', '', '*'])) // 2
console.log(numAsAr(['*', '*', '*'])) // 3
console.log(numAsAr([])) // 0 */


