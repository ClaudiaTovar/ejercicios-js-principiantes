/*Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

// escribe tu respuesta acá

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
*/

console.log("hola")

let contarRango = (n1 , n2)=>{
    if(n2 > n1){
        rango = (n2 - n1) - 1;
    return rango; 
    }else {
        rango = (n1 - n2) - 1
        return rango;
    }
    
}

console.log(contarRango(1 , 9))
console.log(contarRango(1332, 8743))
console.log(contarRango(5, 6 ))
console.log(contarRango(6, 5))
console.log(contarRango(8743, 1332 ))

