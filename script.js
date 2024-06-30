const productCards = document.getElementById("products-container");

const product = [
  {
    id: 1,
    name: Phone,
    price: 199.99
  },
  {
    id: 2,
    name: Tablet,
    price: 199.99
  },
  {
    id: 3,
    name: Camera,
    price: 199.99
  },
  {
    id: 4,
    name: Desktop,
    price: 199.99
  },
  {
    id: 5,
    name: Watch,
    price: 199.99
  },
  {
    id: 6,
    name: iPhone,
    price: 199.99
  },
];
product.forEach(
  ({name, id, price}) => {
    productCards.innerHTML += `
      <div class="card">
        <h2>${name}</h2>

      </div>
    `;
  }
);