const rangeLine = document.querySelector("#font-size-control");

const rangeText = document.querySelector("#text");

const onInput = () => {
  const lineSize = rangeLine.value;
  rangeText.style.fontSize = `${lineSize}px`;
};

onInput();

rangeLine.addEventListener("input", onInput);
