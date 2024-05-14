/*Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.

// escribe tu respuesta acá

// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K" 
*/
/*
let numeroLikes = (numero)=>{
    contador = 0;
    for(let i = 0; i < numero.length; i++){
        contador++
    }

    if(contador === 3){
        console.log(numero)
    }else if(contador === 4){
        console.log(numero.substr(0)+"K")
    }else if(contador === 5){
        console.log(numero.substr(0)+"K")
    }
}

999.999
1.000.000 */
/*
para resolver el problema debo eliminar los ultimos numeros
del numero q ingrese en la funcion

*/