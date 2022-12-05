const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// let listEl = document.getElementById("ingredients");
// const Foodingredients = ingredients.forEach((ingredient) => {
//   let itemsEl = document.createElement("li");
//   itemsEl.innerHTML = ingredient;
//   listEl.append(itemsEl);
//   parent.append(...itemsEl);
// });

// console.log(Foodingredients);

const list = document.querySelector('#ingredients');
const liArray = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;
  liArray.push(item);
});

list.append(...liArray);
