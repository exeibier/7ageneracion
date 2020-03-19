//constructors

/*var someAnimal = {
   name: 'Ornitorinco',
   ageExpentacy: 30,
   age: 10,
   remaningLife = function (){
      return this.ageExpentacy - this.age
   }
}*/

var kodersMatrix = [
   [
       "Israel",
       "Salinas Martínez",
       "5543788096",
       "27-09-1989"
   ],
   [
       "David",
       "Cermeño Moranchel",
       "5512312345",
       "14-11-1995"
   ],
   [
      "Xabier",
      "Hernández Hernández",
      "5531217119",
      "21-02-1992"  
   ]
]

//ALGORITMO
//Tener una matriz de arrays
//Crear una estructura de objeto 
//crear una funcion que asigne los datos del array al objeto
//

var koderArray = [
      "Israel",
       "Salinas Martínez",
       "5543788096",
       "27-09-1989"
]
function Koder(name,lastName,phone,birthDate) {
   this.name = name,
   this.lastName = lastName,
   this.phone = phone,
   this.birthDate = birthDate
   this.printFullName = function () {
      return this.name + '' + this.lastName
   }
}; 

var kodersCollection = []

kodersMatrix.forEach((dataArray) => {
   let koderObject = new Koder (...dataArray);
   kodersCollection.push(koderObject);
})

console.log(kodersCollection)


//pedir al usuario la cantidad de koders a registrar
//por cada koder, pedir nombre, apellidos, calificación en html, calificación en css, calificación en js,
//generar un objeto del tipo Koder por cada koder registrado
//guardarlo en una colección que se llame KodersList

//pt2:
//agregar a nuestro constructor un método que permita obtener el promedio del koder


/*var snackReceipt = [
   [  
      'hot nuts',
      'cacahuates',
      'en bolsa',
      'mafer'
   ]
   [
      'Pringles',
      'papas',
      'en lata',
      'sabritas'
   ]
   [
      'Sabritones',
      'chicharrones',
      'en bolsa',
      'barcel'
   ]
]*/

/*function Snack (name, type, container, brand){
   this.name = name
   this.type = type,
   this.container = container,
   this.brand = brand
   this.printSnackname = function () {
      alert ('nuestra botana ' + this.name + 'es la mas sabrosa')
   }
}

var botana = [];

const snackBookReceipt = () => {
   let botanaInfo = [];
   let addSnack = parseInt(prompt('Cuantas botanas quieres registrar?'))
   let i;
   for (i = 0; i < addSnack; i++){
      let name = prompt('cual es el nombre de tu botana')
      let type = prompt('cual es el tipo de tu botana')
      let brand = prompt('cual es el la marca de tu botana')
      botanaInfo.push(name, type, brand)
      let papash = new Snack (...botanaInfo)
      botana.push(papash)
   }
   console.log(botana)
}*/
/*
function Papita(marca, type, size) {
   this.marca = marca,
   this.type = type,
   this.size = size
}
var botana = [];
const quiereUnaPapa = () => {
   let botanaInfo = [];
   let nuevaPapa = parseInt(prompt("Cuantas botanas desea?"))
   for(var i=0; i<nuevaPapa; i++){
       let marca = prompt("Ingrese la marca de la botana ")
       let type = prompt("Ingrese que tipo de botana ")
       let size = prompt("Ingrese el tamaño")
       botanaInfo.push(marca, type, size)
       let papash = new Papita (...botanaInfo)
       botana.push(papash)
   }
   console.log(botana)
}*/

