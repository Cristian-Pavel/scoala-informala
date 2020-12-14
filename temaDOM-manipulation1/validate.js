let elements = {
  firstName: document.querySelector("#firstName"),
  lastName: document.querySelector("#lastName"),
  textArea: document.querySelector("#textArea"),
  confirmationBanner: document.querySelector("#confirmationBanner"),
  numeConfirmare: document.querySelector("#numeConfirmare"),
};

function validateCompletion() {
  if (elements.firstName.value === "" || elements.firstName.value.length < 2) {
    elements.firstName.classList.add("empty");
    return false;
  } else if (
    elements.lastName.value === "" ||
    elements.lastName.value.length < 2
  ) {
    elements.lastName.classList.add("empty");
    return false;
  } else if (elements.textArea.value === "") {
    elements.textArea.classList.add("empty");
    return false;
  } else {
    showConfirmation();
    return false;
  }
}

function removeBorder(elem) {
  elem.classList.remove("empty");
}

function showConfirmation() {
  elements.confirmationBanner.style.display = "block";
  let str = `${elements.firstName.value}`;
  elements.numeConfirmare.innerHTML = str;

  console.log(`First name is: ${elements.firstName.value}`);
  console.log(`Last name is: ${elements.lastName.value}`);
  console.log(`The written message: ${elements.textArea.value}`);
}

// function draw() {
//   let str = "";
//   for (let i = messages2.length - 1; i >= 0; i--) {
//     str += `
// 					<div class="message">
// 						<div class="user">${messages2[i].user}</div>
// 						<div class="content">${messages2[i].message}</div>
// 					</div>
// 				`;
//   }

//   let chatMessages = document.querySelector("#chatMessages");
//   chatMessages.innerHTML = str;
