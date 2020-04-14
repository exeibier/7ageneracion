/*var someString = "23"
var someNumber = 23

console.log(someString.length)


var nombre = "Xabier Enrique Hernandez Hernandez"

var arrayNom = nombre.split(" ")

console.log(arrayNom)

if (condition) {
    result
} else if (condition) {
    result
} else {
    result
}

var producto = "Leche"

if (producto.length >= 5) {
    console.log("El producto tiene 5 caracteres o mas")
} else if (producto.length === 6){
    console.log("el producto tiene exactamente 6 letras")
} else {
    console.log("tiene menos de 5")
}

producto.length >= 5 ? console.log("El producto tiene 5 caracteres o mas") : console.log("tiene menos de 5")

var someArray = [
    "manzana",
    "fresa",
    "sandia"
]

for (let index = 0; index < someArray.length; index++) {
    console.log(someArray[index])
    
}*/

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} es un multiplo de 3 y 5`) 
    } else if ( i % 3 === 0){
        console.log(`${i} es un multiplo de 3`)
    } else if(i % 5 === 0) {
        console.log(`${i} es un multiplo de 5`)
    } else {
        console.log(i)
    }
}

