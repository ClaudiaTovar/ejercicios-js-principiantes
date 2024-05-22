/* Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).

// escribe tu función acá

// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []*/

console.log("hola")

let multiplicarPorDos = ( arr )=>{
    let nuevoArr = [];
    for(let i = 0; i < arr.length; i++){
        nuevoArr.push( arr[i] * 2)
    }

    return nuevoArr;
}

console.log(multiplicarPorDos([1, 2, 3])) // [2, 4, 6]