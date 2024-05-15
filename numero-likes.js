
/*Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.

*/

let likes = (numero)=>{

    let numero2 = 0;

    if(numero < 1000){
        console.log(numero)
    }else if(numero >= 1000 & numero <= 999999){
        let numero2 = Math.trunc(numero/1000)
        console.log(numero2 + "K")
    }else{
        let numero2 = Math.trunc(numero/1000000)
        console.log(numero2+"M")
    }

}

likes(999999);