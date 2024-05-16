/* Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número. */


console.log("hola")


let retornarString = ( numero )=>{
    
    if(numero % 3 === 0 && numero % 5 === 0){
        console.log("fizzBuzz")
    
    }else if(numero % 3 === 0)
    { console.log("fizz") }

    else if (numero % 5 === 0){
        console.log("buzz")
 }else{
    console.log(numero)
 }
    
}

retornarString(6)
retornarString(20)
retornarString(30)
retornarString(8)

  