var productsArray = [
    {
        name:"Sabritas 340gr",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:60,
        imgUrl:"https://images.rappi.com.mx/products/975004512-1580921567558.png?d=200x200&e=webp"
    },
    {
        name:"Paketaxo verde",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:50,
        imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rappi.com.mx%2Fproducto%2F1306702047_975660166&psig=AOvVaw3YBh8WdC-2_2BJspHGouUd&ust=1584932461382000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjg7Y-MregCFQAAAAAdAAAAABAH"
    },
    {
        name:"Sabritas Moradas 170gr",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:45,
        imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rappi.com.mx%2Fproducto%2F1306702047_14255&psig=AOvVaw3YBh8WdC-2_2BJspHGouUd&ust=1584932461382000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjg7Y-MregCFQAAAAAdAAAAABAN"
    },
    {
        name:"Coca Cola lata 335ml",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:14,
        imgUrl:"https://constantmotions.files.wordpress.com/2011/08/urban-hifi-coca-cola-8175.png"
    },
    {
        name:"Coca Cola sin azúcar",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:18,
        imgUrl:"https://images.rappi.com.mx/products/975607512-1579282803636.png?d=200x200&e=webp"
    },
    {
        name:"Six pack XX Lager",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:84,
        imgUrl:"https://images.rappi.com.mx/products/15324-1580920453948.png?d=200x200"
    },
    {
        name:"Six Pack Modelo Especial",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:112,
        imgUrl:"https://images.rappi.com.mx/products/7501064193156-1571349064824.png?d=200x200&e=webp"
    },
    {
        name:"Six Pack Negra Modelo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:140,
        imgUrl:"https://images.rappi.com.mx/products/895653002095-1571349176987.png?d=200x200&e=webp"
    },
    {
        name:"Jägermeister",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:270,
        imgUrl:"https://images.freshop.com/00083089660402/d6b255063a4f51e45b72c732690dc109_medium.png"
    },
    {
        name:"Alka-seltzer",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:60,
        imgUrl:"https://images.freshop.com/00016500040118/1b1dc11809542e9a198633e7ee4e53a1_medium.png"
    }
    

]

const showCards = () => {
    document.getElementById("product-card").innerHTML = ""
    productsArray.forEach((product,index) => {
        let productName = product.name;
        let productPrice = product.price;
        let currentContent = document.getElementById("product-card").innerHTML;  
        let newContent = `
        <li class="list-group-item list-group-item-info mb-3">

        <div class="product-name font-weight-bold">${productName}</div>
        <div class="product-price">Costo: $${productPrice}</div>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-4 col-form-label">Cantidad:</label>
            <div class="col-sm-8">
                <input type="number" class="form-control">
            </div>
        </div>
        <div class="btn-wrapper d-flex justify-content-between">
            <div class="btn btn-primary w-50 show-product-detail" data-product-index=${index}>Ver Detalle</div>
            <div class="btn btn-success w-50 ml-2">Agregar al carrito</div>
        </div>


    </li>  `        

    document.getElementById("product-card").innerHTML = currentContent + newContent;


    })
}
showCards();

const showDescription = (event) => {
    console.log(event)
    let clickedProduct = event.target
    let productIndex = clickedProduct.dataset.productIndex;
    let selectedProduct = productsArray[productIndex]
    detailCard = document.getElementById("card-description");
    detailCard.innerHTML = `
    <div class="card">
                    <img src="${selectedProduct.imgUrl}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${selectedProduct.name}</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.</p>
                    </div>
                </div> ` 
}


var detailButtonsCollection = document.getElementsByClassName("show-product-detail")

var i;
for(i = 0; i < detailButtonsCollection; i++){
    detailButtonsCollection[i],addEventListener("click", showDescription)
}

