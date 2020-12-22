///// Variabile
//////////////////

let elementeDOM = {
  formular: document.querySelector(".adaugare"),
  inputText: document.querySelector("#campScriere"),
  addBtn: document.querySelector("#addItemBtn"),
  sortAscBtn: document.querySelector(".sortAsc"),
  sortDescBtn: document.querySelector(".sortDesc"),
  itemCumparat: document.getElementsByClassName("itemCumparat"),
  markedBtn: document.querySelector(".markedAsBuyed"),
  tbody: document.querySelector("tbody"),
  table: document.querySelector("table"),
};

let listaCumparaturi = [];

// Event listeners
//////////////////////

elementeDOM.inputText.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    adauga();
  }
});

elementeDOM.sortAscBtn.addEventListener("click", sortAsc);

elementeDOM.sortDescBtn.addEventListener("click", sortDesc);

///// Functii
////////////////////

function adauga() {
  let item = elementeDOM.inputText.value;
  listaCumparaturi.push({
    item: item,
    buyed: false,
  });
  draw();
  elementeDOM.formular.reset();
}

function draw() {
  let str = "";
  for (let i = 0; i < listaCumparaturi.length; i++) {
    str += `
        <tr>
            <td class="itemCumparat">${listaCumparaturi[i].item}</td>
            <td>
                <button class="markedAsBuyed" onclick="markedAsBuyed(${i})">Mark as buyed</button>
            </td>
        </tr>
        `;
  }
  elementeDOM.tbody.innerHTML = str;
  for (let i = 0; i < listaCumparaturi.length; i++) {
    if (listaCumparaturi[i].buyed === true) {
      elementeDOM.itemCumparat[i].classList.add("taiat");
    }
  }
  elementeDOM.table.classList.remove("hidden");
}

function markedAsBuyed(i) {
  listaCumparaturi[i].buyed = true;
  draw();
}

function sortAsc() {
  let temporar;
  for (let i = 0; i < listaCumparaturi.length - 1; i++) {
    for (let j = i + 1; j < listaCumparaturi.length; j++) {
      if (listaCumparaturi[i].item > listaCumparaturi[j].item) {
        temporar = listaCumparaturi[i].item;
        listaCumparaturi[i].item = listaCumparaturi[j].item;
        listaCumparaturi[j].item = temporar;
      }
    }
  }
  draw();
}

function sortDesc() {
  let temporar;
  for (let i = 0; i < listaCumparaturi.length - 1; i++) {
    for (let j = i + 1; j < listaCumparaturi.length; j++) {
      if (listaCumparaturi[i].item < listaCumparaturi[j].item) {
        temporar = listaCumparaturi[i].item;
        listaCumparaturi[i].item = listaCumparaturi[j].item;
        listaCumparaturi[j].item = temporar;
      }
    }
  }
  draw();
}
