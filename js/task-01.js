('use strict');

const totalCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategoriesEl.length}`);
const categoriesArr = [...totalCategoriesEl]
  .map(
    categories => `Category: ${categories.children[0].textContent};
  Elements: ${categories.children[1].children.length}`
  )
  .join('\n');
console.log(categoriesArr);

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

// const categoriesList = document.querySelectorAll('.item');
// console.log(`Number of categories: ${categoriesList.length}`);

// categoriesList.forEach(item => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });
