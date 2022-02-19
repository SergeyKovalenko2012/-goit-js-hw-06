const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const setOutput = value => {
  outputName.textContent = value;
};

const input = () => {
  if (inputName.value) {
    setOutput(inputName.value);
  } else {
    setOutput("Anonymous!");
  }
};

inputName.addEventListener("input", input);
