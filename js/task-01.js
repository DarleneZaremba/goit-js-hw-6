const list = document.getElementById("categories");
const amountOfCategories = list.children;
console.log(`Number of categories: ${amountOfCategories.length}`);

const items = document.querySelectorAll(".item");
const itemsArray = [...items];

const getCategoryAndAmountOfElements = itemsArray.map((item) => {
  console.log(item.firstElementChild.textContent);
  console.log(item.lastElementChild.children.length);
});

console.log(getCategoryAndAmountOfElements);
