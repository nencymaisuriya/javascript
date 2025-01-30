let products = [];
let cart = [];

function addProduct() {
    let nameInput = document.getElementById("productName");
    let priceInput = document.getElementById("productPrice");
    let imageInput = document.getElementById("productImage");

    let name = nameInput.value;
    let price = priceInput.value;
    let imageUrl = imageInput.value || "https://via.placeholder.com/150";

    if (name && price) {
        let product = { name, price, imageUrl };
        products.push(product);
        displayProducts();

        nameInput.value = "";
        priceInput.value = "";
        imageInput.value = "";
    }
}

function displayProducts() {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach((product, index) => {
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');

        let productImage = document.createElement('img');
        productImage.src = product.imageUrl;
        productImage.alt = product.name;

        let productName = document.createElement('h3');
        productName.textContent = product.name;

        let productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;

        let addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.onclick = () => addToCart(index);

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editProduct(index);

        productCard.append(productImage, productName, productPrice, addToCartButton, editButton);
        productList.appendChild(productCard);
    });
}

function editProduct(index) {
    let product = products[index];
    document.getElementById("productName").value = product.name;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productImage").value = product.imageUrl;

    document.querySelector("button[onclick='addProduct()']").style.display = "none";

    let updateButton = document.getElementById("updateButton");
    if (!updateButton) {
        updateButton = document.createElement("button");
        updateButton.id = "updateButton";
        updateButton.textContent = "Update Product";
        updateButton.onclick = function () { updateProduct(index); };
        document.body.appendChild(updateButton);
    }
}

function updateProduct(index) {
    products[index].name = document.getElementById("productName").value;
    products[index].price = document.getElementById("productPrice").value;
    products[index].imageUrl = document.getElementById("productImage").value;

    document.querySelector("button[onclick='addProduct()']").style.display = "inline-block";
    document.getElementById("updateButton").remove();
    displayProducts();
}

function addToCart(index) {
    let product = products[index];
    cart.push(product);
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    cart.forEach((product, index) => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        let cartItemImage = document.createElement('img');
        cartItemImage.src = product.imageUrl;
        cartItemImage.alt = product.name;

        let cartItemName = document.createElement('h3');
        cartItemName.textContent = product.name;

        let cartItemPrice = document.createElement('p');
        cartItemPrice.textContent = `Price: $${product.price}`;

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);

        cartItem.append(cartItemImage, cartItemName, cartItemPrice, removeButton);
        cartList.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}
