// const products = [
//     { name: 'Shirt', price: '₹999', image: 'images/menimage/shirt1.jpg' },
//     { name: 'Jeans', price: '₹1499', image: 'images/menimage/jeans1.webp' },
//     { name: 'Kurta Set', price: '₹1599', image: 'images/menimage/kurtaset1.webp' },
//     { name: 'Denim Jacket', price: '₹1999', image: 'images/menimage/jacket1.webp' },
//     { name: 'Shirt', price: '₹1099', image: 'images/menimage/shirt2.jpg' },
//     { name: 'Jeans', price: '₹1699', image: 'images/menimage/jeans2.jpg' },
//     { name: 'Kurta Set', price: '₹1799', image: 'images/menimage/kurtaset2.webp' },
//     { name: 'Denim Jacket', price: '₹2199', image: 'images/menimage/jacket2.webp' },
//     { name: 'Shirt', price: '₹899', image: 'images/menimage/shirt3.webp' },
//     { name: 'Jeans', price: '₹1399', image: 'images/menimage/jeans3.png' },
//     { name: 'Kurta Set', price: '₹1499', image: 'images/menimage/kurtaset3.webp' },
//     { name: 'Denim Jacket', price: '₹1899', image: 'images/menimage/jacket3.webp' },
//     { name: 'Shirt', price: '₹1099', image: 'images/menimage/shirt4.webp' },
//     { name: 'Jeans', price: '₹1599', image: 'images/menimage/jeans4.jpg' },
//     { name: 'Kurta Set', price: '₹1699', image: 'images/menimage/kurtaset4.webp' },
//     { name: 'Denim Jacket', price: '₹2099', image: 'images/menimage/jacket4.webp' },
//     { name: 'Shirt', price: '₹1199', image: 'images/menimage/shirt5.avif' },
//     { name: 'Jeans', price: '₹1699', image: 'images/menimage/jeans5.webp' },
//     { name: 'Kurta Set', price: '₹1799', image: 'images/menimage/kurtaset5.webp' },
//     { name: 'Denim Jacket', price: '₹2299', image: 'images/menimage/jacket5.webp' },
//     { name: 'Shirt', price: '₹899', image: 'images/menimage/shirt6.png' },
//     { name: 'Jeans', price: '₹1399', image: 'images/menimage/jeans6.png' },
//     { name: 'Kurta Set', price: '₹1499', image: 'images/menimage/kurtaset6.avif' },
//     { name: 'Denim Jacket', price: '₹1999', image: 'images/menimage/jacket6.webp' },
// ];


// const productContainer = document.querySelector('.products');

// products.forEach(product => {
//     const card = document.createElement('div');
//     card.className = 'product-card';

//     card.innerHTML = `
//       <img src="${product.image}" alt="${product.name}" />
//       <h3>${product.name}</h3>
//       <p>${product.price}</p>
//       <button>Add to Cart</button>
//     `;

//     productContainer.appendChild(card);
// });






const products = [
  { name: 'Shirt', price: '₹999', image: 'images/menimage/shirt1.jpg' },
  { name: 'Jeans', price: '₹1499', image: 'images/menimage/jeans1.webp' },
  { name: 'Kurta Set', price: '₹1599', image: 'images/menimage/kurtaset1.webp' },
  { name: 'Denim Jacket', price: '₹1999', image: 'images/menimage/jacket1.webp' },
  { name: 'Shirt', price: '₹1099', image: 'images/menimage/shirt2.jpg' },
  { name: 'Jeans', price: '₹1699', image: 'images/menimage/jeans2.jpg' },
  { name: 'Kurta Set', price: '₹1799', image: 'images/menimage/kurtaset2.webp' },
  { name: 'Denim Jacket', price: '₹2199', image: 'images/menimage/jacket2.webp' },
  { name: 'Shirt', price: '₹899', image: 'images/menimage/shirt3.webp' },
  { name: 'Jeans', price: '₹1399', image: 'images/menimage/jeans3.png' },
  { name: 'Kurta Set', price: '₹1499', image: 'images/menimage/kurtaset3.webp' },
  { name: 'Denim Jacket', price: '₹1899', image: 'images/menimage/jacket3.webp' },
  { name: 'Shirt', price: '₹1099', image: 'images/menimage/shirt4.webp' },
  { name: 'Jeans', price: '₹1599', image: 'images/menimage/jeans4.jpg' },
  { name: 'Kurta Set', price: '₹1699', image: 'images/menimage/kurtaset4.webp' },
  { name: 'Denim Jacket', price: '₹2099', image: 'images/menimage/jacket4.webp' },
  { name: 'Shirt', price: '₹1199', image: 'images/menimage/shirt5.avif' },
  { name: 'Jeans', price: '₹1699', image: 'images/menimage/jeans5.webp' },
  { name: 'Kurta Set', price: '₹1799', image: 'images/menimage/kurtaset5.webp' },
  { name: 'Denim Jacket', price: '₹2299', image: 'images/menimage/jacket5.webp' },
  { name: 'Shirt', price: '₹899', image: 'images/menimage/shirt6.png' },
  { name: 'Jeans', price: '₹1399', image: 'images/menimage/jeans6.png' },
  { name: 'Kurta Set', price: '₹1499', image: 'images/menimage/kurtaset6.avif' },
  { name: 'Denim Jacket', price: '₹1999', image: 'images/menimage/jacket6.webp' },
];

const productContainer = document.querySelector('.products');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button>Add to Cart</button>
  `;

  const button = card.querySelector('button');
  button.addEventListener('click', () => {
    const productToAdd = {
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.name === productToAdd.name && item.image === productToAdd.image);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(productToAdd);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    // alert(`${product.name} added to cart!`);
    window.location.href = "cart.html";

  });

  productContainer.appendChild(card);
});
