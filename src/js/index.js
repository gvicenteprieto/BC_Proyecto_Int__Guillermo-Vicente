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

  getCategory = () => {
    return this.category;
  };

  getBrand = () => {
    return this.brand;
  };

  getPrice = () => {
    return this.price;
  };

  getStock = () => {
    return this.stock;
  };

  getProductsByCategory = (category) => {
    let productsByCategory = [];
    console.log(productsByCategory);
    for (let i = 0; i < products.length; i++) {
      console.log(products[i].getCategory());
      if (products[i].getCategory() == category) {
        productsByCategory.push(products[i]);
      }
    }
    console.log(productsByCategory);
    return productsByCategory;

  };


  getHtmlArticle(string = ["article"]) {
    let article = document.createElement(string);
    let section = document.querySelector(".section__products");
    section.appendChild(article);
    article.innerHTML = `<div class="products">
      <div class="product">
         <img class="product__img" src="${this.photo}" 
            alt="${this.short_description}"/>
           <div class="product__info">
          <h3 class="product__name">${this.name_prod}</h3>
          <p class="product__brand">${this.brand}</p>
          <p class="product__price">$ ${this.price}</p>
          <p class="product__category">${this.category}</p>
        <button class="btnAddCart">Llevar</button>
      </div>
    </div>`;
  }
}

let prd_1 = new Product(
  "Osita",
  1234.55,
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
  1352.28,
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
  1153.89,
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
  1354.99,
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
  1354.99,
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

//autobus rojo
let prd_6 = new Product(
  "Camiones",
  1568.99,
  10,
  "Cosmic Toys",
  "Juguete",
  "Camiones",
  "Camiones",
  "Si",
  0,
  99,
  "./images/products/camiones_1/mourizal-zativa-DnTd-Snz5Ak-unsplash.jpg"
);

let prd_7 = new Product(
  "Lego 1",
  1000,
  10,
  "Cosmic Toys",
  "Lego",
  "Lego",
  "Lego",
  "Si",
  0,
  99,
  "./images/products/lego_1/mulyadi-wQRCaurCX3k-unsplash.jpg"
);

let prd_8 = new Product(
  "Lego 2",
  1000,
  10,
  "Cosmic Toys",
  "Lego",
  "Lego",
  "Lego",
  "Si",
  0,
  99,
  "./images/products/lego_2/mulyadi-2_qZc6p0Ykc-unsplash.jpg"
);

let prd_9 = new Product(
  "Lego 3",
  1000,
  10,
  "Cosmic Toys",
  "Lego",
  "Lego",
  "Lego",
  "Si",
  0,
  99,
  "./images/products/lego_3/mulyadi-j90sW7zZJQQ-unsplash.jpg"
);

// products.push(prd_1);
// products.push(prd_2);
// products.push(prd_3);
// products.push(prd_4);
// products.push(prd_5);
// products.push(prd_6);
// products.push(prd_7);
// products.push(prd_8);
// products.push(prd_9);

//recorriendo con un for:
for (let i = 0; i < 9; i++) {
  products.push(eval(`prd_${i + 1}`));
}

// prd_1.getHtmlArticle();
// prd_2.getHtmlArticle();
// prd_3.getHtmlArticle();
// prd_4.getHtmlArticle();
// prd_5.getHtmlArticle();
// prd_6.getHtmlArticle();
// prd_7.getHtmlArticle();
// prd_8.getHtmlArticle();
// prd_9.getHtmlArticle();

//recorreriendo con un for todos los productos para mostrarlos en el html
for (let i = 0; i < products.length; i++) {
  products[i].getHtmlArticle();
}

let categories = [];
for (let i = 0; i < products.length; i++) {
  categories.push(products[i].getCategory());
}
console.log("categorías " + categories);

let category = document.querySelector("#category");
let categoryList = document.querySelector(".category__list");
let categoryItem = document.createElement("li");
categoryItem.classList.add("category__item");
categoryList.appendChild(categoryItem);

let categoryItemLink = document.createElement("a");
categoryItemLink.classList.add("category__item__link");
categoryItem.appendChild(categoryItemLink);

categoryItemLink.classList.add("category__item__link:active");
categoryItemLink.innerHTML = "Todas";
categoryItemLink.href = "#";

//recorriendo las categorías
categoryItemLink.addEventListener("click", function () {
  console.log("click en " + this.innerHTML);
  let products = document.querySelectorAll(".product");
  let categoryProds = [];
  for (let i = 0; i < products.length; i++) {
    products[i].style.display = "flex";
    products[i].style.justifyContent = "center";
    categoryProds.push(products[i].children[1].children[3].innerHTML);
  }
  console.log("categoryProds " + categoryProds);
  let message = document.querySelector("#messageCategory");
  let messageText = document.createElement("p");
  messageText.classList.add("messageCategory");
  messageText.innerHTML = "Mostrando todos los productos";
  message.appendChild(messageText);

  messageText.innerHTML = `Hay ${products.length} productos en todas las categorías`;

  setTimeout(function () {
    messageText.remove();
  }, 3000);

});

let categoriesUnique = [...new Set(categories)];
console.log("categorías únicas " + categoriesUnique);

//renderizando las categorías únicas:
for (let i = 0; i < categoriesUnique.length; i++) {
  let categoryItem = document.createElement("li");
  categoryItem.classList.add("category__item");
  categoryList.appendChild(categoryItem);

  let categoryItemLink = document.createElement("a");

  categoryItemLink.classList.add("category__item__link");
  categoryItem.appendChild(categoryItemLink);
  categoryItemLink.innerHTML = categoriesUnique[i];
  categoryItemLink.href = "#";

  categoryItemLink.addEventListener("click", function () {
    console.log("click en " + this.innerHTML);
    let products = document.querySelectorAll(".product");
    let categoryProds = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].children[1].children[3].innerHTML == this.innerHTML) {
        products[i].style.display = "flex";
        products[i].style.justifyContent = "center";
        categoryProds.push(products[i].children[1].children[3].innerHTML);
      } else {
        products[i].style.display = "none";
      }
    }
    console.log("categoryProds " + categoryProds);
    let message = document.querySelector("#messageCategory");
    let messageText = document.createElement("p");
    messageText.classList.add("messageCategory");
    messageText.innerHTML = `Mostrando ${this.innerHTML}`;
    message.appendChild(messageText);

    messageText.innerHTML = `Hay ${categoryProds.length} productos en la categoría ${this.innerHTML}`;

    setTimeout(function () {
      messageText.remove();
    }, 3000);
  });
}

