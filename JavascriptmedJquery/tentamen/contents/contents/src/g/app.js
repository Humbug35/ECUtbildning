let productList = $('#product-list');
let productsInCart = JSON.parse(localStorage.getItem("productsInCart")) || [];


function updateProductQuantity() {
    let checkoutProductQuantity = $("span");
    checkoutProductQuantity.text(String(productsInCart.length));
}


function addToCart(product){
    productsInCart.push(product);
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}

function getProducts(url){
    $.get(url, (data) =>{
        for(let product of data){
            showMyProducts(product)
        }
    })
}

function getRandomStockQuantity() {
    return Math.floor(Math.random() * 10) + 1;
}
function showMyProducts(product){
    let productCard = $('<article></article>');
    let productHeader = $('<h2></h2>');
    let productImage = $('<img>');
    let productPrice = $('<p></p>');
    let stockQuantity = Number(getRandomStockQuantity());
    let productsStatus = $('<p></p>').attr('class', 'product-status').html("Stock Quantity: " + stockQuantity);
    let addToCartButton = $('<button></button>').attr('id', 'add-to-cart').text('Add to cart');

    productHeader.text(product.Name);
    productImage.attr('src', product.Image);
    productPrice.text(product.Price);
    addToCartButton.click(() => {
        addToCart(product);
        updateProductQuantity();
        stockQuantity--;
        productsStatus.html("Stock Quantity: " + stockQuantity);

        if(stockQuantity === 0){
            addToCartButton.remove();
            productsStatus.text("This product are sold out, sorry!");
            /*let soldOut = $("<p></p>").text("Sold Out");
            productCard.append(soldOut);*/
        }
    });
    productCard.append(productHeader, productImage, productPrice, productsStatus, addToCartButton);
    productList.append(productCard);

}

    /*for(let product of products){
        showMyProducts(product)
    }*/
getProducts('http://demo.edument.se/api/products');


updateProductQuantity();