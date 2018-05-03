let existingElement = document.getElementsByTagName("body")[0];
let productSection = document.createElement("section");
productSection.setAttribute("id", "products");
existingElement.appendChild(productSection);
let count = 0;
let shoppingCartItems = JSON.parse(localStorage.getItem("shoppingCartItems")) || [];

function updateQuantity() {
    let itemsInCart = document.getElementById("total");
    count++;
    itemsInCart.innerHTML = count.toString();
    itemsInCart.innerHTML = String(shoppingCartItems.length);
}

function addProductToCart(house) {
    shoppingCartItems.push(house);
    localStorage.setItem("shoppingCartItems", JSON.stringify(shoppingCartItems));
}

function showMyProducts(house) {
    let productContainer = document.createElement("article");
    productContainer.setAttribute("class", "productsArticle");
    let productHeader = document.createElement("h2");
    productHeader.innerText = house.title;
    let productImage = document.createElement("img");
    productImage.setAttribute("src", house.image);
    let productPrice = document.createElement("h4");
    productPrice.innerText = `${house.price} SEK`;
    let productDescription = document.createElement("p");
    productDescription.innerText = house.description;
    let addToCartButton = document.createElement("button");
    addToCartButton.setAttribute("id", "addToCartButton");
    addToCartButton.innerText = "Add to cart";
    addToCartButton.addEventListener("click", () => {
        addProductToCart(house);
        updateQuantity();
    });

    productContainer.appendChild(productHeader);
    productContainer.appendChild(productImage);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(productDescription);
    productContainer.appendChild(addToCartButton);
    productSection.appendChild(productContainer);
}
for(let house of houses){
    showMyProducts(house);
}

updateQuantity();