//AGREGAR AL CARRITO
let addCart = document.querySelectorAll(".btnAddCart");
for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", function () {

    let cartElement = document.querySelector(".cart");
    let cartList = document.querySelector(".cart__list");
    let cartItem = document.createElement("article");

    // let cartTitle = document.createElement("h4");
    // cartTitle.classList.add("cart__title");
    // cartTitle.innerHTML = "Carrito";
    // cartList.classList.add("cart");
    // cartList.appendChild(cartTitle);

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

    let cartItemRemove = document.createElement("button");
    cartItemRemove.classList.add("cart__item__remove");
    cartItemRemove.innerHTML = "X";
    cartItemInfo.appendChild(cartItemRemove);

    //LAS SRC DE LAS IMAGENES
    let cartItemImgSrc = this.parentElement.parentElement.children[0];
    cartItemImg.src = cartItemImgSrc.src;

    //EL NOMBRE DEL PRODUCTO
    let cartItemTitleName = this.parentElement.children[0].innerHTML;
    cartItemTitle.innerHTML = cartItemTitleName;

    //EL PRECIO DEL PRODUCTO
    let cartItemPriceValue = this.parentElement.children[2].innerHTML;
    cartItemPrice.innerHTML = cartItemPriceValue;

    //LA CANTIDAD DEL PRODUCTO
    let cartItemQuantityValue = 1;
    cartItemQuantity.innerHTML = cartItemQuantityValue;

    let cartItemRemoveBtn = document.querySelectorAll(".cart__item__remove");
    for (let i = 0; i < cartItemRemoveBtn.length; i++) {
      cartItemRemoveBtn[i].addEventListener("click", function () {
        this.parentElement.parentElement.remove();

        // messageText.innerHTML = `Se eliminó ${cartItemTitleName} del carrito`;
        // message.appendChild(messageText);
        // setTimeout(() => {
        //   messageText.remove();
        // }, 1000);
      });
    }

    let message = document.querySelector("#messageCart");
    let messageText = document.createElement("p");
    messageText.classList.add("messageCart");
    messageText.innerHTML = `Se agregó ${cartItemTitleName} al carrito`;
    message.appendChild(messageText);

    setTimeout(function () {
      messageText.remove();
    }, 2000);

  });
}