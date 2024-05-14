/*
Escribir una función llamada contrasenaValida que reciba un string 
y retorne true si el string es igual a "2Fj(jjbFsuj"
 o "eoZiugBf&g9". De lo contrario debe retornar false. */

 let ingresarDato = validarClave(prompt("ingrese contraseña") )



 function validarClave(contrasena){

       if(contrasena === "2Fj(jjbFsuj"){
   console.log(true,`contraseña valida`)
 } else if (contrasena === "eoZiugBf&g9"){
   console.log(true, "contraseña valida")
 }else{
   console.log(false, "contraseña invalida")
 }
  }