const products = [
   {
     description: 'Cerveza Modelo Especial Botella 355 mL x 6',
     price: 94.86,
     type: 'beer'
   },
   {
     description: 'Cerveza Sol Clamato Lata 473 mL',
     price: 22,
     type: 'beer'
   },
   {
     description: 'Cerveza Heineken Lata 473 mL',
     price: 24.2,
     type: 'beer'
   },
   {
     description: 'Cerveza Victoria Original Lata 355 mL',
     price: 15.95,
     type: 'beer'
   },
   {
     description: 'DOS EQUIS XX LAGER LATA 473ML',
     price: 22,
     type: 'beer'
   },
   {
     description: 'Cerveza Corona Light Clara Lata 355 mL x 12',
     price: 172,
     type: 'beer'
   },
   {
     description: 'Cerveza Michelob Superior Light Beer Lata 355 mL',
     price: 19.25,
     type: 'beer'
   },
   {
     description: 'Cerveza Dos Equis Ambar Latón 473 mL',
     price: 22,
     type: 'beer'
   },
   {
     description: 'Cerveza Sol Michelada Lata 473 mL',
     price: 22,
     type: 'beer'
   },
   { description: 'VICTORIA LATON 473', price: 18, type: 'beer' },
   {
     description: 'Cerveza Dos Equis Ambar Botella 355 mL',
     price: 18.15,
     type: 'beer'
   },
   {
     description: 'Cerveza XX Lager 355 mL',
     price: 18.15,
     type: 'beer'
   },
   {
     description: '12 Pack Cerveza Modelo Especial 355 mL',
     price: 167.04,
     type: 'beer'
   },
   {
     description: 'Cerveza Corona Light Latón 473 mL',
     price: 17,
     type: 'beer'
   },
   {
     description: 'Cerveza Sol Chelada Lata 473 mL',
     price: 22,
     type: 'beer'
   },
   {
     description: 'Cerveza Tecate Original 355 mL x 12',
     price: 139.2,
     type: 'beer'
   },
   {
     description: 'Cerveza Indio Oscura 355 mL x 12',
     price: 174,
     type: 'beer'
   },
   {
     description: 'Cerveza Cucapá Oscura Botella 355 mL',
     price: 27.5,
     type: 'beer'
   },
   {
     description: 'Cerveza XX Lager Lata 355 mL',
     price: 16,
     type: 'beer'
   },
   {
     description: 'Cerveza Barrilito Oscura 325 mL ',
     price: 11,
     type: 'beer'
   },
   {
     description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
     price: 27.5,
     type: 'chip'
   },
   {
     description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
     price: 25.5,
     type: 'chip'
   },
   {
     description: 'Botanas Chips Papas Jalapeño 100 g',
     price: 29.7,
     type: 'chip'
   },
   {
     description: 'Botana Paketaxo Quexo 215 g',
     price: 52.8,
     type: 'chip'
   },
   {
     description: 'Botana Doritos Incógnita 64 g',
     price: 18.15,
     type: 'chip'
   },
   {
     description: 'Botana Fritos Sal y Limón 57 g',
     price: 15.4,
     type: 'chip'
   },
   {
     description: 'Botana Doritos Nacho 58 g',
     price: 17.6,
     type: 'chip'
   },
   {
     description: 'Botana Doritos Flamin Hot 62 g',
     price: 17.6,
     type: 'chip'
   },
   {
     description: 'Botanas Chips Papas Fuego Limón 100 g',
     price: 29.7,
     type: 'chip'
   },
   {
     description: 'Papas Sabritas Original 42 g',
     price: 17.6,
     type: 'chip'
   },
   {
     description: 'Papas Sabritas Adobadas 42 g',
     price: 16.5,
     type: 'chip'
   },
   {
     description: 'Cacahuates Hot Nuts Multintenso 50 g',
     price: 11,
     type: 'chip'
   },
   {
     description: 'Botana Fritos Chorizo Chipotle 57 g',
     price: 15.95,
     type: 'chip'
   },
   {
     description: 'Botana Chips Sal de Mar Bolsa 170 g',
     price: 49.5,
     type: 'chip'
   },
   {
     description: 'Botana Cheetos Poffs 100 g',
     price: 34.1,
     type: 'chip'
   },
   {
     description: 'Papas Fritas Stax Cheddar 156 g',
     price: 47.85,
     type: 'chip'
   },
   {
     description: 'Papas Sabritas Original 240 g',
     price: 75.35,
     type: 'chip'
   },
   {
     description: 'Botana Doritos Nacho 370 g',
     price: 82.5,
     type: 'chip'
   },
   {
     description: 'Chicharrón de Cerdo Sabritas 115 g',
     price: 55,
     type: 'chip'
   },
   {
     description: 'Botana Cheetos Torciditos 150 g',
     price: 34.1,
     type: 'chip'
   },
   {
     description: 'Papas Ruffles Queso 290 G',
     price: 71.5,
     type: 'chip'
   },
   {
     description: 'Dip Tostitos Queso Suave 255 g',
     price: 69.3,
     type: 'chip'
   }
 ]


 const isChip = products.filter((products) => {
      return products.type === 'chip'
 })  

 console.log(isChip)

 const isBeer = products.filter((products) => {
   return products.type === 'beer'
})  

console.log(isBeer)
 //partir el arreglo original en dos para obtener arreglo chips arreglo beer
 //Crear un arreglo con todos los precios menores a 50 pesos
 //y crear un ultimo con todos los que sean mayores a 50

 const lessThan50 = products.filter((products) =>{
    return products.price < 50  
 })

 console.log(lessThan50)

 const moreThan50 = products.filter((products) =>{
   return products.price >= 50  
})

