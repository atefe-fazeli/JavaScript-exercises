let $ = document;
let products = [
  { id: 0, name: "Album 1", price: 12, src: "./Images/Album 1.png" },
  { id: 1, name: "Album 2", price: 14, src: "./Images/Album 2.png" },
  { id: 2, name: "Album 3", price: 15, src: "./Images/Album 3.png" },
  { id: 3, name: "Album 4", price: 20, src: "./Images/Album 4.png" },
];
let productContainer = $.querySelector(".shop-items");
let selectedProductContainer = $.querySelector(".cart-items");
let totalpriceElem=$.querySelector('.cart-total-price')
let totalprice = 0;
let basket = [];

function priceHandler() {
    totalprice=0
    basket.forEach((item)=>{
        totalprice = totalprice + item.counter * item.price;

    })
  console.log(totalprice);
  totalpriceElem.innerHTML=totalprice +'$'
}

function inputValueHandler(id,e){
    console.log(id,e.target.value)

    let index = basket.findIndex(function (item) {
        return item.id === id;
      });

  basket[index].counter=e.target.value
  console.log(basket,'input change value shod')
  priceHandler()
}

function removeHandler(id){
let newBasket=basket.filter((item)=>{
   return item.id!=id
})
basket=newBasket
basketItemsGenerator(basket)
}

function basketItems(id) {
  if (basket.length) {
    let index = basket.findIndex(function (item) {
      return item.id === id;
    });
    if (index!= -1) {
    basket[index].counter++
    console.log(basket,'hi')
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
    selectedProductContainer.innerHTML=''
  basket.forEach((item) => {
    let targetCard = $.createElement("div");
    targetCard.classList.add("cart-row");
    let targetCardSection1 = $.createElement("div");
    targetCardSection1.classList.add("cart-item", "cart-column");
    let img = $.createElement("img");
    img.setAttribute("src", item.src);
    img.classList.add("cart-item-image");
    let title = $.createElement("span");
    title.classList.add("cart-item-title");
    title.innerHTML = item.name;
    targetCardSection1.append(img, title);
    let price = $.createElement("span");
    price.classList.add("cart-price", "cart-column");
    price.innerHTML = item.price;
    let targetCardSection2 = $.createElement("div");
    targetCardSection2.classList.add("cart-quantity", "cart-column");
    let input = $.createElement("input");
    input.classList.add("cart-quantity-input");
    input.setAttribute("type", "number");
    input.value = item.counter;
    input.addEventListener('change',(e)=>{
        inputValueHandler(item.id,e)})
    let removeBtn = $.createElement("button");
    removeBtn.classList.add("btn", "btn-danger");
    removeBtn.innerHTML = "REMOVE";
    removeBtn.addEventListener('click',()=>{
        removeHandler(item.id)
    })
    targetCardSection2.append(input, removeBtn);
    targetCard.append(targetCardSection1, price, targetCardSection2);
    selectedProductContainer.append(targetCard);
  });
  priceHandler();

}

function productGenerator() {
  products.forEach((product) => {
    let card = $.createElement("div");
    card.classList.add("shop-item");
    let title = $.createElement("span");
    title.classList.add("shop-item-title");
    title.innerHTML = product.name;
    let Img = $.createElement("img");
    Img.classList.add("shop-item-image");
    Img.setAttribute("src", product.src);
    let details = $.createElement("div");
    details.classList.add("shop-item-details");
    let price = $.createElement("span");
    price.classList.add("shop-item-price");
    price.innerHTML = product.price + "$";
    let addBtn = $.createElement("button");
    addBtn.classList.add("btn", "btn-primary", "shop-item-button");
    addBtn.innerHTML = "ADD TO CART";
    addBtn.addEventListener("click", () => {
      basketItems(product.id);
    });
    details.append(price, addBtn);
    card.append(title, Img, details);
    productContainer.appendChild(card);
  });
}

window.addEventListener("load", productGenerator);
