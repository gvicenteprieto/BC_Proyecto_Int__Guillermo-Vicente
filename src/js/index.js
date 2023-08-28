let products = [];
class Product {
  constructor(
    name_prod,
    price,
    stock,
    brand,
    category,
    short_description,
    long_description,
    free_shipping,
    age_from,
    age_to,
    photo
  ) {
    this.name_prod = name_prod;
    this.price = price;
    this.stock = stock;
    this.brand = brand;
    this.category = category;
    this.short_description = short_description;
    this.long_description = long_description;
    this.free_shipping = free_shipping;
    this.age_from = age_from;
    this.age_to = age_to;
    this.photo = photo;
  }
  data = () => {
    return `Nombre: ${this.name_prod} Precio: ${this.price} Stock: ${this.stock} Marca: ${this.brand} Categoria: ${this.category} Descripcion Corta: ${this.short_description} Descripcion Larga: ${this.long_description} Envio sin Cargo: ${this.free_shipping} Edad Desde: ${this.age_from} Edad Hasta: ${this.age_to} Foto: ${this.photo}`;
  };

  getHtmlArticle(string = ["article"]) {
    let article = document.createElement(string);
    article.id = "article";
    let section = document.querySelector("section");
    section.appendChild(article);

    article.innerHTML = `<div class="products">
          <div class="product">
            <div>
                <img class="product__img" src="${this.photo}" 
                  alt="${this.short_description}">
                </div>
                <div class="product__info">
                    <h3 class="product__name">${this.name_prod}</h3>
                    <p class="product__brand">${this.brand}</p>
                    <p>${this.short_description}</p>
                    <p class="product__price">$ ${this.price}</p>
                    <p class="product__category">${this.category}</p>

                    <button class="btnAddCart">Agregar al carrito</button>
                </div>
          </div>`;
  }

}

let prd_1 = new Product(
  "Osita",
  1000,
  10,
  "Cosmic Toys",
  "Peluche",
  "Osita de peluche",
  "Osita de peluche",
  "Si",
  0,
  99,
  "./images/products/osita/mockup-graphics-PNsj6RiHAF4-unsplash.jpg"
);

let prd_2 = new Product(
  "Conejita",
  1000,
  10,
  "Cosmic Toys",
  "Peluche",
  "Conejita de peluche",
  "Conejita de peluche",
  "Si",
  0,
  99,
  "./images/products/conejita/mockup-graphics-F-_5X92mH1Q-unsplash.jpg"
);

let prd_3 = new Product(
  "Conejito",
  1000,
  10,
  "Cosmic Toys",
  "Peluche",
  "Conejito de peluche",
  "Conejito de peluche",
  "Si",
  0,
  99,
  "./images/products/conejito/mockup-graphics-aUkYaG12Dgs-unsplash.jpg"
);
//autobus verde
let prd_4 = new Product(
  "Autobus verde",
  1000,
  10,
  "Cosmic Toys",
  "Juguete",
  "Autobus verde",
  "Autobus verde",
  "Si",
  0,
  99,
  "./images/products/autobus_verde/mourizal-zativa-YGElTTrAaHM-unsplash.jpg"
);

//autobus azul
let prd_5 = new Product(
  "Autobus azul",
  1000,
  10,
  "Cosmic Toys",
  "Juguete",
  "Autobus azul",
  "Autobus azul",
  "Si",
  0,
  99,
  "./images/products/autobus_azul/mourizal-zativa-nRlZOmuuJwA-unsplash.jpg"
);

prd_1.getHtmlArticle();
prd_2.getHtmlArticle();
prd_3.getHtmlArticle();
prd_4.getHtmlArticle();
prd_5.getHtmlArticle();

let addCart = document.querySelectorAll(".btnAddCart");
//console.log(addCart);
for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", function () {
    let cart = document.querySelector(".cart");
    let cartList = document.querySelector(".cart__list");
    let cartItem = document.createElement("div");

    let cartTitle = document.createElement("h3");
    cartTitle.classList.add("cart__title");
    cartTitle.innerHTML = "Carrito";

    cartItem.classList.add("cart__item");
    cartList.appendChild(cartItem);
    let cartItemImg = document.createElement("img");
    cartItemImg.classList.add("cart__item__img");
    cartItem.appendChild(cartItemImg);
    let cartItemInfo = document.createElement("div");
    cartItemInfo.classList.add("cart__item__info");
    cartItem.appendChild(cartItemInfo);
    let cartItemTitle = document.createElement("h3");
    cartItemTitle.classList.add("cart__item__title");
    cartItemInfo.appendChild(cartItemTitle);
    let cartItemPrice = document.createElement("p");
    cartItemPrice.classList.add("cart__item__price");
    cartItemInfo.appendChild(cartItemPrice);
    let cartItemQuantity = document.createElement("p");
    cartItemQuantity.classList.add("cart__item__quantity");
    cartItemInfo.appendChild(cartItemQuantity);
    let cartItemTotal = document.createElement("p");
    cartItemTotal.classList.add("cart__item__total");
    cartItemInfo.appendChild(cartItemTotal);
    let cartItemRemove = document.createElement("button");
    cartItemRemove.classList.add("cart__item__remove");
    cartItemRemove.innerHTML = "X";
    cartItemInfo.appendChild(cartItemRemove);

    cartItemImg.src =
      this.parentElement.parentElement.children[0].children[0].src;
    cartItemTitle.innerHTML = this.parentElement.children[0].innerHTML;
    cartItemPrice.innerHTML = this.parentElement.children[2].innerHTML;
    cartItemQuantity.innerHTML = 1;
    cartItemTotal.innerHTML = this.parentElement.children[2].innerHTML;

    let cartItemRemoveBtn = document.querySelectorAll(".cart__item__remove");
    for (let i = 0; i < cartItemRemoveBtn.length; i++) {
      cartItemRemoveBtn[i].addEventListener("click", function () {
        this.parentElement.parentElement.remove();
      });
    }
  });
}
