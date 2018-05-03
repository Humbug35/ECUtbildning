/*let secondSection = document.createElement("section");
secondSection.setAttribute("id", "produkter");
existingElement.appendChild(secondSection);*/

/*for(let i of houses) {
    document.getElementById("products").innerHTML += `<div class="myDivision">
    <h3>${i.title}</h3>
    <img src=' ${i.image}'/>
    <h3>${i.price} kr</h3> <h3>${i.description}</h3>
    <button>${i.buttonID}</button></div>`
}*/

let existingElement = document.getElementsByTagName("body")[0];
let productSection = document.createElement("section");
productSection.setAttribute("id", "products");
existingElement.appendChild(productSection);
let itemsInCart = document.getElementById("siffra");
let count = 0;

function addProductToCart(house) {
    let shoppingCartItems = JSON.parse(localStorage.getItem("shoppingCartItems")) || [];
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
        count++;
        itemsInCart.innerHTML = count.toString();
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





/*
let myArray = [houseOne, houseTwo, houseThree, houseFour, houseFive, houseSix];
for(let x in myArray) {
    document.getElementById("products").innerHTML += `<div class="myDivision"><h1>  ${myArray[x].title}  </h1> <img src='  ${myArray[x].image}  '/> <h3>${myArray[x].price}  kr </h3><h3>${myArray[x].description} </h3></div>`;
}*/
