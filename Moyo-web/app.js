///////////////////////
// DOM selection
///////////////////////

let selectDOM = {
  nav: document.querySelector("nav"),
  burgerMenuBtn: document.querySelector(".burgerMenu"),
  addNewGoalBtn: document.getElementById("addNewGoalBtn"),
  goalsTable: document.querySelector(".goalsTable"),
  addNewGoalInput: document.querySelector(".addNewGoalInput"),
  confirmBtnEdit: document.getElementById("confirmBtnEdit"),
  cancelBtnEdit: document.getElementById("cancelBtnEdit"),
};

////////////////////////////
//// Variable initializations
//////////////////////////////

// Every page

let url =
  "https://moyo-app-7cf34-default-rtdb.europe-west1.firebasedatabase.app/";

let databaseInfo = {};
let editingIndex = "";

// How to page

// Set goals page

// Add activity page

// Week view page

// Statisics page

///////////////////////
// Functii
///////////////////////

// Every page

function toggleMobileMenu() {
  selectDOM.nav.classList.toggle("hidden");
}

async function getDataFromDataBase() {
  const response = await fetch(url + ".json");
  databaseInfo = await response.json();
  if (databaseInfo === null) {
    databaseInfo = {};
  }
  drawTable();
}

// How to page

// Set goals page

async function addNewGoal() {
  let goal = selectDOM.addNewGoalInput.value;
  if (goal === "") {
    return;
  }
  const response = await fetch(url + ".json", {
    method: "post",
    body: JSON.stringify({
      goal: goal,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  await response.json();
  await getDataFromDataBase();
}

function edit(idx) {
  selectDOM.addNewGoalInput.value = databaseInfo[idx].goal;
  editingIndex = idx;
  selectDOM.goalsTable.classList.add("hiddenEdit");
  selectDOM.addNewGoalBtn.classList.add("hiddenEdit");
  selectDOM.confirmBtnEdit.classList.remove("hiddenEdit");
  selectDOM.cancelBtnEdit.classList.remove("hiddenEdit");
}

async function confirmEditOfGoal() {
  if (editingIndex === "") {
    return;
  }
  let editedGoal = {};
  editedGoal.goal = selectDOM.addNewGoalInput.value;
  const response = await fetch(url + editingIndex + ".json", {
    method: "put",
    body: JSON.stringify(editedGoal),
    headers: {
      "Content-Type": "application/json",
    },
  });
  await response.json();
  await getDataFromDataBase();
  cancel();
}

function cancel() {
  selectDOM.goalsTable.classList.remove("hiddenEdit");
  selectDOM.addNewGoalBtn.classList.remove("hiddenEdit");
  selectDOM.confirmBtnEdit.classList.add("hiddenEdit");
  selectDOM.cancelBtnEdit.classList.add("hiddenEdit");
  selectDOM.addNewGoalInput.value = "";
}

async function deleteGoal(id) {
  if (
    confirm(
      `Are you sure that you want to delete the "${databaseInfo[id].goal}" goal?`
    )
  ) {
    const response = await fetch(url + id + ".json", {
      method: "delete",
    });
    await response.json();
    await getDataFromDataBase();
  }
}

function drawTable() {
  let str = "";
  for (let [id, writtenGoal] of Object.entries(databaseInfo)) {
    str += `
        <tr>
          <td>${writtenGoal.goal}</td>
          <td class="editGoalBtn" onclick="edit('${id}')">Edit</td>
          <td onclick="deleteGoal('${id}');" class="deleteGoalBtn">Delete</td>
        </tr>`;
  }
  selectDOM.addNewGoalInput.value = "";
  selectDOM.goalsTable.innerHTML = str;
}

// Add activity page

// Week view page

function drawCalendar(event) {
  let calendarEl = document.getElementById("calendar");
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridWeek",
    nowIndicator: true,
    // initialDate: "2021-02-07",
    headerToolbar: {
      left: "prev,next,today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    events: [
      {
        groupId: "productive",
        title: "Scris cod",
        start: "2021-02-15T16:00:00",
        end: "2021-02-15T20:00:00",
        backgroundColor: "green",
      },
    ],
  });

  calendar.render();
}

// Statisics page

///////////////////////
// Event listeners
///////////////////////

// Every page
selectDOM.burgerMenuBtn.addEventListener("click", toggleMobileMenu);

// How to page

// Set goals page
if (window.location.href === "http://127.0.0.1:5500/setGoals.html") {
  selectDOM.addNewGoalBtn.addEventListener("click", addNewGoal);
  window.addEventListener("load", getDataFromDataBase);
  selectDOM.cancelBtnEdit.addEventListener("click", cancel);
  selectDOM.confirmBtnEdit.addEventListener("click", confirmEditOfGoal);
}

// Add activity page

// Week view page

if (window.location.href === "http://127.0.0.1:5500/weekView.html") {
  window.addEventListener("load", drawCalendar);
}

// Statisics page

/**
 * //////////////// weekView
 * TODO:
  1) Adaugarea de evenimente se face prin adaugarea unui obiect in array-ul events (click aici, minutul 6:25 - https://www.youtube.com/watch?v=hyVzloriEfo) 
  2) Evenimentele se adauga sub forma unui array de obiecte (dupa cum arata in codul de aici de la linia 59 view-source:https://fullcalendar.io/docs/initialize-globals-demo)
  3) Eu as putea adauga ca proprietati la fiecare obiect: 
      3.1) Tipul activitatii (productiva, de relaxare, mentenanta, distrageri) 
      3.2) Ora incepere 
      3.3) Ora finalizare
      3.4) Descriere
  4) De pe pagina add new pot pune o functie (formular cu date picker/hour selector) unde va fi o functie care va trimite un obiect


  CSS-ul la weekview: 
  1) Colorarea calendarului pe categorii: https://fullcalendar.io/docs/event-object - backgroundColor: "green" - proprietate in eveniment
 */
