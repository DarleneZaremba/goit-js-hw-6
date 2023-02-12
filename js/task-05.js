const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

input.addEventListener("input", getInputValuesHandler);

function getInputValuesHandler(event) {
  if (event.currentTarget.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = event.currentTarget.value;
  }
}
