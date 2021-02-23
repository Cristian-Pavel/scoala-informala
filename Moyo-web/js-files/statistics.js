///////////////////////
// DOM selection
///////////////////////

let selectDOM = {
  nav: document.querySelector('nav'),
  burgerMenuBtn: document.querySelector('.burgerMenu'),
};

///////////////////////
// Functii
///////////////////////

// Every page

function toggleMobileMenu() {
  selectDOM.nav.classList.toggle('hidden');
}

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
  // console.log(databaseInfo);
  for (let [id, activityProp] of Object.entries(databaseInfo)) {
    if (activityProp === null) {
      continue;
    }
    activityCateg = activityProp.category;
    activityArr.push({
      groupId: activityProp.category,
      title: activityProp.description,
      start: activityProp.startTime,
      end: activityProp.endTime,
      description: activityProp.selectedGoal,
      backgroundColor: getActivityColor(activityCateg),
      textColor: 'black',
    });
  }
  // console.log(activityArr);
  calculateActivitiesTime(activityArr);
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

function calculateActivitiesTime(activityArr) {
  let productiveTime, maintananceTime, relaxTime, distractionsTime;
  productiveTime = 0;
  maintananceTime = 0;
  relaxTime = 0;
  distractionsTime = 0;
  for (i in activityArr) {
    if (activityArr[i].groupId === 'Productive') {
      let startHour = Date.parse(activityArr[i].start); // transform din string in numar de milisecunde
      let endHour = Date.parse(activityArr[i].end);
      productiveTime += Math.abs(endHour - startHour) / 36e5; // scadem datele si le impartim la 36e5 care inseamna 60s * 60 min * 1000 milisecunde => formatul in ore
    } else if (activityArr[i].groupId === 'Maintanance') {
      let startHour = Date.parse(activityArr[i].start);
      let endHour = Date.parse(activityArr[i].end);
      maintananceTime += Math.abs(endHour - startHour) / 36e5;
    } else if (activityArr[i].groupId === 'Relaxation') {
      let startHour = Date.parse(activityArr[i].start);
      let endHour = Date.parse(activityArr[i].end);
      relaxTime += Math.abs(endHour - startHour) / 36e5;
    } else if (activityArr[i].groupId === 'Distractions') {
      let startHour = Date.parse(activityArr[i].start);
      let endHour = Date.parse(activityArr[i].end);
      distractionsTime += Math.abs(endHour - startHour) / 36e5;
    }
  }
  // console.log(
  //   `Productive time is: ${productiveTime}, Maintenance time is: ${maintananceTime}, Relaxation time is: ${relaxTime} and Distractions time is: ${distractionsTime}`
  // );
  calcPercetagesOfCategories(
    productiveTime,
    maintananceTime,
    relaxTime,
    distractionsTime
  );
}

function calcPercetagesOfCategories(
  productiveTime,
  maintananceTime,
  relaxTime,
  distractionsTime
) {
  let suma = productiveTime + maintananceTime + relaxTime + distractionsTime;
  let prodProcent, mainteProcent, relaxProcent, distractProcent;
  prodProcent = (productiveTime * 100) / suma;
  mainteProcent = (maintananceTime * 100) / suma;
  relaxProcent = (relaxTime * 100) / suma;
  distractProcent = (distractionsTime * 100) / suma;
  console.log(
    `Timpul in procente este - Productiv - ${prodProcent}%, Intretinere - ${maintananceTime}%, Relaxare - ${relaxProcent}% si Distrageri - ${distractProcent}%`
  );
  constructDataPoints(
    prodProcent,
    mainteProcent,
    relaxProcent,
    distractionsTime
  );
}

function constructDataPoints(
  prodProcent,
  mainteProcent,
  relaxProcent,
  distractionsTime
) {
  let dataPointsLocal = [];
  dataPointsLocal[0] = { y: prodProcent, label: 'Productive', color: 'green' };
  dataPointsLocal[1] = {
    y: mainteProcent,
    label: 'Maintenance',
    color: 'yellow',
  };
  dataPointsLocal[2] = { y: relaxProcent, label: 'Relaxation', color: 'blue' };
  dataPointsLocal[3] = {
    y: distractionsTime,
    label: 'Distractions',
    color: 'red',
  };
  // console.log(dataPointsLocal);
  drawChart(dataPointsLocal);
}

function drawChart(dataPointsLocal) {
  var chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    title: {
      text: 'Your time in percentages:',
    },
    data: [
      {
        type: 'pie',
        startAngle: 240,
        yValueFormatString: '##0.00"%"',
        indexLabel: '{label} {y}',
        dataPoints: dataPointsLocal,
      },
    ],
  });
  chart.render();
}

///////////////////////
// Event listeners
///////////////////////

// Every page
selectDOM.burgerMenuBtn.addEventListener('click', toggleMobileMenu);
window.addEventListener('load', getDataFromDataBase);

/**
 
 TODO:

 1) Cream 4 variabile care sa stocheze valorile pentru cele 4 categorii de activitati ✅
 2) Parcurgem array-ul de activitati din Activity Arr ✅
 3) Identificam ce categorie de activitati gaseste si adaugam (+=) la diferenta dintre start si stop 
  3.1 - afla cum scazi datele >> https://stackoverflow.com/questions/19225414/how-to-get-the-hours-difference-between-two-date-objects/19225463 ✅
 4) Cumva toate trebuie sa dea 100% ✅
      X + Y + Z + Q = suma ... 100%
      xProcent = x * 100 / suma
      yProcent = y * 100 / suma
      zProcent = z * 100 / suma
      qProcent = q * 100 / suma 
 5) Transmit datele in functia drawChart >> dataPoints ✅



 */
