//-------------------------------------VARIABLES-------------------------------------
/* 1. 
Has hecho una compra y sabes el precio del producto y su iva. 
Haz un script que te calcule el precio total que vas a pagar por tu compra.
Te recuerdo que para calcular el total debes sumar al precio el resultado 
de multiplicasr precio por el iva y dividir por 100.  */

/* //declaramos una varible con la operación del iva
var iva = (19/100);
//declaramos una variable con el precio
var precio = 35000;
//imprimimos el resultado con la operación dentro de la consola
console.log((iva * precio) + precio) */

//---------------------------------------------------------------------------
/* 2.
Un poco de interactividad. En este ejercicio debes escribir un programa que 
lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre" */

/* //declaramos una varible con un prompt para ingresar un nombre
var name = prompt('Escribe tu nombre')
//imprimimos un mensaje haciendo uso de la variable name
console.log('Hola '+ name) */

//---------------------------------------------------------------------------
/* 3.
En este ejercicio vas a pedir al usuario que teclee tres números enteros 
y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */

/* //declaramos la primer variable que solicite un número entero
var num1 = parseInt(prompt("Ingresa un número entero"));
//declaramos la segunda variable que solicite un número entero
var num2 = parseInt(prompt("Ingresa un número entero"));
//declaramos la tercer variable que solicite un número entero
var num3 = parseInt(prompt("Ingresa un número entero"));
//Calculamos la media con lso tres datos en una operación dentro de la consola
console.log((num1 + num2 + num3)/3) */

//---------------------------------------------------------------------------
/* 4. 
Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas
se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de
comensales calcule las cantidades de ingredientes necesarias. */

/* //declaramos las variables
var patatas, huevos, cebolla, personas;
//le asignamos un valor a cada variable
//a personas solocitamos la cantidad
personas = parseInt(prompt("Cantidad de personas"));
//a patatas calculamos la porción según el número de personas
patatas = (200*personas)/1000;
//a huevos calculamos la porción según el número de personas
huevos = patatas*5;
//a cebolla calculamos la porción según el número de personas
cebolla = patatas*300;
//imprimimos los resultados concatenandolos con strings
console.log("Las cantidades necesarias por número de comensales son: "+
            patatas + " Kilo(s) de patatas, "+
            huevos + " huevos, "+
            cebolla + " gramos de cebolla."); */


//-------------------------------------CONDICIONALES-------------------------------------
/* 1.
Se trata de escribir un script que diga si un número es par o es impar.
Recordemos que un número es par si al dividirlo por 2 da como resto 0. */

/* //declaramos una variable que recibe un número entero
let num = parseInt(prompt('Escriba un número'))
//declaramos una variable que realice una operación
let resto = (num%2)
//si resto es igual a 0
if(resto===0){
    //aparece una alerta que dice:
    alert('El número es par')
}
//si resto no es igual a 0
else{
    //aparece una alerta que dice:
    alert('El número es impar')
} */

//---------------------------------------------------------------------------
/* 2.
Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el 
cliente puede pedir vino, cerveza, refresco, agua. Si pide una cerveza o vino se le dirige a
la barra y si no pues se le dirige a la tienda. */

/* //se crea una función llamada eleccionBebida
function eleccionBebida(){
    //Declaramos una variable con información de seleción para que se escoja una bebida
    let bebida = parseInt(prompt(`Buenos días, selecciona el número con la bebida que desees:
        1) Vino
        2) Cerveza
        3) Refresco
        4) Agua`));
    //si la opción fue 1 o 2
    if (bebida===1 || bebida===2){
        //aparece una alerta que dice:
        alert('Ve por tu bebida a la barra')
    }
    //si la opción fue 3 o 4
    else if(bebida===3 || bebida===4){
        //aparece una alerta que dice:
        alert('Ve por tu bebida a la tienda')
    }
    //si la opción fue otro dígito diferente al de las opciones
    else{
        //aparece una alerta que dice:
        alert('Ingresa un número válido');
        //se repite la función
        eleccionBebida();
    }
}
//llamamos la función
eleccionBebida(); */

