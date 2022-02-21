const input = document.querySelector("#validation-input");

const lengthEl = input.dataset.length;

const onBlur = () => {
  const valueLength = input.value.length;
  if (valueLength === Number(lengthEl)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", onBlur);

