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

// 6. O functie "prim" care primeste 1 parametru si returneaza true/false daca N este numar prim sau nu (restul impartirii la 1 si la N ==0)

function prim(nr) {
  let prim = true;
  if (nr < 2) {
    prim = false;
  } else if (nr == 2) {
    prim = true;
  }
  for (let i = 2; i <= nr / 2; i++) {
    if (nr % i == 0) {
      prim = false;
      break;
    } else prim = true;
  }
  return prim;
}

// 7. O functie "sumaPrime" care primeste 1 parametru si returneaza suma primelor N numere prime (pentru N=5 trebuie sa returneze 2+3+5+7+11=28)

function sumaPrime(numar) {
  let suma = 0;
  let j = 1;
  if (numar == 2) {
    return numar;
  } else if (numar > 2) {
    let i = 2;
    while (j <= numar) {
      if (prim(i)) {
        suma += i;
        j++;
      }
      i++;
    }
    return suma;
  }
}

// 8. O functie "invers" care primeste un parametru de tip numar si intoarce inversul acestuia (ca numar) (123 => 321)

function invers(numar) {
  let inv = 0;
  let nr = numar;
  while (nr != 0) {
    inv = inv * 10 + (nr % 10);
    nr = Math.trunc(nr / 10);
  }
  return inv;
}

// 9. O functie "produsImpare" care primeste 1 parametru si returneaza produsul primelor N numere impare pozitive (pentru N=5; returneaza 1*3*5*7*9=945)

function produsImpare(numar) {
  let produs = 1;
  let j = 1;
  let i = 1;
  while (j <= numar) {
    while (i % 2 == 0) {
      i++;
    }
    produs *= i;
    i++;
    j++;
  }
  return produs;
}

// 10. O functie "contains" care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array (rezultatul este true/false)

function contains(arr, x) {
  let contine = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      contine = true;
      break;
    }
  }
  return contine;
}

// 11. O functie "maxArray" care primeste un array si returneaza valoarea maxima (ar trebui sa functioneze si pentru numere si pentru stringuri)

function maxArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 12. O functie "sumMinMax" care primeste un array de numere si returneaza suma dintre valoare maxima si valoare minima

function sumMinMax(arr) {
  let max = maxArray(arr);
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min + max;
}

// 13. O functie "hasDuplicates" care primeste un array si returneaza daca exista duplicate intr-un array primit ca parametru (true/false)

function hasDuplicates(arr) {
  let dublicate = false;
  let j = 0;
  while (j < arr.length - 1) {
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[j] == arr[i]) {
        dublicate = true;
        break;
      }
    }
    j++;
  }
  return dublicate;
}
