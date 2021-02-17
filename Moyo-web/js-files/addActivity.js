///////////////////////
// DOM selection
///////////////////////

let selectDOM = {
  nav: document.querySelector("nav"),
  burgerMenuBtn: document.querySelector(".burgerMenu"),
  addActivityForm: document.querySelector(".addActivityForm"),
  addActivityBtn: document.getElementById("addActivityBtn"),
  startTime: document.getElementById("startTime"),
  endTime: document.getElementById("endTime"),
  activityDescription: document.getElementById("activityDescription"),
  // activityCategory: document.querySelector('input[name="categories"]:checked'),
};

////////////////////////////
//// Variable initializations
//////////////////////////////

let urlActivities =
  "https://moyo-app-7cf34-default-rtdb.europe-west1.firebasedatabase.app/activities/";

let databaseInfo = {};
let activity = {};

///////////////////////
// Functii
///////////////////////

// Every page

function toggleMobileMenu() {
  selectDOM.nav.classList.toggle("hidden");
}

async function getDataFromDataBase() {
  const response = await fetch(urlActivities + ".json");
  databaseInfo = await response.json();
  if (databaseInfo === null) {
    databaseInfo = {};
  }
}

async function addActivity() {
  readAddActivitiesForm();
  if (activity) {
    const response = await fetch(urlActivities + ".json", {
      method: "post",
      body: JSON.stringify(activity),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
    await getDataFromDataBase();
  }
}

function readAddActivitiesForm() {
  let activityDescription = selectDOM.activityDescription.value;
  let category = document.querySelector('input[name="categories"]:checked')
    .value;
  let selectedGoal = document.querySelector("#goalsList");
  selectedGoal = selectedGoal.options[selectedGoal.selectedIndex].text;
  let startTime = selectDOM.startTime.value;
  let endTime = selectDOM.endTime.value;

  activity.description = activityDescription;
  activity.category = category;
  activity.selectedGoal = selectedGoal;
  activity.startTime = startTime;
  activity.endTime = endTime;
  selectDOM.addActivityForm.reset();
  return activity;
}

///////////////////////
// Event listeners
///////////////////////

// Every page
selectDOM.burgerMenuBtn.addEventListener("click", toggleMobileMenu);

selectDOM.addActivityBtn.addEventListener("click", addActivity);

/***
 Pasi:
1) Cand dam click pe add activity (add event listener)
2) Intregistram datele intr-un obiect (activityRecord) si le trimitem catre baza de date (fetch functions)


 */
