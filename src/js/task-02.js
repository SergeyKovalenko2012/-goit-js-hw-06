const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");

const ingredient = ingredients.map(ingredient => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = ingredient;
  list.appendChild(listEl);
});

// list.appendChild(...ingredient);

// appendChild здесь не работает (может что - то не так делаю)
