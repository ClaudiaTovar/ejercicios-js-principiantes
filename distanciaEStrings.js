/* Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).

// escribe tu función acá

// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3*/

console.log("hola")

let distancia = ( str1, str2 )=>{

    let contador = 0;
    
    for(let i= 0; i < str1.length; i++){
     
        if(str1[i] !== str2[i]){
            contador++
        }
    }
    return contador; 
    }


    



console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carros", "correr")) // 3*/

