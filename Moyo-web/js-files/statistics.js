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

///////////////////////
// Event listeners
///////////////////////

// Every page
selectDOM.burgerMenuBtn.addEventListener("click", toggleMobileMenu);
