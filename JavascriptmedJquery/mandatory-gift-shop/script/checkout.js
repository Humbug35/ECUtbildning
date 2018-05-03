/*let btn = document.getElementById("submitKnapp");

btn.addEventListener("click", function (e) {
    e.preventDefault()
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getelementById("lastName").value;
    let email = document.getelementById("email").value;
    let address = document.getelementById("adress").value;
    let zipCode = document.getelementById("zip").value;
    let city = document.getelementById("city").value;
});*/
function loadItems() {
    let shoppingCartItems = JSON.parse(localStorage.getItem("shoppingCartItems"));
    let showYourCart = document.getElementById("yourShoppingCart");

    function displayYourCart(house) {
        let productContainer = document.createElement("article");
        let productHeader = document.createElement("h2");
        let productImage = document.createElement("img");
        let productPrice = document.createElement("h4");
        let productDescription = document.createElement("p");

        productHeader.innerText = house.title;
        productImage.setAttribute("src", house.image);
        productPrice.innerText = `${house.price} SEK`;
        productDescription.innerText = house.description;

        productContainer.appendChild(productHeader);
        productContainer.appendChild(productImage);
        productContainer.appendChild(productPrice);
        productContainer.appendChild(productDescription);
        showYourCart.appendChild(productContainer);
    }
        if(shoppingCartItems === null){
        showYourCart.innerHTML = `<h2>Your shoppingCart are empty!</h2>`;
        }
        else{
            shoppingCartItems.forEach((item) => {
                displayYourCart(item);
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

    //document.getElementById("firstName").value === "" ? errorMessage += "Enter your First Name \n";