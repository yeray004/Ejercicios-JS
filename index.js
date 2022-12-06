/*3.*/
/*
var num1 = parseInt(prompt("Escribe un número entero"));
var num2 = parseInt(prompt("Escribe un número entero"));
var num3 = parseInt(prompt("Escribe un número entero"));
console.log((num1 + num2 + num3)/3) */

/*4.*/
/* 
let num = 18;
let resto = num%2;
if (resto===0){
    alert(num+" es par");
}
else{
    alert(num+" no es par");
} */

/*Condicionales*/
/*1.*/
/* 
var articulo = prompt("Puede elegir: vino, cerveza, otros")
if ( articulo === "vino" || articulo === "cerveza"){
    alert("vaya a la barra");
}else{
    alert("vaya a la tienda");
} */

/*BUCLES*/
/*  FOR */
/* let letra, veces, cont, msg='';
letra = prompt("Escriba una letra");
veces = parseInt(prompt("Escribe un entero"));
for( cont = 0; cont < veces; cont++) {
    msg += letra;
}
alert(msg); */


/* Escibe una función que devuelva el siglo al que correponde un 
año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200.... */

function conocerSiglo (año){
    let conocerSiglo = parseInt((año - 1)/100)+1;
    return conocerSiglo;
}
let añoActual;
añoActual = parseInt(prompt("Escribe el año: "))
alert("Pertenece al siglo " + conocerSiglo (añoActual));

/* Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos. */
/* 
function resultado (num1, num2){
    let num1 = parseInt(prompt("Escribe un número"));
    let num2 = parseInt(prompt("Escribe un número"));
    let resultado = num1+num2;
    return resultado;
}
alert("El resultado es :"+ resultado); */

let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Vienes", "Sábado"];
let user = parseInt(prompt("Introduce un número del 0 al 6"));
console.log(user + dias)