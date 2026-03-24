fetch("https://dummyjson.com/carts")
.then(res => res.json())
.then(data => {

    let output = "";

    data.carts.map(cart => {
        output += `
        <div class="cart">
            <h2>Cart ID : ${cart.id}</h2>
            <h3>Total Amount : $${cart.total}</h3>
            <div class="products">
        `;
        cart.products.map(product => {

            output += `
                <div class="card">
                    <img src="${product.thumbnail}">
                    <h4>${product.title}</h4>
                    <p>Price: $${product.price}</p>
                    <p>Qty: ${product.quantity}</p>
                </div>
            `;
        });
        output += `
            </div>
        </div>
        `;
    });
    document.getElementById("cartContainer").innerHTML = output;

});