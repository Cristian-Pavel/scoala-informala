///////////////////////
// DOM selection
///////////////////////

let selectDOM = {
  nav: document.querySelector('nav'),
  burgerMenuBtn: document.querySelector('.burgerMenu'),
};

////////////////////////////
//// Variable initializations
//////////////////////////////

let urlActivities =
  'https://moyo-app-7cf34-default-rtdb.europe-west1.firebasedatabase.app/activities/';

let databaseInfo = {};
let activityArr = [];

///////////////////////
// Functii
///////////////////////

async function getDataFromDataBase() {
  const response = await fetch(urlActivities + '.json');
  databaseInfo = await response.json();
  if (databaseInfo === null) {
    databaseInfo = {};
    return;
  }
  console.log(databaseInfo);
  for (let [id, activityProp] of Object.entries(databaseInfo)) {
    if (activityProp === null) {
      continue;
    }
    activityCateg = activityProp.category;
    let descriptionWithGoal;
    // vreau sa afiseze obiectivul la care se lucreaza, doar cand exista
    if (activityProp.selectedGoal !== 'None') {
      descriptionWithGoal = `${activityProp.description}, was done for goal >>         
      ${activityProp.selectedGoal}`;
    } else {
      descriptionWithGoal = activityProp.description;
    }
    activityArr.push({
      groupId: activityProp.category,
      title: descriptionWithGoal,
      start: activityProp.startTime,
      end: activityProp.endTime,
      description: activityProp.selectedGoal,
      backgroundColor: getActivityColor(activityCateg),
      textColor: 'black',
      id: id,
    });
  }
  console.log(activityArr);
  drawCalendar(activityArr);
}

function getActivityColor(activityCateg) {
  if (activityCateg === 'Productive') {
    return 'green';
  } else if (activityCateg === 'Maintanance') {
    return 'yellow';
  } else if (activityCateg === 'Relaxation') {
    return 'blue';
  } else if (activityCateg === 'Distractions') {
    return 'red';
  }
}

function drawCalendar(activityArr) {
  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridDay',
    selectable: true,
    placeholder: true,
    editable: true,
    nowIndicator: true,
    height: '80vh',
    headerToolbar: {
      left: 'prev,next,today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: activityArr,
    dateClick: (e) => {
      console.log(e.dateStr);
      bringMeToAddPage(e);
    },
    eventClick: (e) => {
      let databaseId = e.event._def.publicId; // identificat prin console.log(e), sa vedem ce returneaza
      deleteActivity(databaseId);
    },
  });

  calendar.render();
}

// TODO: resolve the functionality and activate startDateFromWeekView
function bringMeToAddPage(e) {
  console.log(e);
  if (confirm(`Are you sure you want to add a new activity?`)) {
    // startDateFromWeekview(e.dateStr);
    window.location.href = './addActivity.html';
  }
}

async function deleteActivity(idx) {
  if (confirm('Are you sure you want to detele the selected activity?')) {
    const response = await fetch(urlActivities + idx + '.json', {
      method: 'delete',
    });
    await response.json();
    await getDataFromDataBase();
    location.reload();
  }
}

// Every page

function toggleMobileMenu() {
  selectDOM.nav.classList.toggle('hidden');
}

///////////////////////
// Event listeners
///////////////////////

// Every page
selectDOM.burgerMenuBtn.addEventListener('click', toggleMobileMenu);
window.addEventListener('load', getDataFromDataBase);

/**
 TODO: 

 1) In prima etapa, voi testa mecanismul de populare a weekview din baza de date, doar cu informatii despre activitati
  1.1 Aducem obiectele cu activitatile din baza de date ✅
  1.2 Le transmitem catre functia drawCalendar -> obiectul calendar -> array-ul de obiecte events.✅
  1.3 In functie de categoria de activitate (groupId) dam si culoarea - verde, rosu, albastru, galben ✅
  1.3 Add event de double click

 2) In a doua etapa, voi integra popularea paginii weekview atat cu informatii despre activitati cat si despre obective ✅


 */