console.log(moreThan50)

const productMapped = products.map((products)=> {
   return `${products.type} - ${products.description} - ${products.price}`
})
console.log(productMapped)

//preguntar el preció y si es divisible entre 2 retornar solo descripción sino, regresar el objeto normal
//preguntar si el preció es menor a 20 y si lo es agregar la propiedad "ican: true" al objeto
//regresar el objeto en formato de string con formato 'tipo - descripción - precio' (el tipo debe venir en español y al precio agregarle $)

const divProd = products.map((product) => {
   let div = product.price % 2
   if (div === 0 ){
      return `${product.description}`
   } else {
      return `${product.type} - ${product.description} - ${product.price}`
   }
})

console.log(divProd)

const priceProd = products.map((product) => {
    product.ican = 'se puede comprar'
   if (product.price < 20 ){
      return `${product.type} - ${product.description} - ${product.price} - ${product.ican}`
   } else {
      return `${product.type}`
   }
})

console.log (priceProd)

const spanishProd = products.map((product) => {
   return `tipo: ${product.type} - Descripción: ${product.description} - $${product.price}`
})

console.log(spanishProd)

const sum = products.reduce((accum, product, index) => {
   return accum + product.price
},0)

console.log(sum)




//const suma1 = suma de los beer
//const suma2 = suma de los chip
//const beers = un nuevo arreglo, filtrando los objetos de tipo beer, y regresa las descripciones ejemplo: ['Corona Mega']
//const chips = un nuevo arreglo, filtrando los objetos de tipo chip, y regresa las descripciones ejemplo: ['Sabritas']

const sumChips = products.reduce((accum,product) => {
   if (product.type === 'chip') {
      return accum + product.price
   } else {
      return accum
   }
    
},0)

console.log(sumChips)

const sumBeer = products.reduce((accum,product) => {
   if (product.type === 'beer') {
      return accum + product.price
   } else {
      return accum
   }
    
},0)

console.log(sumBeer)

const beers = products.reduce((accum,product) => {
   if (product.type === 'beer')  accum.push(product.description)
      return accum
   
},[])

console.log(beers)

var someArray = [1, 2, 3, 4, 5]
var stringArray = ["hola ", "koders", "!!!"]
/*For each*/
someArray.forEach((number) => {
    console.log(`El número es: ${number}`)
})
/*filter*/
/*-----usando filter-----*/
var filteredArray = someArray.filter((number) => {
    return number % 2 === 0
})
console.log(filteredArray)
/*-----usando forEach----*/
var filteredArray2 = [];
someArray.forEach((number) => {
    if (number % 2 === 0) {
        filteredArray2.push(number)
    }
})
console.log(filteredArray2)
/*filter*/
/*-----usando map-----*/
var mappedArray = someArray.map((number) => number * 10)
console.log(`mapped Array: `)
console.log(mappedArray)
/*----Usando forEach -----*/
var mappedArray2 = [];
someArray.forEach((number) => {
    let newNumber = number * 10
    mappedArray2.push(newNumber)
})
console.log(mappedArray2)
/*Reduce*/
var someVar = stringArray.reduce((reducedArray, number) => {
    return reducedArray + number
})
var reducedArray2 = []
var total = 0;
someArray.forEach((number) => {
    total += number
})
var practicasDeKoders = [
    [
        0,
        1,
        1,
        1,
        0,
        1
    ],
    [
        1,
        1,
        1,
        1,
        1,
        1
    ],
    [
        1,
        1,
        1,
        0,
        0,
        0
    ]
]
var practicasDeAiry = practicasDeKoders[0].reduce((totalDePracticas, practica) => totalDePracticas + practica)
console.log(practicasDeAiry)
var practicasDeIvan = practicasDeKoders[1].reduce((totalDePracticas, practica) => totalDePracticas + practica)
console.log(practicasDeIvan)
var practicasDeCeci = practicasDeKoders[2].reduce((totalDePracticas, practica) => totalDePracticas + practica)
console.log(practicasDeCeci)
var totalDePracticasDeKoders = []
practicasDeKoders.forEach((item) => {
    let practicasReducidas = item.reduce((totalDePracticas, practica) => totalDePracticas + practica)
    totalDePracticasDeKoders.push(practicasReducidas)
})
console.log("total de practicas de koders")
console.log(totalDePracticasDeKoders)
var kodersMasAplicados = totalDePracticasDeKoders.filter((practicasDeUnKoder) => {
    return practicasDeUnKoder > 3
})
console.log("koders mas aplicados")
console.log(kodersMasAplicados)
