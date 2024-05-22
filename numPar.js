/*Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.

// escribe tu función acá

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []*/

console.log("par")

let par = ( arr ) =>{
    let soloPares = [];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] % 2 === 0){
            soloPares.push(arr[i])
        }
    }

    console.log(`Estos son los numeros pares ${soloPares}`)
}

par([1, 2, 3, 4, 5, 6])