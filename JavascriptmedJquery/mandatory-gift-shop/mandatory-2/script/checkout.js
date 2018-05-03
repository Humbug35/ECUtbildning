let showYourCart = document.getElementById("yourShoppingCart");
let shoppingCartItems = JSON.parse(localStorage.getItem("shoppingCartItems"));

    function countQuantity(house){
        let quantity = 0;
        for(let item of shoppingCartItems){
            if(item.articleNumber === house.articleNumber){
                quantity++;
            }
        }
        return quantity;
    }

    function displayYourCart(house) {
        let productContainer = document.createElement("article");
        let productHeader = document.createElement("h2");
        let productImage = document.createElement("img");
        let productPrice = document.createElement("h4");
        let productDescription = document.createElement("p");
        let totalProducts = document.createElement("p");

        productContainer.setAttribute("class", "checkoutProductsArticle");
        productHeader.innerText = house.title;
        productImage.setAttribute("src", house.image);
        productPrice.innerText = `${house.price} SEK`;
        productDescription.innerText = house.description;
        totalProducts.innerHTML = `${countQuantity(house)}`;

        productContainer.appendChild(productHeader);

        productContainer.appendChild(productImage);
        productContainer.appendChild(productPrice);
        productContainer.appendChild(productDescription);
        productContainer.appendChild(totalProducts);
        showYourCart.appendChild(productContainer);
        //$("productContainer").append(productHeader, productImage, productPrice, productDescription, totalProducts);
    }

function loadItems() {
    let noDuplication = shoppingCartItems.filter((house, index, shoppingCartItems) => {
        return shoppingCartItems.map(object => {
            return object["title"]}).indexOf(house["title"]) === index;
    });

    if(noDuplication === null){
        showYourCart.innerHTML = `<h2>Your shopping cart are empty!</h2>`
    }
    else{
        noDuplication.forEach(function(item){
            displayYourCart(item)
        });
    }
}
loadItems();

let emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let btn = document.getElementById("Knapp");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let errorMessage = "";

    if(document.getElementById("firstName").value === ""){
        errorMessage += "Enter your First Name \n";
    }
    if(document.getElementById("lastName").value === ""){
        errorMessage += "Enter your Last Name \n";
    }
    if(document.getElementById("email").value  === ""){
        errorMessage += "Enter your Email \n";
    }
    else if(!emailPattern.test(email.value)){
        errorMessage += "Check if your Email is valid \n";
    }
    if(document.getElementById("address").value === ""){
        errorMessage += "Enter your Street Address \n";
    }
    if(document.getElementById("zip").value === ""){
        errorMessage += "Enter your Zip Code \n";
    }
    if(document.getElementById("city").value === ""){
        errorMessage += "Enter your City \n";
    }
    if(errorMessage !== ""){
        alert(errorMessage);
        return false;
    }
    document.getElementById("myForm").submit(alert("Your message was sent!"));
});