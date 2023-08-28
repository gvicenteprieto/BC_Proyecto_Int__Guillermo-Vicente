let form__update = document.querySelector("#form__update");
let name_prod = document.querySelector("#name_prod");
let price = document.querySelector("#price");
let stock = document.querySelector("#stock");
let brand = document.querySelector("#brand");
let category = document.querySelector("#category");
let short_description = document.querySelector("#short_description");
let long_description = document.querySelector("#long_description");
let free_shipping = document.querySelector("#free_shipping");
let age_from = document.querySelector("#age_from");
let age_to = document.querySelector("#age_to");
let photo = document.querySelector("#photo");
let btnSend = document.querySelector(".btnSend");
let errors = document.querySelector("#errors");
let successMessage = document.querySelector("#successMessage");
let validationMessage = document.querySelector("#validationMessage");

form__update.addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = [];
    // let successMessage = [];
    // let validationMessage = [];

    if (name_prod.value.length < 5) {
        errors.push("El nombre debe tener al menos 5 caracteres");
        name_prod.classList.add("is-invalid");
    } else {
        name_prod.classList.add("is-valid");
    }

    if (price.value.length < 1) {
        errors.push("El precio debe tener al menos 1 caracter");
        price.classList.add("is-invalid");
    } else {
        price.classList.add("is-valid");
    }

    if (stock.value.length < 1) {
        errors.push("El stock debe tener al menos 1 caracter");
        stock.classList.add("is-invalid");
    } else {
        stock.classList.add("is-valid");
    }

    if (brand.value.length < 1) {
        errors.push("La marca debe tener al menos 1 caracter");
        brand.classList.add("is-invalid");
    } else {
        brand.classList.add("is-valid");
    }

    if (category.value.length < 1) {
        errors.push("La categoria debe tener al menos 1 caracter");
        category.classList.add("is-invalid");
    } else {
        category.classList.add("is-valid");
    }

    if (short_description.value.length < 1) {
        errors.push("La descripcion corta debe tener al menos 1 caracter");
        short_description.classList.add("is-invalid");
    } else {
        short_description.classList.add("is-valid");
    }

    if (long_description.value.length < 1) {
        errors.push("La descripcion larga debe tener al menos 1 caracter");
        long_description.classList.add("is-invalid");
    } else {
        long_description.classList.add("is-valid");
    }

    if (free_shipping.value.length < 1) {
        errors.push("El envio sin cargo debe tener al menos 1 caracter");
        free_shipping.classList.add("is-invalid");
    } else {
        free_shipping.classList.add("is-valid");
    }

    if (age_from.value.length < 1) {
        errors.push("La edad desde debe tener al menos 1 caracter");
        age_from.classList.add("is-invalid");
    } else {
        age_from.classList.add("is-valid");
    }

    if (age_to.value.length < 1) {
        errors.push("La edad hasta debe tener al menos 1 caracter");
        age_to.classList.add("is-invalid");
    } else {
        age_to.classList.add("is-valid");
    }

    if (photo.value.length < 1) {
        errors.push("La foto debe tener al menos 1 caracter");
        photo.classList.add("is-invalid");
    } else {
        photo.classList.add("is-valid");
    }

    if (errors.length > 0) {
        e.preventDefault();
        let ulErrors = document.querySelector("#errors");
        ulErrors.innerHTML = "";
        for (let i = 0; i < errors.length; i++) {
            ulErrors.innerHTML += `<li>${errors[i]}</li>`;
        }
    } else {
        let successMessage = document.querySelector("#successMessage");
        successMessage.innerHTML = "El producto se ha agregado correctamente";
        successMessage.classList.add("is-valid");
        form__update.style.display = "none";
        let validationMessage = document.querySelector("#validationMessage");

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
            photo: photo.value
        }

        validationMessage.innerHTML = `<p>Producto agregado</p>
        <p>Nombre: ${product.name_prod} </p>
        <p>Precio: ${product.price} </p>>
        <p>Stock: ${product.stock}</p>
        <p>Marca: ${product.brand} </p>
        <p>Categoria: ${product.category} </p>
        <p>Descripcion Corta: ${product.short_description} </p>
        <p>Descripcion Larga: ${product.long_description} </p>
        <p>Envio sin Cargo: ${product.free_shipping} </p>
        <p>Edad Desde: ${product.age_from} </p>
        <p>Edad Hasta: ${product.age_to} </p>
        <p>Foto: ${product.photo} </p>`;
        validationMessage.classList.add("is-valid");

        form__update.reset();
    }

});