// DOM selection

let selectDOM = {
  nav: document.querySelector("nav"),
  burgerMenuBtn: document.querySelector(".burgerMenu"),
};

// Functii

let functii = {
  toggleMobileMenu: function () {
    selectDOM.nav.classList.toggle("hidden");
  },
};

// Event listeners

selectDOM.burgerMenuBtn.addEventListener("click", functii.toggleMobileMenu);

/**
 * //////////////// Set goals page
 * TODO:
  1) Functie draw de generare a unui tabel - butoane edit si delete
  2) Formular input de Ad new goal
 

 */
