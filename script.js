const productCards = document.getElementById("products-container");

const product = [
  {
    id: 1,
    name: "Phone",
    price: 199.99,
    img: "https://i.pinimg.com/564x/3a/d8/f5/3ad8f5cdce82caf9c4eb8923e89cd670.jpg"
  },
  {
    id: 2,
    name: "Tablet",
    price: 299.99,
    img: "https://i.pinimg.com/564x/cc/42/b5/cc42b5131f56852d61025539d98b0a32.jpg"
  },
  {
    id: 3,
    name: "Camera",
    price: 499.99,
    img: "https://i.pinimg.com/564x/e3/ea/4b/e3ea4bcebbd1c235ee1653b4125ffb37.jpg"
  },
  {
    id: 4,
    name: "Laptop",
    price: 699.99,
    img: "https://i.pinimg.com/564x/f9/c4/a0/f9c4a0d0f56c7c43e0328efe5dcdfb56.jpg"
  },
  {
    id: 5,
    name: "Watch",
    price: 99.99,
    img: "https://i.pinimg.com/564x/be/aa/96/beaa96c6853cd219e896611bfb8e7d03.jpg"
  },
  {
    id: 6,
    name: "iPhone",
    price: 399.99,
    img: "https://i.pinimg.com/564x/08/35/89/083589d0441faa736a598e29156dd6ef.jpg"
  },
];
product.forEach(
  ({img, name, id, price}) => {
    productCards.innerHTML += `
      <div class="card">
        <img src=${img} class="image">
        <h2>${name}</h2>
        <p>$${price}</p>
        <button class="button js-add-to-cart" data-product-id="${id}">Add to cart</button>

      </div>
    `;
  }
);

//making add to cart button interactive

document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    })
    if (matchingItem) {
      matchingItem.quatity += 1;
      } else {
        cart.push({
          productId: productId,
          quatity: 1
        });
      }

    
    console.log(cart)
  });
});