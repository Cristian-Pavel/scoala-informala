// 1. O functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv

function getDigits(sir) {
  let cifre = "";
  for (let i = 0; i < sir.length; i++) {
    switch (sir[i]) {
      case "0":
        cifre += sir[i];
        break;
      case "1":
        cifre += sir[i];
        break;
      case "2":
        cifre += sir[i];
        break;
      case "3":
        cifre += sir[i];
        break;
      case "4":
        cifre += sir[i];
        break;
      case "5":
        cifre += sir[i];
        break;
      case "6":
        cifre += sir[i];
        break;
      case "7":
        cifre += sir[i];
        break;
      case "8":
        cifre += sir[i];
        break;
      case "9":
        cifre += sir[i];
        break;
    }
  }
  return cifre;
}

// 2. O functie "getLetters" care primeste un sir de caractere si returneaza doar literele din sirul respectiv

function getLetters(sir) {
  let litere = "";
  for (let i = 0; i < sir.length; i++) {
    if (/[a-zA-Z]/.test(sir[i])) {
      litere += sir[i];
    }
  }
  return litere;
}

// 3. O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere(daca exista)

function getFirst5Letters(sir) {
  let first5 = "";
  let j = 0;
  for (let i = 0; i < sir.length; i++) {
    if (/[a-zA-Z]/.test(sir[i]) && j < 5) {
      first5 += sir[i];
      j++;
    }
  }
  return first5;
}

// 4. O functie "concatenate" care primeste o lista de siruri de caractere si returneaza sirurile concatenate

function concatenate(list) {
  let siruri = "";
  for (let i = 0; i < list.length; i++) {
    siruri += list[i];
  }
  return siruri;
}

// 5. O functie "getAllDigits" care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile

function getAllDigits(list) {
  let cifre = "";
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if (/[0-9]/.test(list[i][j])) {
        cifre += list[i][j];
      }
    }
  }
  return cifre;
}

// 6. O functie "invertAllStrings" care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate

function invertAllStrings(list) {
  let invers = [];
  for (let i = 0; i < list.length; i++) {
    let miniStr = "";
    for (let j = list[i].length - 1; j >= 0; j--) {
      miniStr += list[i][j];
    }
    invers[i] = miniStr;
  }
  return invers;
}

// 7. Calculeaza factorialul unui numar ("factorial")

function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}

// 8. Calculeaza cel mai mare divizor comun al 2 numere ("cmmdc")
// Conf algoritmului lui Euclid, scad pe numarul mic din cel mare pana ajung egale

function cmmdc(a, b) {
  let nrA = a;
  let nrB = b;
  while (nrA !== nrB) {
    if (nrA > nrB) nrA -= nrB;
    else nrB -= nrA;
  }
  return nrA;
}

// 9. Calculeaza cel mai mic multiplu comun al 2 numere ("cmmmc")
// Avand in vedere ca produsul a 2 nr naturale nenule = cmmdc * cmmmc => cmmc = produs / cmmdc

function cmmmc(a, b) {
  let nrA = a;
  let nrB = b;
  let rezultat = (nrA * nrB) / cmmdc(a, b);
  return rezultat;
}
