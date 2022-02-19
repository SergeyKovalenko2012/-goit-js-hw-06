const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = ingredient;
  list.appendChild(listEl);
}
