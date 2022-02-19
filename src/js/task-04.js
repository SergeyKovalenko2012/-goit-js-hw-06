const decBtn = document.querySelector("button[data-action='decrement']");
const incBtn = document.querySelector("button[data-action='increment']");

const value = document.querySelector("#value");

let changValue = 0;

const total = () => {
  value.textContent = changValue;
};

const minus = () => {
  changValue = changValue - 1;
  total();
};

const plus = () => {
  changValue += 1;
  total();
};

decBtn.addEventListener("click", minus);
incBtn.addEventListener("click", plus);
