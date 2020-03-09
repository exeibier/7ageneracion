//Array methods

//Ejericico 1 

//pedir al usuario la cantidad de koders a registar
//pedir tantos nombres de koder como el usuario haya indicado
//guardar cada nombre de cada koder en una colección
//de cada Koder imprimir únicamente el primer nombre

//Algoritmo

var nomLen = parseInt(prompt('cuantos usuarios quieres registrar'));
var i;
var userName = [];



for ( i = 0; i < nomLen; i++) {
    var name =  prompt ('cual es tu nombre completo')
     userName.push(name)
}


var firstName = userName.split(' ', 1);

