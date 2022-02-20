const formField = document.querySelector(".login-form");

const onForm = event => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password
  };
  if (mail === "" || password === "") {
    return alert("все поля должны быть заполнены!");
  } else {
    console.log(formData);
  }

  formField.reset();
};

formField.addEventListener("submit", onForm);
