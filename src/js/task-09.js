function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

const onBtn = () => {
  const newColor = getRandomHexColor();
  textColor.innerHTML = newColor;
  body.style.backgroundColor = newColor;
};

btnColor.addEventListener("click", onBtn);
