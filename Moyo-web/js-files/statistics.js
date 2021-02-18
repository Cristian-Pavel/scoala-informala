///////////////////////
// DOM selection
///////////////////////

let selectDOM = {
  nav: document.querySelector("nav"),
  burgerMenuBtn: document.querySelector(".burgerMenu"),
};

///////////////////////
// Functii
///////////////////////

// Every page

function toggleMobileMenu() {
  selectDOM.nav.classList.toggle("hidden");
}

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Your productivity levels (Beta)",
    },
    data: [
      {
        type: "pie",
        startAngle: 240,
        yValueFormatString: '##0.00"%"',
        indexLabel: "{label} {y}",
        dataPoints: [
          { y: 20, label: "Maintenance" },
          { y: 5, label: "Distractions" },
          { y: 60, label: "Productive" },
          { y: 15, label: "Relaxation" },
        ],
      },
    ],
  });
  chart.render();
};

///////////////////////
// Event listeners
///////////////////////

// Every page
selectDOM.burgerMenuBtn.addEventListener("click", toggleMobileMenu);
