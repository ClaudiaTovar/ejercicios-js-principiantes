/*
Escribir una función llamada calcularImpuestos que reciba dos 
argumentos numéricos: edad e ingresos. Si edad es igual o mayor 
a 18 y los ingresos son iguales o mayores a 1000 debe retornar 
ingresos * 40%. De lo contrario retornar 0. 
*/



function calcularImpuesto(edad, ingresos){
    if (edad >= 18 & ingresos >= 1000){
        let impuesto = (ingresos *40) / 100
        alert(`Debes pagar= ${impuesto} pesos.`)
    } else {
        alert(`No debes pagar impuestos.`)
    }
}


console.log(calcularImpuesto(24, 5000))