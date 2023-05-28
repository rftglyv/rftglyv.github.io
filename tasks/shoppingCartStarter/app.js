//  Create product catalog with 3 products with id, name and price and image properties

let products = [
    {
        id: 1,
        name: "Apple",
        price: 100,
        image: "images/apple.jpeg",
        info: "Apple is a good fruit"
    },
    {
        id: 2,
        name: "Orange",
        price: 80,
        image: "images/orange.webp",
        info: "Orange is a good fruit"
    },
    {
        id: 3,
        name: "Banana",
        price: 30,
        image: "images/banana.jpeg",
        info: "Banana is a good fruit"
    }
];

// Create a function renderCatalog() to render the products in the catalog

let catalog = document.querySelector(".products .row");
if (!window.location.href.includes("order.html")){
    products.forEach(function (product) {
        catalog.innerHTML += `
        <div class="col-4">
            <div class="product-card card">
                <img src="${product.image}" class="card-img-top" style="height:260px; object-fit:cover">
                <div id="${product.id}" class="card-body d-flex flex-column">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.info}</p>
                <span class="d-flex">
                <p class="card-text">PID :</p>
                <p id="product-id" class="card-text ms-2">${product.id}</p>
                </span>
                <p class="card-text">${product.price} ₼</p>
                <a class="btn btn-primary">Add to cart</a>
            </div>
        </div>
        `;
    });
}


// Create a function renderCart() to render the products in the cart

let cartBody = document.getElementById("sCartBody");

function renderCart(product) {
    productCard = `
    <tr id="card-${product.id}" class="text-center">
        <td class="text-start">
            <span>${product.name}</span>
        </td>
        <td>
            <span>${product.price} ₼</span>
        </td>
        <td id="quantity">
            <!-- create number range -->
            <input id="${product.id}" type="number" class="text-center form-control" value="1" min="1" max="10">
        </td>
        <td id="subTotal-${product.id}" >
            <span class="subTotal">${product.price}</span> ₼
        </td>
        <td colspan="4">
            <button id="remBtn-${product.id}" class="btn btn-danger btn-m">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    </tr>
    `
    cartBody.insertAdjacentHTML("afterbegin", productCard)
}

// checkCart() function to check if the cart is empty or not

let cartEmpty = document.getElementById("cartEmpty"),
cart = document.getElementById("cart");

function checkCart() {
    if (cartBody.children.length == 0) {
        cartEmpty.classList.remove("d-none")
        cart.classList.add("d-none")
    } else {
        cartEmpty.classList.add("d-none")
        cart.classList.remove("d-none")
    }
}
if (!window.location.href.includes("order.html")){checkCart()}


// addToCart() function to add the selected product to the cart

let addToCartBtns = document.querySelectorAll(".product-card .btn");

addToCartBtns.forEach(function (btn) {
    function addToCart() {
        let productId = btn.parentElement.id;
        let product = products.find(function (product) {
            return product.id == productId;
        });
        if (!checkProductAdded(product)) {
            renderCart(product);
            quantityInputs = document.querySelectorAll("#quantity input")
            calculateSubTotal(quantityInputs)
            remBtn(product)
            checkCart()
        }
    }
    btn.addEventListener("click", addToCart);
})

// checkProductAdded() function to check if the product is already added to the cart

function remAlert(elem) {
    setTimeout(() => { elem.classList.remove("alert-added") }, 1000)
}

function checkProductAdded(product) {
    isAdded = document.querySelector(`input[id="${product.id}"]`);
    if (isAdded != null) {
        isAdded.parentElement.parentElement.classList.add("alert-added")
        remAlert(isAdded.parentElement.parentElement)
        return true;
    }
}

// calculateSubTotal() function to calculate the sub total of the selected product

function calculateSubTotal(inputs){
    if (inputs.length !== 0){
        inputs.forEach(function (input) {
            input.addEventListener("change", function () {
                let productId = input.id,
                product = products.find(function (product) {
                    return product.id == productId;
                });
                let subTotal = document.querySelector(`#subTotal-${product.id} span`);
                subTotal.innerHTML = `${product.price * Number(input.value)}` ;
                calculateTotal();
            })
        })
    }
    calculateTotal()
}

// calculateTotal() function to calculate the total of the cart

function calculateTotal(){
    let subTotal = document.querySelectorAll(".subTotal");
    let total = 0;
    subTotal.forEach(function (sub) {
        total += Number(sub.innerText);
    })
    saveCart()
    document.querySelector("#total").innerHTML = total;
}

// remBtn() function to remove the selected product from the cart

function remBtn(product) {
    let remBtn = document.querySelector(`#remBtn-${product.id}`);
    remBtn.addEventListener("click", function () {
        document.querySelector(`#card-${product.id}`).remove();
        calculateTotal();
        checkCart()
    })
}

// saveCart() function to save the cart to local storage

function saveCart(){
    let cartContent = [],
    cartProducts = [],
    cartContentInputs = document.querySelectorAll("#quantity input"),
    cartTotal = document.querySelector("#total").innerHTML;
    cartContentInputs.forEach(function (input) {
        cartProducts.push({
            id: input.id,
            qty: input.value
        })
    })
    cartContent.push({
        products : cartProducts,
        total : cartTotal
    })
    let cartContentJSON = JSON.stringify(cartContent);
    localStorage.setItem("cartContent", cartContentJSON);
}

// renderOrders() function to render the orders in the order.html page

let orderBody = document.getElementById("sOrderBody"),
orderTotal = document.getElementById("orderTotal"),
orderProducts = document.getElementById("orderProducts");

function renderOrders(product, index, qty) {
    orderProducts.innerHTML += `
    <span class="fs-6 fw-normal my-2"><span class="fw-bold">${index+1}.</span> ${product.name} - <span>Qty. ${qty} | <span class="subTotal">${qty*product.price}</span> ₼</span></span>
    `
    calculateTotal()
}

// readCart() function to read the cart from local storage

function readCart(){
    let cartContentJSON = JSON.parse(localStorage.getItem("cartContent"));
    if (cartContentJSON[0].products.length != 0){
        orderBody.classList.remove("d-none")
        cartEmpty.classList.add("d-none")
        cartContentJSON[0].products.forEach(function (data, index) {
            let productId = data.id,
            product = products.find(function (product) {
                return product.id == productId;
            });
            qty = data.qty;
            renderOrders(product, index, qty);
        })
    }else{
        orderBody.classList.add("d-none")
    }
}
readCart()