//---------------------------------------------------------------------------
/* 3.
Vamos a convertir notas en niveles usando un if anidados. Notas menor de 5 suspenso,
5-6 aprobados, 7-8 notables, 9-10 sobresalientes */

/* //se crea una función llamada resultadoNotas
function resultadoNotas(){
    //Declaramos una variable solicitando el número de la nota obtenida
    let nota = parseInt(prompt('Ingresa la nota obtenida'))
    //si el dígito fué menor a 5
    if(nota<5){
        //aparece una alerta que dice:
        alert('Nota suspendida')
    }
    //si el digito fué 5 0 6
    else if(nota===5 || nota===6){
        //aparece una alerta que dice:
        alert('Nota aprovada')
    }
    //si el digito fué 7 u 8
    else if(nota===7 || nota===8){
        //aparece una alerta que dice:
        alert('Nota notable')
    }
    //si el digito fué 9 o 10
    else if(nota===9 || nota===10){
        //aparece una alerta que dice:
        alert('Nota sobresaliente')
    }
    //si el valor ingresado es diferente
    else{
        //aparece una alerta que dice:
        alert('Ingresa un número válido')
        //se repite la funcion
        resultadoNotas()
    }
}
//llamamos la función
resultadoNotas(); */


//-------------------------------------BUCLES FOR-------------------------------------
/* 1.
Este script el usuario deberá teclear una letra y un número, 
y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado. */

/* //declaramos una veriable que solicita una letra
let letra = prompt('Ingrese una letra')
//declaramos una veriable que solicita un número
let numero = parseInt(prompt('Ingrese un número'))
//declaramos una veriable con unstring vacío
var cadena  = ''
//creamos un loop donde muentras que veces sea menor que numero
for(let veces = 0; veces<numero ; veces++){
    //la cadena repite letra hasta que el loop se cumpla
    cadena += letra
}
//impriminos el resultado de cadena
console.log(cadena) */

//---------------------------------------------------------------------------
/* 2.
Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: El
dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de
la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4*/

/* //creamos un primer loop lado izquierdo del contador
for(var i=0 ; i<2 ; i++){
    //creamos un segundo loop lado derecho del contador
    //una vez se cumpla la condición de este loop pasa al primero
    for(var b=0 ; b<5 ; b++){
        //imprimimos el resultado por cada recorrido
        console.log(i+':'+b)
    }
} */

//---------------------------------------------------------------------------
/* 3.
Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, 
el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará 
formada por una serie de astericos tan larga como diga el número de línea en el que está.
Para separar una linea de la siguiente en console o en alert debes usar "\n".
En este ejercicio usa console.log. */

/* //declaramos una variable con string vacía
let cadena =''
//declaaramos una variable que recibe un número entero
valorEntero = parseInt(prompt('Escriba cualquier valor entero'));
//iniciamos el loop - tendrá en cueta las veces que crea una fila
//de acuerdo al valorEntero 
for (let fila = 0; fila < valorEntero; fila++){
    cadena=''//llamamos a la variavle cadena
    for(ancho = 0; ancho <= fila; ancho++){
        //por cada vez que se cumpla el primer loop antes de llegar a su
        //condición se repite el segundo loop
        cadena += '*';//a cadena le agregamos un *
        }
    console.log( cadena+ '\n')//mostramos el esultado con un salto cada
    //vez que se repita el loop para crear la forma
}  */


//-------------------------------------BUCLES WHILE-------------------------------------
/* 1.
En este bucle vamos a generar una lista c on los 20 primeros números pares */

