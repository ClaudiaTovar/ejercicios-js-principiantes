/*
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
*/

let indiceMasa = (peso, altura)=>{
    let indice = peso / altura**2
    if(indice < 18.5){
        console.log(`Tu indice de masa corporal es ${indice} y tienes bajo peso.`)
    }else if (indice > 18.5  & indice <24.9){
        console.log(`Tu indice de masa corporal es ${indice} y tienes un peso normal.`)
    }else if (indice > 25  & indice <29.9){
        console.log(`Tu indice de masa corporal es ${indice} y tienes sobrepeso-`)
    }else if (indice > 30){
        console.log(`Tu indice de masa corporal es ${indice} y tienes obesidad.`)
    }
}

console.log(indiceMasa(65, 1.8))
console.log(indiceMasa(72, 1.6))
console.log(indiceMasa(56, 1.7))