/*Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

// escribe tu función acá

// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) //
*/

let capitalizar = ( oracion )=>{
    let nuevaOracion = [];
    if(oracion === ""){
     console.log("no tiene nada dentro")
     return
    }

    for(let i = 0; i <= oracion.length; i++){
       if(oracion[i] === oracion[0]){ 
            nuevaOracion.push(oracion[i].toUpperCase())
        }else if(oracion[i] === " "){
            nuevaOracion.push(oracion[i])
            nuevaOracion.push(oracion[i + 1].toUpperCase())
            i++;
        }else {
            nuevaOracion.push(oracion[i ])
        }
    }
    
    nuevaOracion.toString()
    return nuevaOracion.join("")
    
}

console.log(capitalizar("make it real"))
console.log(capitalizar("hola mundo"))
console.log(capitalizar(""))