/* //declaramos las variables
var lista, par;
//le asignamos el valor de 0 a la variable lista
lista = 0;
//creamos el while con la codición de lista<40
//lista<40 ya que solo necesitaremso los priemros 20 números pares
while(lista<40){
    //añadimos digitos uno a uno hasta que se cumpla la condción
    lista++
    //le asignamos un operación a la variable par
    par = lista%2;
    //si el resto de par es 0 quiere decir que el número es par
    if(par===0){
    //muetra los resultados pares de los primeros 40 números
    console.log(lista)
    };
} */

//---------------------------------------------------------------------------
/* 2.
Un ejemplo típico de bucle es averiguar si un número es primo, es decir, si solo es
divisible po 1 y por si mismo. */

/* var num = parseInt(prompt('Escriba un número entero'))
var direfenteDeUno = 2
while(direfenteDeUno<=num-1){
    if(num%direfenteDeUno==0 || num === 1){
        console.log('No es número primo')
    }
    else{
        console.log('Es número primo')
    }
    break
} */


//-------------------------------------BUCLES DO WHILE-------------------------------------
/* 1.
Realiza un script que le pida al usuario que telee la l e t r a A (en mayúscula) y mientras
no lo haga se lo vuelva a pedir. Usa un bulce do.. while y la ventana alert para los mensajes */



//-------------------------------------FUNCIONES-------------------------------------
/* 1.
Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado
la suma de ambos números. Se supone que se usarán solo números válidos. */

/* //se crea la función con los argumentos num1 y num2
function suma(num1, num2){
    //regresamos la operación de suma en los dos argumentos
    return num1+num2
}
//imprimimos el resultado definiendo los dos argumentos (num1 y num2)
console.log(suma(2,3)) */

//---------------------------------------------------------------------------
/* 2.
Escribe una función que recibe como argumento un precio y el porcentaje de impuestos.
La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le
descuenta un porcentaje del 10% si es mayor de 100 euros. */

/* //Variable de precio
var precio = parseInt(prompt('Introduce el precio'))
//Variable de impuesto
var impuesto = (19/100)
//Función del pago total dependiendo el precio
function pagoTotal(arg1, arg2){
  //Variable del precio más impuesto
var precioImpuesto = arg1+(arg1*arg2)
  //Variable de descuento
var descuento = (10/100)
  //si el primer alrgumento es mayor a 100
    if(arg1>100){
      //------------------Variable resultado de operación
      //1. Primero calcula el precio más impuesto menos el porcentaje de desc
      //2. Al precio le restamos el resultado de la operación
        let totalDesc = precioImpuesto-(precioImpuesto*descuento)
      //Regresa un mensaje con el total más descuento
        return alert(`Por tu compra mayor a 100€ te aplicamos el descuento, su tolal es de ${totalDesc}`)
  //si no lo es
    } else{
      //Regresa únicamente el valor más iva
        return alert(`Su tolal es de ${precioImpuesto}`)
    }
}
pagoTotal(precio, impuesto) */

//---------------------------------------------------------------------------
/* 3.
Escibe una función que devuelva el siglo al que correponde un 
año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200.... */

/* //declaramos la variable de ingreso del año
let añoRandom = parseInt(prompt("Escribe el año al que quieras saber su siglo: "))
//Establecemos una función con el argumento de año
function conocerSiglo(año){
  //declaramos una variable que realice la operación para calcular el siglo
    let conocerSiglo = parseInt((año - 1)/100)+1
    //regresa el resultado
    return conocerSiglo
}
//Mostramos el resultado con un mensje dentro de una alerta 
alert(`Pertenece al siglo ${conocerSiglo(añoRandom)}`) */

//-------------------------------------ARRAYS-------------------------------------
/* 1.
En este script deberás crear un array para guardar los nombres de los días de la semana,
empezando por 0 para el domingo. Para comprobar el funcionamiento pide al usuario un número
entre 0 y 6 y devuelve el nombre del día. Se supone que el dato tecleado estará entre 0 y 6. */

