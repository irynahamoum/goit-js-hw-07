// ======== 1 ========

// const elements = document.getElementById("categories");
// const length = elements.children.length;

// console.log(`Number of categories: ${length}`);

// for (let index = 0; index < length; index++) {
//   const item = element.children[index];
//   const title = item.getElementsByTagName("h2")[0].innerHTML;
//   const count = item.getElementsByTagName("li").length;
//   console.log(`${title}: ${count}`);
// }

// ======== 2 ========
// ===With forEach===

const elementsArr = document.querySelectorAll(".item");

const length = elementsArr.length;

console.log(`Number of categories: ${length}`);

elementsArr.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.getElementsByTagName("li").length}`);
});
