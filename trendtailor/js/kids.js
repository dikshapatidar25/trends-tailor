const products = [
    { name: 'Dresses', price: '₹999', image: 'images/kidsimage/dress1.webp' },
    { name: 'Top', price: '₹1499', image: 'images/kidsimage/top1.webp' },
    { name: 'Bottom ', price: '₹1599', image: 'images/kidsimage/bottom1.webp' },
    { name: 'Sleepwear', price: '₹999', image: 'images/kidsimage/sleepwear1.webp' },
    { name: 'Dresses', price: '₹1099', image: 'images/kidsimage/dress2.webp' },
    { name: 'Top', price: '₹1699', image: 'images/kidsimage/Top2.webp' },
    { name: 'Bottom ', price: '₹1799', image: 'images/kidsimage/bottom2.webp' },
    { name: 'Sleepwear', price: '₹1199', image: 'images/kidsimage/sleepwear2.webp' },
    { name: 'Dresses', price: '₹899', image: 'images/kidsimage/dress3.webp' },
    { name: 'Top', price: '₹1399', image: 'images/kidsimage/top3.webp' },
    { name: 'Bottom ', price: '₹1499', image: 'images/kidsimage/bottom3.webp' },
    { name: 'Sleepwear', price: '₹899', image: 'images/kidsimage/sleepwear3.webp' },
    { name: 'Dresses', price: '₹1099', image: 'images/kidsimage/dress4.webp' },
    { name: 'Top', price: '₹1599', image: 'images/kidsimage/top4.webp' },
    { name: 'Bottom ', price: '₹1699', image: 'images/kidsimage/bottom4.webp' },
    { name: 'Sleepwear', price: '₹999', image: 'images/kidsimage/sleepwear4.webp' },
    { name: 'Dresses', price: '₹1199', image: 'images/kidsimage/dress5.webp' },
    { name: 'Top', price: '₹1699', image: 'images/kidsimage/top5.webp' },
    { name: 'Bottom ', price: '₹1799', image: 'images/kidsimage/bottom5.webp' },
    { name: 'Sleepwear', price: '₹799', image: 'images/kidsimage/sleepwear5.avif' },
    { name: 'Dresses', price: '₹899', image: 'images/kidsimage/dress6.webp' },
    { name: 'Top', price: '₹1399', image: 'images/kidsimage/top6.avif' },
    { name: 'Bottom ', price: '₹1499', image: 'images/kidsimage/bottom6.webp' },
    { name: 'Sleepwear', price: '₹999', image: 'images/kidsimage/sleepwear6.webp' },
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
