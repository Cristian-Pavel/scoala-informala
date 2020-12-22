"use strict";

// Variabile
//////////////////////

/** Am pus dom-ul intr-un obiect deoarece am inceput cu un design de baza. Iar daca as modifica designul ulterior si schimb structra HMTL-ului, imi doresc sa-mi fie mai usor sa modific elementele de legatura cu DOM doar intr-un loc */
let elementsDOM = {
  inputNume: document.querySelector('[name="nume"]'),
  inputTelef: document.querySelector('[name="telefon"]'),
  adaugaBtn: document.querySelector("#AdaugaBtn"),
  tableBody: document.querySelector("table tbody"),
  table: document.querySelector("table"),
  form: document.querySelector("form"),
};

let listaContacte = [];

// Functii
/////////////////
function adauga() {
  if (validareNume() && validareTelefon()) {
    let nume = elementsDOM.inputNume.value;
    let nrTelef = elementsDOM.inputTelef.value;
    listaContacte.push({
      nume: nume,
      nrTelef: nrTelef,
    });
    draw();
    elementsDOM.form.reset();
  }
}

function draw() {
  let str = "";
  for (let i = 0; i < listaContacte.length; i++) {
    str += `
        <tr>
            <td>${listaContacte[i].nume}</td>
            <td>${listaContacte[i].nrTelef}</td>
            <td><a href="#" onclick="modifica(${i})">Modifica</a></td>
            <td><a href="#" onclick="sterge(${i})">Sterge</a></td>
        </tr>
        `;
  }
  elementsDOM.tableBody.innerHTML = str;
  elementsDOM.table.classList.remove("hidden");
}

function sterge(idx) {
  if (
    confirm(
      `Esti sigur ca vrei sa stergi numarul de telefon ${listaContacte[idx].nrTelef} care este alocat persoanei numita ${listaContacte[idx].nume}?`
    )
  ) {
    listaContacte.splice(idx, 1);
    draw();
  }
}

let indexEditare = -1;

function modifica(idx) {
  elementsDOM.inputNume.value = listaContacte[idx].nume;
  elementsDOM.inputTelef.value = listaContacte[idx].nrTelef;
  indexEditare = idx;
  elementsDOM.adaugaBtn.value = "Adauga modificare contact";
  elementsDOM.adaugaBtn.onclick = modificareConfirmata;
}

function modificareConfirmata() {
  if (indexEditare === -1) {
    return;
  }
  if (validareNume() && validareTelefon()) {
    let inregistrare = listaContacte[indexEditare];
    inregistrare.nume = elementsDOM.inputNume.value;
    inregistrare.nrTelef = elementsDOM.inputTelef.value;
    draw();
    indexEditare = -1;
    elementsDOM.form.reset();
    elementsDOM.adaugaBtn.value = "Adauga contact";
    elementsDOM.adaugaBtn.onclick = adauga;
  }
}

function validareNume() {
  if (elementsDOM.inputNume.value.length < 2) {
    elementsDOM.inputNume.classList.add("eroare");
    alert("Ati introdus prea putine caractere la nume.");
    return false;
  } else {
    return true;
  }
}

function validareTelefon() {
  if (
    elementsDOM.inputTelef.value.length < 10 ||
    !/[0-9]/.test(elementsDOM.inputTelef.value)
  ) {
    elementsDOM.inputTelef.classList.add("eroare");
    alert("Va rugam verificati numarul de telefon introdus");
    return false;
  } else {
    return true;
  }
}

function clearInvalid(elem) {
  elem.classList.remove("eroare");
}
