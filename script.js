document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
  
    // Mock product data (replace this with actual API call)
    const products = [
      { id: 1, name: 'Product 1', price: '$10', image: 'product1.jpg' },
      { id: 2, name: 'Product 2', price: '$20', image: 'product2.jpg' },
      { id: 3, name: 'Product 3', price: '$30', image: 'product3.jpg' }
    ];
  
    // Render products
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product');
      productItem.innerHTML = `
        <img src="images/${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productItem);
    });
  
    // Dummy function to simulate adding product to cart
    window.addToCart = function(productId) {
      alert(`Product with ID ${productId} added to cart!`);
    };
  });
  