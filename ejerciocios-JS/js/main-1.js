products = [

]

const saveProduct = () => {
    let productName = document.getElementById("product").value;
    let productArray = {productName}
    console.log(productArray)
    products.push(productArray)

    printProducts();
}

const printProducts = () => {
    document.getElementById("product-content").innerHTML = ""
    products.forEach((product) => {
        let productItem = product.productName
        let currentContent = document.getElementById("product-content").innerHTML;  
        let newContent = `
        <div class="row border-top border-secondary p-3">
            <div class="col-12 col-lg-8">
                <p>${productItem}</p>
            </div>
            <div class="col-12 col-lg-4">
                <button type="button" class="btn btn-primary btn-delete" >Delete</button>
            </div>
        </div>
            `
        document.getElementById("product-content").innerHTML= currentContent + newContent;
    })
}

var saveProductBtn = document.getElementById("submit-buttom");
saveProductBtn.addEventListener("click",saveProduct);

//var saveProductKey
const addAlert = () => {
    alert('Vas a borrar este producto')
}


var deleteBtn = document.getElementsByClassName("btn-delete");
deleteBtn.addEventListener("click",addAlert);


/*const addDeleteButtonListener = () => {
    var deleteButtons = document.getElementsByClassName("btn-primary");
    console.log(deleteButtons)
    var i;
    for(i=0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener("click",(event) => {
            let productIndex = event.target.dataset.productIndex
            console.log(productIndex)
            products.splice(productIndex,1);
            printProducts();
            addDeleteButtonListener();
        })
    }
}*/