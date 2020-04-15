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
                <button type="button" class="btn btn-primary">Delete</button>
            </div>
        </div>
            `
        document.getElementById("product-content").innerHTML= currentContent + newContent;
    })
}

var saveProductBtn = document.getElementById("submit-buttom");
saveProductBtn.addEventListener("click",saveProduct);