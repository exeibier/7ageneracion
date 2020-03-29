const getKoderData = () => {
    let name = document.getElementById("koder-name").value
    let email= document.getElementById("koder-email").value
    let phone = document.getElementById("koder-phone").value

    let koderObject = {name,email,phone}
    console.log(koderObject)
    addKoderDb(koderObject)

}

var saveKoderData = document.getElementById("save-koder");
saveKoderData.addEventListener("click",getKoderData);

const addKoderDb = (koderToAdd) => {
    //Creando una instancia del objeto XMLHttpRequest   
    let xhttp = new XMLHttpRequest();

    //lo qye suedera cuando la petición se cumpla
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        console.log(this.responseText)
    }

    xhttp.open("PUT","https://javascript-ajax-d0ce6.firebaseio.com/xabier/koders/.json",true)
    //enviar peticion 
    xhttp.send(JSON.stringify(koderToAdd))

}
const getKoderFromDb = () => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
         kodersCollection = JSON.parse(this.responseText)
        console.log(kodersCollection)
    }
    xhttp.open("GET","https://javascript-ajax-d0ce6.firebaseio.com/xabier/koders/.json",true)
    xhttp.send()

}

var kodersCollection;

const printKoder = () => {
 for (koder in kodersCollection){
     console.log(kodersCollection[koder])
     document.write(kodersCollection[koder])
 }
}

const deleteKoderDb = (koderId) => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
         console.log(respones.text)
    }
    xhttp.open("DELETE","https://javascript-ajax-d0ce6.firebaseio.com/xabier/koders/.json",true)
    xhttp.send()
}