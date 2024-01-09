function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", handleButtonClick);

function handleButtonClick(event) {
  const widget = document.querySelector(".widget");
  let spanText = document.querySelector(".color");
  let randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor;
  spanText.textContent = randomColor;
}
