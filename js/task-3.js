// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const inputElement = document.getElementById("name-input");
const spanElement = document.getElementById("name-output");

inputElement.oninput = function (event) {
  console.log(inputElement);
  const value = event?.currentTarget.value;
  spanElement.innerHTML = value.trim() || "Anonymous";
};
