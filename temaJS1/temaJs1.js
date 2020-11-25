// 1. O functie "equals" care primeste 2 parametrii si returneaza daca cei 2 parametrii sunt egali, strict

function equals(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

// 2. O functie "compare" care primeste 2 parametrii si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea

function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else {
    return 1;
  }
}

// 3. O functie "max" care primeste 2 parametrii si returneaza maximul dintre cele 2

function max(a, b) {
  if (a >= b) {
    return a;
  } else if (a < b) {
    return b;
  }
}

// 4. O functie "min" care primeste 2 parametrii si returneaza minimul dintre cele 2

function min(a, b) {
  if (a <= b) {
    return a;
  } else if (b < a) {
    return b;
  }
}

// 5. O functie "suma" care primeste 1 parametru, numar intreg si returneaza suma primelor N numere naturale pozitive (exemplu: daca N este 3, trebuie sa returneze 6)

function suma(nr) {
  let sum = 0;
  for (let i = 1; i <= nr; i++) {
    sum += i;
  }
  return sum;
}
