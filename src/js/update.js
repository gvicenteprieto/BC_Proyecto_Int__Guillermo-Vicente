const form__update = document.querySelector("#form__update");

let validationMessage = document.getElementById("validationMessage");
let successMessage = document.getElementById("successMessage");

form__update.addEventListener("submit", (e) => {
  e.preventDefault();

  let validation = true;
  validationMessage.innerHTML = "";

  let name_prod = e.target.name_prod.value;
  let price = e.target.price.value;
  let stock = e.target.stock.value;
  let brand = e.target.brand.value;
  let category = e.target.category.value;
  let short_description = e.target.short_description.value;
  let long_description = e.target.long_description.value;
  let free_shipping = e.target.free_shipping.value;
  let age_from = e.target.age_from.value;
  let age_to = e.target.age_to.value;
  let photo = e.target.photo.value;

  let errorName_prod = document.getElementById("errorName_prod");
  let errorPrice = document.getElementById("errorPrice");
  let errorStock = document.getElementById("errorStock");
  let errorBrand = document.getElementById("errorBrand");
  let errorCategory = document.getElementById("errorCategory");
  let errorShort_description = document.getElementById(
    "errorShort_description"
  );
  let errorLong_description = document.getElementById("errorLong_description");
  let errorFree_shipping = document.getElementById("errorFree_shipping");
  let errorAge_from = document.getElementById("errorAge_from");
  let errorAge_to = document.getElementById("errorAge_to");
  let errorPhoto = document.getElementById("errorPhoto");
  let errorMessage = document.getElementById("errorMessage");

  let name_prodRegex = /^[A-Z 0-9][ A-Za-z 0-9.']{0,30}$/;
  let priceRegex = /^[0-9]+([.][0-9]+)?$/;
  let stockRegex = /^[0-9]+$/;
  let brandRegex = /^[A-Z 0-9][ A-Za-z 0-9.']{0,30}$/;
  let categoryRegex = /^[A-Z][ A-Za-z 0-9.']{0,30}$/;
  let short_descriptionRegex = /^[A-Za-z0-9\s]{1,30}$/;
  let long_descriptionRegex = /^[A-Za-z0-9\s]{1,30}$/;
  let free_shippingRegex = /^[A-Za-z0-9\s]{1,30}$/;
  let age_fromRegex = /^[0-9]{1,2}$/;
  let age_toRegex = /^[0-9]{1,2}$/;
  let photoRegex = /^[A-Za-z0-9\s]{1,30}$/;

  let inputName_prod = document.querySelector("#name_prod");
  let inputPrice = document.querySelector("#price");
  let inputStock = document.querySelector("#stock");
  let inputBrand = document.querySelector("#brand");
  let inputCategory = document.querySelector("#category");
  let inputShort_description = document.querySelector("#short_description");
  let inputLong_description = document.querySelector("#long_description");
  let inputFree_shipping = document.querySelector("#free_shipping");
  let inputAge_from = document.querySelector("#age_from");
  let inputAge_to = document.querySelector("#age_to");
  let inputPhoto = document.querySelector("#photo");

  if (name_prod.length < 0 || name_prod.length > 30) {
    errorName_prod.innerHTML = "El nombre debe tener entre 1 y 30 caracteres";
    inputName_prod.classList.add("is-invalid");
    validation = false;
  } else if (!name_prodRegex.test(name_prod)) {
    errorName_prod.innerHTML = "El nombre debe comenzar en mayúsculas";
    inputName_prod.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>El nombre ' ${name_prod} ' no es válido</p>`;
  } else {
    errorName_prod.innerHTML = "";
    inputName_prod.classList.remove("is-invalid");
    inputName_prod.classList.add("is-valid");
  }

  if (price.length < 0 || price.length > 30) {
    errorPrice.innerHTML = "El precio debe tener entre 1 y 30 caracteres";
    inputPrice.classList.add("is-invalid");
    validation = false;
  } else if (!priceRegex.test(price)) {
    errorPrice.innerHTML = "El precio debe tener caracteres válidos";
    inputPrice.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>El precio ' ${price} ' no es válido</p>`;
  } else {
    errorPrice.innerHTML = "";
    inputPrice.classList.remove("is-invalid");
    inputPrice.classList.add("is-valid");
  }

  if (stock.length < 0 || stock.length > 30) {
    errorStock.innerHTML = "El stock debe tener entre 1 y 30 caracteres";
    inputStock.classList.add("is-invalid");
    validation = false;
  } else if (!stockRegex.test(stock)) {
    errorStock.innerHTML = "El stock debe tener caracteres válidos";
    inputStock.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>El stock ' ${stock} ' no es válido</p>`;
  } else {
    errorStock.innerHTML = "";
    inputStock.classList.remove("is-invalid");
    inputStock.classList.add("is-valid");
  }

  if (brand.length < 0 || brand.length > 30) {
    errorBrand.innerHTML = "La marca debe tener entre 1 y 30 caracteres";
    inputBrand.classList.add("is-invalid");
    validation = false;
  } else if (!brandRegex.test(brand)) {
    errorBrand.innerHTML = "La marca debe tener caracteres válidos";
    inputBrand.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>La marca ' ${brand} ' no es válido</p>`;
  } else {
    errorBrand.innerHTML = "";
    inputBrand.classList.remove("is-invalid");
    inputBrand.classList.add("is-valid");
  }

  if (category.length < 1 || category.length > 30) {
    errorCategory.innerHTML = "La categoría debe tener entre 1 y 30 caracteres";
    inputCategory.classList.add("is-invalid");
    validation = false;
  } else if (!categoryRegex.test(category)) {
    errorCategory.innerHTML = "La categoría debe tener caracteres válidos";
    inputCategory.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>La categoría ' ${category} ' no es válido</p>`;
  } else {
    errorCategory.innerHTML = "";
    inputCategory.classList.remove("is-invalid");
    inputCategory.classList.add("is-valid");
  }

  if (short_description.length < 2 || short_description.length > 30) {
    errorShort_description.innerHTML =
      "La descripción corta debe tener entre 2 y 30 caracteres";
    inputShort_description.classList.add("is-invalid");
    validation = false;
  } else if (!short_descriptionRegex.test(short_description)) {
    errorShort_description.innerHTML =
      "La descripción corta debe tener caracteres válidos";
    inputShort_description.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>La descripción corta ' ${short_description} ' no es válido</p>`;
  } else {
    errorShort_description.innerHTML = "";
    inputShort_description.classList.remove("is-invalid");
    inputShort_description.classList.add("is-valid");
  }

  if (long_description.length < 2 || long_description.length > 30) {
    errorLong_description.innerHTML =
      "La descripción larga debe tener entre 2 y 30 caracteres";
    inputLong_description.classList.add("is-invalid");
    validation = false;
  } else if (!long_descriptionRegex.test(long_description)) {
    errorLong_description.innerHTML =
      "La descripción larga debe tener caracteres válidos";
    inputLong_description.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>La descripción larga ' ${long_description} ' no es válido</p>`;
  } else {
    errorLong_description.innerHTML = "";
    inputLong_description.classList.remove("is-invalid");
    inputLong_description.classList.add("is-valid");
  }

  // if (free_shipping.length < 2 || free_shipping.length > 30) {
  //   errorFree_shipping.innerHTML =
  //     "El envío gratis debe tener entre 2 y 30 caracteres";
  //   inputFree_shipping.classList.add("is-invalid");
  //   validation = false;
  // } else if (!free_shippingRegex.test(free_shipping)) {
  //   errorFree_shipping.innerHTML =
  //     "El envío gratis debe tener caracteres válidos";
  //   inputFree_shipping.classList.add("is-invalid");
  //   validation = false;
  //   validationMessage.innerHTML += `<p>El envío gratis '${free_shipping}' no es válido</p>`;
  // } else {
  //   errorFree_shipping.innerHTML = "";
  //   inputFree_shipping.classList.remove("is-invalid");
  //   inputFree_shipping.classList.add("is-valid");
  // }

  if (age_from.length < 0 || age_from.length > 3) {
    errorAge_from.innerHTML = "La edad desde debe tener entre 1 y 3 caracteres";
    inputAge_from.classList.add("is-invalid");
    validation = false;
  } else if (!age_fromRegex.test(age_from)) {
    errorAge_from.innerHTML = "La edad desde debe tener caracteres válidos";
    inputAge_from.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>La edad desde ' ${age_from} ' no es válido</p>`;
  } else {
    errorAge_from.innerHTML = "";
    inputAge_from.classList.remove("is-invalid");
    inputAge_from.classList.add("is-valid");
  }

  if (age_to.length < 0 || age_to.length > 3) {
    errorAge_to.innerHTML = "La edad hasta debe tener entre 1 y 3 caracteres";
    inputAge_to.classList.add("is-invalid");
    validation = false;
  } else if (!age_toRegex.test(age_to)) {
    errorAge_to.innerHTML = "La edad hasta debe tener caracteres válidos";
    inputAge_to.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>La edad hasta ' ${age_to} ' no es válido</p>`;
  } else {
    errorAge_to.innerHTML = "";
    inputAge_to.classList.remove("is-invalid");
    inputAge_to.classList.add("is-valid");
  }

  // if (photo.length < 2 || photo.length > 30) {
  //   errorPhoto.innerHTML =
  //     "La foto debe tener entre 2 y 30 caracteres";
  //   inputPhoto.classList.add("is-invalid");
  //   validation = false;
  // } else if (!photoRegex.test(photo)) {
  //   errorPhoto.innerHTML =
  //     "La foto debe tener caracteres válidos";
  //   inputPhoto.classList.add("is-invalid");
  //   validation = false;
  //   validationMessage.innerHTML += `<p>La foto '${photo}' no es válido</p>`;
  // } else {
  //   errorPhoto.innerHTML = "";
  //   inputPhoto.classList.remove("is-invalid");
  //   inputPhoto.classList.add("is-valid");
  // }

  if (validation) {
    successMessage.innerHTML = "El producto se ha actualizado correctamente";
    // successMessage.classList.remove("d-none");
    // successMessage.classList.add("d-block");
    form__update.style.display = "none";

    let product = {
      name_prod: name_prod.value,
      price: price.value,
      stock: stock.value,
      brand: brand.value,
      category: category.value,
      short_description: short_description.value,
      long_description: long_description.value,
      free_shipping: free_shipping.value,
      age_from: age_from.value,
      age_to: age_to.value,
      photo: photo.value,
    };

    validationMessage.innerHTML = `<p>Detalle de Producto agregado</p>
        <p>Nombre: ${name_prod} </p>
        <p>Precio: ${price} </p>
        <p>Stock: ${stock}</p>
        <p>Marca: ${brand} </p>
        <p>Categoria: ${category} </p>
        <p>Descripcion Corta: ${short_description} </p>
        <p>Descripcion Larga: ${long_description} </p>
        <p>Envio sin Cargo: ${free_shipping} </p>
        <p>Edad Desde: ${age_from} </p>
        <p>Edad Hasta: ${age_to} </p>
        <p>Foto: ${photo} </p>`;
    validationMessage.classList.add("is-valid");

    setTimeout(() => {
      successMessage.innerHTML = "";
      form__update.submit();
    }, 7000);

    form__update.reset();
  }
});