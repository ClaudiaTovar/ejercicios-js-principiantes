/* Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).

// escribe tu función acá

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []*/

console.log("hola")

let terminanConS = ( arr ) =>{
    let nuevoArr = [];

    for(let i = 0; i < arr.length; i++){
            for( let j = 0; j < arr[i].length; j++){

            }
            if(arr[i][arr[i].length - 1] === "s"){
                nuevoArr.push(arr[i])
            }
    
        }

        

    return nuevoArr;

}

console.log(terminanConS(["pruebas", "lasaro", "árbol", "tokens", "sabotaje", "ordenes"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []

