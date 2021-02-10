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
