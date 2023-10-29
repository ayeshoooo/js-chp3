
//campany catelog



const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 150 },
    { id: 4, name: "Product 4", price: 120 },
];

// Function to display products in the catalog
function displayProducts(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add a product to the shopping cart (you can implement the cart functionality)
function addToCart(productId) {
    // Implement cart functionality here
    console.log(`Added product with ID ${productId} to the cart.`);
}

// Initially display the products
displayProducts(products);