/* //Declaramos la variable con el array con los días de la semana
let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Vienes", "Sábado"]
//Declaramos una variable para que el usuario introduzca un número
let user = parseInt(prompt("Introduce un número del 0 al 6"))
//Este número escogerá el valor dentro del array, por eso especificamos el rango
//Se imprime la variable de días con el número ingresago (Seleccionando la posición del array)
console.log(dias[user]) */

//---------------------------------------------------------------------------
/* 2.
Escribe una función que determina si la letra que se le pasa como argumento 
se encuentra contenida dentro de un array de letras que se le pasa como segundo argumento.
Se trata de resolverlo sin usar métodos del objeto array, solo el dato tipo array. */

/* //Declaramos las variables
var ingresoLetra, listaLetras, incluye;
//Le pedimos al usuario que increse una letra
ingresoLetra = prompt('Ingresa una letra')
//Creamos la lista con algunas letras
listaLetras = ['a','b','c','d','e','f','g','h','i','j']
//Creamos la finción con dos argumentos
function buscadorLetras(letras ,letra){
  //Usamos los argumentos para identificar si letras incluye letra dentro de sí
    incluye = letras.includes(letra)
    //Si la contiene el resultado será true, por tanto
    if(incluye===true){
        //Activa una alerta con un mensaje de la letra que se encuentra
        alert(`La letra "${letra}" se encuentra dentro de la lista`)
    } else{
        //Activa una alerta con un mensaje de la letra diciendo que no se encuentra
        alert(`La letra "${letra}" no se encuentra dentro de la lista`)
    }
}
buscadorLetras(listaLetras, ingresoLetra) */


//-------------------------------------CLASES Y OBJETOS-------------------------------------
/* 1.
Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las
calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTM, y el
objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá
el nombre y la media de sus calificaciones. */

/* //Para crear un objeto lo declarams dentro de un avariable y abrimos llaves
var calificaciones = {
    //Definimos las propiedades
    nombreAlumno: 'Juan',
    ingles: 3.4,
    programacion: 4.5,
    htm: 3.7,
}
//Creamos una variable para identificar la media haciendo uso del nombre del objeto junto
//a su propiedad por medio de una operación.
var media = (calificaciones.ingles + calificaciones.programacion + calificaciones.htm)/3
//Imprimimos el resultado
console.log(`La media de ${calificaciones.nombreAlumno} es de ${media}`) */

//---------------------------------------------------------------------------
/* 2.
Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros
recorridos por una persona en cada sesión de ejercicios. Las propiedades de la clase serán:
nombre
sesiones
numsesioens
El nombre es el de la persona, en los sesiones se almacenará el numero de 
kilometros recorridos en cada sesión y numsesiones contien el número de sesiones anotadas.
Tiene dos métodos:
anotar: anota los kilómetros
media: calcula la media de kilómetros recorridos */

var kmPorSesion = {
    nombre: 'Juan',
    sesion1: 2.4,
    sesion2: 3,
    sesion3: 2.7,
    sesion4: 2.9,
    numSesiones: 4,
    anotar:(km1, km2,  km3, km4)=>{
        var totalKm = (km1+km2+km3+km4)
        return totalKm
    },
    media: (sesiones, kms)=>{
        var mediana = kms/sesiones
        return mediana
    }
}


//-------------------------------------LO BÁSICO DEL DOOM-------------------------------------
/* 1. y 2.
Tienes la página web modelo que debe cambiar el color del titular del negro actual a rojo y además
debe quedar centrado. El único cambio será en el bloque cambiar y el código de función cambiar() */
//---------------------------------------------------------------------------
/* 2.
En la página web modelo ves que tienes un titular Hola Mundo. Se trata de añadir una función
javascript para que al pulsar el botón cambiar este título se convierta en Hola Mundo con Javascript. 
El unico cambio necesario es el bloque con el texto cambiar y  completar la función cambiar() que
aparece en el código de la página.
ALGO DE EVENTOS 
Cambio HTML */

//Líneas 70-76 doom.html