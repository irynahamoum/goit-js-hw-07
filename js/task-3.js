const inputElement = document.getElementById("name-input");
const spanElement = document.getElementById("name-output");

// ======== 1 ========

// ======== 2 ========

inputElement.oninput = function (event) {
  console.log(inputElement);
  const value = event?.currentTarget.value;
  spanElement.innerHTML = value.trim() || "Anonymous";
};
