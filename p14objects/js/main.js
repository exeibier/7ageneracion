/* Crear una funcion que pida al usuario con un prompter las propiedades: nombr{name}, apellido{lastName}, 
edad {age} y telefono {phone} de un koder y crear un objeto {koderObject} con esos datos*/

//Algoritmo
//realizar una funcion donde mediante un prompt pida los datos del koder
//Crear un objeto vacio con el nombre de koderObject
//Dentro de la funcion poner un prompt de cada dato que queremos, con el nombre del objeto.{nombre de la propiedad que añadimos}




 const nameObject = () => {
    let koderObject = {}
    koderObject.name = prompt('ingresa el nombre de tu koder')
    koderObject.apelllidos = prompt('ingresa los apellidos de tu koder')
    koderObject.edad = prompt('ingresa la edad de tu koder')
    koderObject.telefono = prompt('ingresa el telefono de tu koder')

    console.log(koderObject);

 }