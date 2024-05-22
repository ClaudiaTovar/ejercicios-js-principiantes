/*Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U 
*/

console.log("hola")

let transcribir = (str)=>{
    let nuevaStr = [];

    for(let i = 0; i <= str.length; i++){
         if(str[i] === "G"){
            nuevaStr.push("C")
        }else if(str[i] === "C"){
            nuevaStr.push("G")
        }else if(str[i] === "T"){
            nuevaStr.push("A")
        }else if(str[i]=== "A"){
            nuevaStr.push("U")
        }
    }

    let sinComas = nuevaStr.join("");

    return sinComas.toString();
 
}

console.log(transcribir("ACGTGGTCTTAA") )

