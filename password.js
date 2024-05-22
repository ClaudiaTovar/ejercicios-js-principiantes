/*Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”.
// escribe tu función acá

// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""
*/


let password = ( strn ) =>{
    let newPass = [];
    let espacios = [];

    if(strn === ""){
        console.log("No tiene nada dentro")
    }

    for(let i = 0; i <= strn.length; i++){
        if(strn[i] === " "){
            espacios.push(strn[i])
        } else if(strn[i] === "a"){
            newPass.push("4")
        }else if(strn[i] === "e"){
            newPass.push("3")
        }else if(strn[i] === "i"){
            newPass.push("1")
        }else if(strn[i] === "o"){
            newPass.push("0")
        }else[
            newPass.push(strn[i])
        ]
    }   

    newPass.toString()

    return newPass.join("")
}

console.log(password(""))
console.log(password("hola"))
console.log(password("esta es una prueba"))

