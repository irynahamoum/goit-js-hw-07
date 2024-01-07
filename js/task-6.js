function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputElem = document.querySelector("#controls :first-child");
const divElem = document.querySelector("#boxes");

console.log(inputElem);
createBtn.addEventListener("click", handleCreateBtnClick);

destroyBtn.addEventListener("click", handleDestroyBtnClick);

function handleCreateBtnClick(event) {
  const inputValue = inputElem.value;
  if (inputValue <= 0 || inputValue > 100) {
    return alert("Please enter number between 1-100");
  }
  let size = 30;
  let array = [];
  for (let i = 1; i <= inputValue; i++) {
    const randomColor = getRandomHexColor();
    const box = ` <div style="background-color: ${randomColor}; height: ${size}px; width: ${size}px"></div>`;
    array.push(box);
    size += 10;
  }
  divElem.innerHTML = array.join("");
  inputElem.value = "";
}

function handleDestroyBtnClick(event) {
  divElem.innerHTML = "";
}
