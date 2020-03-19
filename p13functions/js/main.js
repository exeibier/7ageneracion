/*var bmentorsNames = [
    'Brenda González',
    'Shalem Solis',
    'Jorge Ochoa',
    'Rurick Maqueo',
    'Alex Cruz',
    'Daniel Ortega'
];*/

//iterear dentro del array
//por cada item, obtener el nombre de cada bmentor
//Extraer la primer letra de cada palabra
//Concatenar el contenido de cada item con las indiciales, separadas por un punto
//Mostrar en cosola el resultado

/*bmentorsNames.forEach(name => {
    name.forEach()
});*/

//Practica
/*Crear una funcion o funciones que permitan al usuario elegir
una operación básica, indicar 2 valores, y ejecutar la operación seleccionada,
imprimir el resultado*/

//Algoritmo
//Crear una funcion donde se asigne una operación donde pida tres parametros
//dentro de la función crear tres variables representando una operacion 
//basica cada uno.
//Poner si 

const globalOp = (operation, number1, number2) => {

   if (operation === "suma") {
       console.log(`La ${operation} es:${number1 + number2}`)
   } else if (operation === "resta") {
        console.log (`La ${operation} es:${number1 - number2}`)
   } else if (operation === "multiplicacion") {
    console.log (`La ${operation} es:${number1 * number2}`)
   } else if (operation === "division") {
    console.log (`La ${operation} es:${number1 / number2}`)
   } else {
       console.error('Tu operación no es valida')
   }


};

var bmentorsNames = [
    "Brenda González",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
]
var amentorsNames = [
    "Verónica Nemecio",
    "Carolina Gayoso",
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba",
    "Israel Salinas",
    "Carlos Ramos"
]

//función que me permita ingresar el nombre de un array, y 
//contar cuántos items tiene, si el array no existe, debe enviar un prompt que diga "tu array no existe"



//función que reciba un array, e imprima los elementos de ese array
// en orden alfábetico y con la primer palabra en uppercase


//función que reciba un array, un número, y debe de imprimir cada uno de
// los items del array con los caracteres limitados al número ingresado


//función que reciba una cantidad (número), este número será la cantidad de
// veces que se solicite al usuario mediante un prompt algún nombre, todos los nombres se deben almacenar en una colección y al finalizar me debe mostrar la lista de nombres, con sus respectivas iniciales



