


let rango = (n1, n2)=>{

    let rangoGenerado = [];
    
        if(n1 < n2){
            for(let i = 0; n1 <= n2; i++){
                rangoGenerado.push(n1++);
            }
        
        }else if(n1 > n2){
            for(let i= 0; n1 >= n2; i++){
                rangoGenerado.push(n1--)
            }
        }

     return rangoGenerado;

     }


let rango2 = (rango(5 , 5))



let sumatoriaRango = ( rango2 ) =>{

    let suma = 0;

    for (let i = 0; i < rango2.length; i++){
       suma = suma + rango2[i];
    }

    return suma;
}


console.log(rango2.length)

console.log(rango2)

console.log(sumatoriaRango(rango2))



