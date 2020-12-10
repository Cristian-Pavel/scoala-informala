let elements = {
  firstName: document.querySelector("#firstName"),
  lastName: document.querySelector("#lastName"),
  textArea: document.querySelector("#textArea"),
};

function validateCompletion() {
  if (elements.firstName.value === "") {
    elements.firstName.classList.add("empty");
  } else if (elements.lastName.value === "") {
    elements.lastName.classList.add("empty");
  } else if (elements.textArea.value === "") {
    elements.textArea.classList.add("empty");
  }
}
