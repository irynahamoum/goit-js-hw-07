function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", handleButtonClick);

function handleButtonClick(event) {
  const bodyElem = document.body;
  let spanText = document.querySelector(".color");
  let randomColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomColor;
  spanText.textContent = randomColor;
}
