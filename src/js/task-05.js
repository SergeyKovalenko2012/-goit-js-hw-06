const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const setOutput = value => {
  outputName.textContent = value;
};

const input = () => {
  if (inputName.value === "") {
    setOutput("Anonymous!");
  } else {
    setOutput(inputName.value);
  }
};

inputName.addEventListener("input", input);
