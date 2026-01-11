const products = [
    { name: 'Kurtaset', price: '₹1250', image: 'images/womenimage/kurtaset1.webp' },
    { name: 'Dress', price: '₹2999', image: 'images/womenimage/dress1.webp' },
    { name: 'Saree', price: '₹4599', image: 'images/womenimage/saree1.webp' },
    { name: 'Tops', price: '₹499', image: 'images/womenimage/top1.webp' },
    { name: 'Kurtaset', price: '₹899', image: 'images/womenimage/kurtaset2.webp' },
    { name: 'Dress', price: '₹1199', image: 'images/womenimage/dress2.webp' },
    { name: 'Saree', price: '₹3899', image: 'images/womenimage/saree2.webp' },
    { name: 'Tops', price: '₹699', image: 'images/womenimage/top2.webp' },
    { name: 'Kurtaset', price: '₹750', image: 'images/womenimage/kurtaset3.webp' },
    { name: 'Dress', price: '₹1799', image: 'images/womenimage/dress3.webp' },
    { name: 'Saree', price: '₹1999', image: 'images/womenimage/saree3.webp' },
    { name: 'Tops', price: '₹300', image: 'images/womenimage/top3.webp' },
    { name: 'Kurtaset', price: '₹2150', image: 'images/womenimage/kurtaset4.webp' },
    { name: 'Dress', price: '₹4250', image: 'images/womenimage/dress4.webp' },
    { name: 'Saree', price: '₹3350', image: 'images/womenimage/saree4.webp' },
    { name: 'Tops', price: '₹675', image: 'images/womenimage/top4.webp' },
    { name: 'Kurtaset', price: '₹599', image: 'images/womenimage/kurtaset5.webp' },
    { name: 'Dress', price: '₹2399', image: 'images/womenimage/dress5.webp' },
    { name: 'Saree', price: '₹4980', image: 'images/womenimage/saree5.webp' },
    { name: 'Tops', price: '₹349', image: 'images/womenimage/top5.webp' },
    { name: 'Kurtaset', price: '₹1900', image: 'images/womenimage/kurtaset6.webp' },
    { name: 'Dress', price: '₹3150', image: 'images/womenimage/dress6.webp' },
    { name: 'Saree', price: '₹1580', image: 'images/womenimage/saree6.webp' },
    { name: 'Tops', price: '₹499', image: 'images/womenimage/top6.webp' },
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
