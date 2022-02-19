const category = document.querySelector("#categories");
console.log(`Number of categories: ${category.children.length}`);

const categoryEl = category.children;
for (const category of categoryEl) {
  const categoryTitle = category.firstElementChild.textContent;
  console.log(`Category: ${categoryTitle}`);
  const categoryLength = category.lastElementChild.children;
  console.log(`Elements: ${categoryLength.length}`);
}
