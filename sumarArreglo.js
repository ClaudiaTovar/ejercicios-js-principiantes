/*Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

// escribe tu respuesta acá

// código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0
*/

let sumarArreglo = ( arreglo ) =>{

    let suma = 0;

    for (let i = 0; i < arreglo.length; i++){
       suma = suma + arreglo[i];
    }

    return suma;
}

console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(sumarArreglo([3, 1, 2]))
console.log(sumarArreglo([]))


