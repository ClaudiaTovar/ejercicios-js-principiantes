console.log("mayor")

/*Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

Nota: Intentarlo hacer sin el método Math.max de JavaScript.

// escribe tu función acá

// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9
*/
 
let min = ( arr ) =>{
    let arrOrdenado = arr.sort();
    console.log(`El numero menor es ${arrOrdenado[0]}`) 

}

min([5, 9, 2, 4, 5, 7])

let max = ( arr ) =>{
    let arrOrdenado = arr.sort();
    console.log(`El numero mayor es ${arrOrdenado[arrOrdenado.length - 1]}`) 

}

max([5, 9, 2, 4, 5, 7])