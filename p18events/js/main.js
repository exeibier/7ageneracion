var kodersArray = [
]

const saveKoder = () => {
    let koderName = document.getElementById("koder-name").value;
    let koderLastName = document.getElementById("koder-last-name").value;
    let koderDeliveredPractices = document.getElementById("koder-delivered-practices").value;
    let koderAssistances = document.getElementById("koder-assistances").value;
    
    let koderObject = {koderName,koderLastName,koderDeliveredPractices,koderAssistances}
    
    console.log(koderObject)
    kodersArray.push(koderObject);
    printKoders();
    cardKoders();
    addDeleteButtonListener();
}

const printKoders = () => {
    document.getElementById("koders-wrapper").innerHTML = ""
    kodersArray.forEach((koder,index) => {
        let koderFullName = koder.koderName + " " + koder.koderLastName;
        let koderAssistances = koder.koderAssistances;
        let koderDeliveredPractices = koder.koderDeliveredPractices;
        let currentContent = document.getElementById("koders-wrapper").innerHTML;  
        let newContent = `
            <tr id='koder-${index}'>
                <td>${index + 1}</td>
                <td><span class="text-uppercase">${koderFullName}</span></td>
                <td>${koderAssistances}</td>
                <td>${koderDeliveredPractices}</td>
                <td>
                    <div class='btn btn-danger' data-koder-index:"${index}">Eliminar</div>
                </td>
            </tr>
            `
        document.getElementById("koders-wrapper").innerHTML= currentContent + newContent;
    })
}

const cardKoders = () => {
    document.getElementById("koders-cards").innerHTML = ""
    kodersArray.forEach((koder) => {
        let koderFullName = koder.koderName + " " + koder.koderLastName;
        let koderAssistances = koder.koderAssistances;
        let koderDeliveredPractices = koder.koderDeliveredPractices;
        let currentContent = document.getElementById("koders-cards").innerHTML;  
        let newContent = `
            <div class="col-12 col-md-3">
                <div class="card mt-3">
                    <div class="card-body">
                      <h5 class="card-title">${koderFullName}</h5>
                  
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Prácticas entregadas: ${koderDeliveredPractices}</li>
                      <li class="list-group-item">Asistencias: ${koderAssistances}</li>
                    </ul>
                   
                      <div class="btn btn-danger mt-3 btn-block" data-koder-index:"${index}">Eliminar</div>
                    </div>
                </div>
            </div>
            `
        document.getElementById("koders-cards").innerHTML= currentContent + newContent;
    })
}

var saveKoderBtn = document.getElementById("submit-button");
saveKoderBtn.addEventListener("click",saveKoder);

const addDeleteButtonListener = () => {
    var deleteButtons = document.getElementsByClassName("btn-danger");
    console.log(deleteButtons)
    var i;
    for(i=0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener("click",(event) => {
            let koderIndex = event.target.dataset.koderIndex
            console.log(koderIndex)
            kodersArray.splice(koderIndex,1);
            printKoders();
            cardKoders();
            addDeleteButtonListener();
        })
    }
}



