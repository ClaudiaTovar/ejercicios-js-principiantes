/* Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.

// escribe tu función acá

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]

*/

console.log("imprimir")

let numerosAPalabras = ( arr )=>{
    let nuevoArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            nuevoArr.push("cero");
        } else  if(arr[i] === 1){
            nuevoArr.push("uno");
        } else if(arr[i] === 2){
            nuevoArr.push("dos");
        } else  if(arr[i] === 3){
            nuevoArr.push("tres");
        } else  if(arr[i] === 4){
            nuevoArr.push("cuatro");
        }else  if(arr[i] === 5){
            nuevoArr.push("cinco");
        }else  if(arr[i] === 6){
            nuevoArr.push("seis");
        }else  if(arr[i] === 7){
            nuevoArr.push("siete");
        }else  if(arr[i] === 8){
            nuevoArr.push("ocho");
        }else  if(arr[i] === 9){
            nuevoArr.push("nueve");
        }else  if(arr[i] === 10){
            nuevoArr.push("diez");
        }else{
            nuevoArr.push("what?")
        }

    }
    return nuevoArr;
}

console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]
console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) // [0, 1, 2, 3, -1, 4]