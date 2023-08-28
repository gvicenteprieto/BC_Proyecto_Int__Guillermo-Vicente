const form = document.querySelector(".form__contact");
let validationMessage = document.getElementById("validationMessage");
let successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let validation = true;
  validationMessage.innerHTML = "";
  let name = event.target.name.value;
  let lastName = event.target.lastName.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;
  let subject = event.target.subject.value;
  if (subject === "buy") {
    subject = "Consulta por compra de producto";
  } else if (subject === "change") {
    subject = "Consulta por cambio de producto";
  } else if (subject === "other") {
    subject = "Otra consulta";
  }

  let message = event.target.message.value;

  let errorName = document.getElementById("errorName");
  let errorLastName = document.getElementById("errorLastName");
  let errorEmail = document.getElementById("errorEmail");
  let errorPhone = document.getElementById("errorPhone");
  let errorMessage = document.getElementById("errorMessage");

  let nameRegex = /^[A-Z][ A-Za-z 0-9.']{0,30}$/;
  let lastNameRegex = /^[A-Z][ A-Za-z 0-9.']{0,30}$/;
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let phoneRegex = /^[0-9]{2,4}[-]{0,1}[0-9]{2,4}[-]{0,1}[0-9]{2,4}$/;
  let messageRegex = /^[a-zA-Z0-9.,:;()¿?¡! ]{1,250}$/;

  let inputName = document.querySelector("#name");
  let inputLastName = document.querySelector("#lastName");
  let inputEmail = document.querySelector("#email");
  let inputPhone = document.querySelector("#phone");
  let inputMessage = document.querySelector("#message");

  if (name.length < 0 || name.length > 30) {
    errorName.innerHTML = "El nombre debe tener entre 1 y 30 caracteres";
    inputName.classList.add("is-invalid");
    validation = false;
  } else if (!nameRegex.test(name)) {
    errorName.innerHTML = "El nombre debe comenzar en mayúsculas";
    inputName.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>El nombre ' ${name} ' no es válido</p>`;
  } else {
    errorName.innerHTML = "";
    inputName.classList.remove("is-invalid");
    inputName.classList.add("is-valid");
  }

  if (lastName.length < 0 || lastName.length > 30) {
    errorLastName.innerHTML = "El apellido debe tener entre 1 y 30 caracteres";
    inputLastName.classList.add("is-invalid");
    validation = false;
  } else if (!lastNameRegex.test(lastName)) {
    errorLastName.innerHTML = "El apellido debe comenzar en mayúsculas y tener tener caracteres válidos";
    inputLastName.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>El apellido ' ${lastName} ' no es válido</p>`;
  } else {
    errorLastName.innerHTML = "";
    inputLastName.classList.remove("is-invalid");
    inputLastName.classList.add("is-valid");
  }

  if (email.length < 0 || email.length > 30) {
    errorEmail.innerHTML = "El email debe tener entre 2 y 30 caracteres";
    inputEmail.classList.add("is-invalid");
    validation = false;
  } else if (!emailRegex.test(email)) {
    errorEmail.innerHTML = "El email debe tener caracteres válidos";
    inputEmail.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>El email ' ${email} ' no es válido</p>`;
  } else {
    errorEmail.innerHTML = "";
    inputEmail.classList.remove("is-invalid");
    inputEmail.classList.add("is-valid");
  }

  if (phone.length < 0 || phone.length > 15) {
    errorPhone.innerHTML = "El teléfono debe tener entre 8 y 15 caracteres";
    inputPhone.classList.add("is-invalid");
    validation = false;
  } else if (!phoneRegex.test(phone)) {
    errorPhone.innerHTML = "El teléfono debe tener caracteres válidos";
    inputPhone.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>El teléfono ' ${phone} ' no es válido</p>`;
  } else {
    errorPhone.innerHTML = "";
    inputPhone.classList.remove("is-invalid");
    inputPhone.classList.add("is-valid");
  }

  if (message.length < 0 || message.length > 200) {
    errorMessage.innerHTML = "El mensaje debe tener entre 1 y 200 caracteres";
    inputMessage.classList.add("is-invalid");
    validation = false;
  } else if (!messageRegex.test(message)) {
    errorMessage.innerHTML = "El mensaje debe tener caracteres válidos";
    inputMessage.classList.add("is-invalid");
    validation = false;
    validationMessage.innerHTML += `<p>El mensaje ' ${message} ' no es válido</p>`;
  } else {
    errorMessage.innerHTML = "";
    inputMessage.classList.remove("is-invalid");
    inputMessage.classList.add("is-valid");
  }

  if (validation === true) {
    console.log("Formulario enviado");
    form.style.display = "none";

    successMessage.innerHTML = `
        <p>Te damos la bienvenida</p>
        <h3>${name}</h3>
        <p>Gracias por contactarnos.Recibimos tu mensaje:</p>
        <p>Asunto: ${subject}</p>
        <p>Mensaje:'${message}'</p>
        <p>Te responderemos a la brevedad al siguiente correo: </p>
        <h3> ${email}</h3>
        <p>Teléfono registrado: </p>
        <h3> ${phone}</h3>
        <p>Saludos te desea Juguetería Cósmica,</p>
        <span>Seguinos en las redes sociales!</span>`

    setTimeout(() => {
      successMessage.innerHTML = "";
      form.style.display = "flex";
    }, 7000);

    form.reset();
  }
});
