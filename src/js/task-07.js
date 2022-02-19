const rangeLine = document.querySelector("#font-size-control");

const rangeText = document.querySelector("#text");

const onInput = () => {
  const lineSize = rangeLine.value;
  rangeText.style.fontSize = `${lineSize}px`;
};

rangeLine.addEventListener("input", onInput);
