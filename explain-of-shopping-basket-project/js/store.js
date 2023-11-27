let $ = document;
let products = [
  { id: 0, name: "Album 1", price: 12, src: "./Images/Album 1.png" },
  { id: 1, name: "Album 2", price: 14, src: "./Images/Album 2.png" },
  { id: 2, name: "Album 3", price: 15, src: "./Images/Album 3.png" },
  { id: 3, name: "Album 4", price: 20, src: "./Images/Album 4.png" },
];
let productContainer = $.querySelector(".shop-items");
let selectedProductContainer = $.querySelector(".cart-items");
let totalpriceElem = $.querySelector(".cart-total-price");
let totalprice = 0;
let basket = [];

function priceHandler() {
  totalprice = 0;
  basket.forEach((item) => {
    totalprice = totalprice + item.counter * item.price;
  });
  console.log(totalprice);
  totalpriceElem.innerHTML = totalprice + "$";
}

function inputValueHandler(id, e) {
  console.log(id, e.target.value);

  let index = basket.findIndex(function (item) {
    return item.id === id;
  });

  basket[index].counter = e.target.value;
  console.log(basket, "input change value shod");
  priceHandler();
}

function removeHandler(id) {
  let newBasket = basket.filter((item) => {
    return item.id != id;
  });
  basket = newBasket;
  basketItemsGenerator(basket);
}

function basketItems(id) {
  console.log("hi");
  if (basket.length) {
    let index = basket.findIndex(function (item) {
      return item.id === id;
    });
    if (index != -1) {
      basket[index].counter++;
      console.log(basket, "hi");
      basketItemsGenerator(basket);
    } else {
      let counter = 1;
      products[id] = { ...products[id], counter: counter };
      basket.push(products[id]);
      console.log(basket, "basket");
      basketItemsGenerator(basket);
    }
  } else {
    let counter = 1;
    products[id] = { ...products[id], counter: counter };
    basket.push(products[id]);
    console.log(basket, "basket");
    basketItemsGenerator(basket);
  }
}
function basketItemsGenerator(basket) {
  selectedProductContainer.innerHTML = "";
  basket.forEach((item) => {
    selectedProductContainer.insertAdjacentHTML('beforeend',`<div class="cart-row"><div class="cart-item cart-column"><img src="${item.src}" class="cart-item-image"><span class="cart-item-title">${item.name}</span></div><span class="cart-price cart-column">${item.price}</span><div class="cart-quantity cart-column"><input class="cart-quantity-input" type="number" value='${item.counter}' onchange='inputValueHandler(${item.id},event)'><button class="btn btn-danger" onclick='removeHandler(${item.id})'>REMOVE</button></div></div>`)
  });
  priceHandler();
}

function productGenerator() {
  products.forEach((product) => {
    productContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="shop-item"><span class="shop-item-title">${product.name}</span><img class="shop-item-image" src='${product.src}'><div class="shop-item-details"><span class="shop-item-price">${product.price} $</span><button class="btn btn-primary shop-item-button" onclick='basketItems(${product.id})'>ADD TO CART</button></div></div>`
    );
  });
}

window.addEventListener("load", productGenerator);
