//String Methods

//Práctica 1

//obtener el nombre completo del usuario e indicarle cuántos caracteres tiene su nombre

//Algoritmo 
//Crear una variable con un prompt que pida el nombre del usuario
// Usar el metodo lenght para medir el numero de caracteres
// imprimir en consola el numero de caracteres

/*var userName = prompt('Coloca tu nombre aquí');

console.log(userName.length)*/


//Práctica 2

//obtener el nombre completo del usuario
//Contar cuántos caracteres tiene
//si su nombre tiene menos de 15 caracteres, indicarle mediante un mensaje que su nombre es mmuy corto
//si tiene más de 15 caracteres indicarle que su nombre es muy largo

//Algoritmo
// crear un if donde pongamos que si la variable userName.lenght es menor o igual a 15 se imprima el mensaje
//su nombre es muy corto
// crear un else donde pongamos que si la variable userName.lenght es mayor a 15 se imprima su nombre es m
//muy largo
/*if (userName.length < 15) {
  console.log('Su nombre es muy corto')
} else {
  console.log('Su nombre es muy largo')
}*/

//Práctica 3
//obtener el nombre completo del usuario
//contar cuántas vocales tiene

/*vocals = userName.match(/[a,e,i,o,u]/gi);


console.log(vocals.length);*/

//Recibir una palabra del usuario, y formar una nueva palabra usando las dos primeras y las dos últimas
//letras de esa palabra. Si la palabra tiene menos de 5 caracteres, enviar un mensaje de error al usuario indicándoselo

//Algoritmo
//Crear una variable que cuente con prompt que pida una palabra
//de la palabra que se genere utilizar el metodo .substring seleccionamos las primeras dos letras de nuestra palabra
//de la palabra que se genero realizar otra variable con el metodo .lenght para seleccionar las ultimas dos

var word = prompt('ingresa tu palabra aquí');

var first = word.substring(0,word.length -2);
var second =  word.substring(word.length); 
console.log(second);

//pedir al usuario nombre y edad, y mostar un mensaje que diga "hola, soy {nombre} y tengo {edad} años"

//Algoritmo
//crear dos variables con una prompt cada uno, la primera que pida el nombre del usuario y la segunda que pida la edad
//Imprimir nombre y edad con el siguiente mensaje "hola soy 'nombre' y tengo 'edad' años"

/*var userName = prompt('ingresa tu nombre');
var userAge = prompt('Ingresa tu edad');

console.log('Hola, soy', userName ,'y tengo', userAge, 'años');*/
//Del texto "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
//Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias por la palabra "Koder", y mostrar el mensaje de nuevo al usuario

//Algoritmo
//Crear una variable que contenga un string que diga "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
// crear una variable que contenga el metodo replace, asignando que la palabra estudiante de forma global para que sea cambiada por koders

var originalMessage = 'Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado'
console.log(originalMessage);

var newMessage = originalMessage.replace(/estudiante/g, 'Koder');

console.log(newMessage);