// ======== 1 ========

const textInput = document.getElementById("name-input");

const output = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
  const value = event?.currentTarget.value;
  output.textContent = value.trim() || "Anonymous";
});

// ======== 2 ========

// const inputElement = document.getElementById("name-input");
// const spanElement = document.getElementById("name-output");

// inputElement.oninput = function (event) {
//   console.log(inputElement);
//   const value = event?.currentTarget.value;
//   spanElement.innerHTML = value.trim() || "Anonymous";
// };
