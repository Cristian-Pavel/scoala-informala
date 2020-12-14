let elements = {
  firstName: document.querySelector("#firstName"),
  lastName: document.querySelector("#lastName"),
  textArea: document.querySelector("#textArea"),
  confirmationBanner: document.querySelector("#confirmationBanner"),
};

function validateCompletion() {
  let validation = false;
  if (elements.firstName.value === "") {
    elements.firstName.classList.add("empty");
  } else if (elements.lastName.value === "") {
    elements.lastName.classList.add("empty");
  } else if (elements.textArea.value === "") {
    elements.textArea.classList.add("empty");
  } else {
    validation = true;
    showConfirmation();
  }
}

function removeBorder(elem) {
  elem.classList.remove("empty");
}

function showConfirmation() {
  elements.confirmationBanner.style.display = "block";
  let str = `
      <i class="fas fa-check-circle"></i>
        Thank you for contacting us, ${elements.firstName.value}!
      `;
  elements.confirmationBanner.innerHTML = str;

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
// }
