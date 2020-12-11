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
  } else {
    elements.textArea.classList.remove("empty");
  }
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
