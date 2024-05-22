/* Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

// escribe tu función acá

// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""
*/

let capitalizar = ( oracion )=>{
    
    if(oracion === ""){
        return "";
    }else{
        let primeraLetra = oracion[0].toUpperCase();
        let restoOracion = oracion.slice(1);
     
        return primeraLetra + restoOracion;
    }

}

console.log(capitalizar("claudia esta bien"))
console.log(capitalizar("hola mundo"))
console.log(capitalizar(""))
