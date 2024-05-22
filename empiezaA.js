/* Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).

// escribe tu función acá

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []*/

console.log("hola")

let empiezanConA = ( arr ) =>{
    let nuevoArr = [];

    for(let i = 0; i < arr.length; i++){
            for( let j = 0; j < arr[i].length; j++){
        }

        if(arr[i][0] === "a"){
            nuevoArr.push(arr[i])
        }
        if(arr[i][0] === "A"){
            nuevoArr.push(arr[i])
        }
    }

    return nuevoArr;

}

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"]))
console.log(empiezanConA(["beta", "delta", "gama", "amaya", "Amelia"]))