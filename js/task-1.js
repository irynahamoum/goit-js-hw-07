// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const element = document.getElementById("categories");
const length = element.children.length;

console.log(length);

for (let index = 0; index < length; index++) {
  const item = element.children[index];
  const title = item.getElementsByTagName("h2")[0].innerHTML;
  const count = item.getElementsByTagName("li").length;
  console.log(`${title}: ${count}`);
}
