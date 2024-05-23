/* Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.

// escribe tu función acá

// código de prueba
console.log(imprimirMatriz([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9 */

console.log("hola")

let imprimirMatriz = ( arr )=>{
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j])
        }
    }
}

console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))
  
