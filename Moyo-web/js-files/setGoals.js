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

let urlGoals =
  "https://moyo-app-7cf34-default-rtdb.europe-west1.firebasedatabase.app/goals/";

let databaseInfo = {};
let editingIndex = "";

///////////////////////
// Functii
///////////////////////

function toggleMobileMenu() {
  selectDOM.nav.classList.toggle("hidden");
}

function toggleMobileMenu() {
  selectDOM.nav.classList.toggle("hidden");
}

async function getDataFromDataBase() {
  const response = await fetch(urlGoals + ".json");
  databaseInfo = await response.json();
  if (databaseInfo === null) {
    databaseInfo = {};
  }
  drawTable();
}

async function addNewGoal() {
  let goal = selectDOM.addNewGoalInput.value;
  if (goal === "") {
    return;
  }
  const response = await fetch(urlGoals + ".json", {
    method: "post",
    body: JSON.stringify({
      goal,
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
  const response = await fetch(urlGoals + editingIndex + ".json", {
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
    const response = await fetch(urlGoals + id + ".json", {
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

///////////////////////
// Event listeners
///////////////////////

// Every page

selectDOM.burgerMenuBtn.addEventListener("click", toggleMobileMenu);

selectDOM.addNewGoalBtn.addEventListener("click", addNewGoal);
window.addEventListener("load", getDataFromDataBase);
selectDOM.cancelBtnEdit.addEventListener("click", cancel);
selectDOM.confirmBtnEdit.addEventListener("click", confirmEditOfGoal);
