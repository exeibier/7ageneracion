var koderArray = [];

const getKoderData = () => {
    let name = $("#koder-name").val();
    let email = $("#koder-email").val();
    let phone = $("#koder-phone").val();

    let koderObject = {name,email,phone}

    koderArray.push(koderObject)
    printKoder();
}



$("#submit-buttom").on("click",getKoderData);

const printKoder = () => {
    $("#koders-table").find("tbody").empty()
    koderArray.forEach((koder, index) => {
        $("#koders-table").find("tbody").append(`
            <tr>
                <td>${index + 1}</td>
                <td>${koder.name}</td>
                <td>${koder.email}</td>
                <td>${koder.phone}</td>
                <td><div class="btn btn-danger delete-koder" 
                data-koder-index=${koder.key}>X</div></td>

            </tr>`
        )
    })
}

const deleteKoder = (event) => {
    let koderIndex = $(event.target).data("koder-index")
    koderArray.splice(koderIndex,1)
    printKoder();
}

const getKodersFromDb = () => {
    $.ajax({
        url:"https://javascript-ajax-d0ce6.firebaseio.com/xabier/koders/.json",
        method:'GET',
        success:(response) => {
            console.log(response)
            $.each(response,(key,value)=>{
                koderArray.push(...value,key);
                console.log(koderArray)

            })
            printKoder();
        }
    })
}

