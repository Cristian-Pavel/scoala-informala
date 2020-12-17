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

// 10. Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori")

function divizori(n) {
  let nr = n;
  let listaDiv = [];
  for (let i = 2; i < n; i++) {
    if (nr % i === 0) {
      listaDiv.push(i);
    }
  }
  return listaDiv;
}

// 11. O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom")

function palindrom(n) {
  let nr = n;
  let palind = 0;
  let rest = 0;
  while (nr !== 0) {
    rest = nr % 10;
    palind = palind * 10 + rest;
    nr = (nr - rest) / 10;
  }
  if (palind === n) return true;
  else return false;
}

// 12. O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort")

function sort(sir) {
  let sirPare = [];
  let j = 0;
  for (let i = 0; i < sir.length; i++) {
    if (sir[i] % 2 === 0) {
      sirPare[j] = sir[i];
      j++;
    }
  }
  let temporar;
  for (let i = 0; i < j; i++) {
    for (let k = i + 1; k < j; k++) {
      if (sirPare[i] > sirPare[k]) {
        temporar = sirPare[i];
        sirPare[i] = sirPare[k];
        sirPare[k] = temporar;
      }
    }
  }
  return sirPare;
}

// 13. O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc")

function sortAscDesc(arr) {
  let sirSortPare = sort(arr);
  let sirSortImpare = sortDesc(arr);
  let sirNr = sirSortPare;
  let j = 0;
  for (let i = sirSortPare.length; i < arr.length; i++) {
    sirNr[i] = sirSortImpare[j];
    j++;
  }

  return sirNr;
}
function sortDesc(sir) {
  let sirImpare = [];
  let j = 0;
  for (let i = 0; i < sir.length; i++) {
    if (sir[i] % 2 !== 0) {
      sirImpare[j] = sir[i];
      j++;
    }
  }
  let temporar;
  for (let i = 0; i < j; i++) {
    for (let k = i + 1; k < j; k++) {
      if (sirImpare[i] < sirImpare[k]) {
        temporar = sirImpare[i];
        sirImpare[i] = sirImpare[k];
        sirImpare[k] = temporar;
      }
    }
  }
  return sirImpare;
}

// 14. O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch")

function binarySearch(arr, nr) {
  let arrOrdonat = ordonare(arr);
  let mijloc;
  let inceput = 0;
  let sfarsit = arrOrdonat.length - 1;
  while (inceput <= sfarsit) {
    mijloc = Math.trunc((inceput + sfarsit) / 2);

    if (arrOrdonat[mijloc] === nr) {
      return true;
    } else if (arrOrdonat[mijloc] < nr) {
      inceput = mijloc + 1;
    } else {
      sfarsit = mijloc - 1;
    }
  }
  return false;
}

function ordonare(arr) {
  // am facut si acesta functie de ordonare in cazul in care se schimba datele de input si apar array-uri care nu sunt ordonate crescator
  let sir = arr;
  let aux;
  for (let i = 0; i < sir.length - 1; i++) {
    for (let j = i + 1; j < sir.length; j++)
      if (sir[i] > sir[j]) {
        aux = sir[i];
        sir[i] = sir[j];
        sir[j] = aux;
      }
  }
  return sir;
}

// 15. O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch")

// function countBinarySearch(arr, nr) { // Varianta care functioneaza dar nu e o apelare recursiva a functiei, deci nu respecta cerinta
//   let nrApelari = 0;
//   let arrOrdonat = ordonare(arr);
//   let mijloc;
//   let inceput = 0;
//   let sfarsit = arrOrdonat.length - 1;
//   while (inceput <= sfarsit) {
//     mijloc = Math.trunc((inceput + sfarsit) / 2);
//     nrApelari++;
//     if (arrOrdonat[mijloc] === nr) {
//       return nrApelari;
//     } else if (arrOrdonat[mijloc] < nr) {
//       inceput = mijloc + 1;
//     } else {
//       sfarsit = mijloc - 1;
//     }
//   }
//   return nrApelari;
// }

let nrApelari = 1;

function countBinarySearch(arr, nr) {
  ordonare(arr);
  let mijloc;
  if (arr.length % 2 === 0) {
    mijloc = Math.floor(arr.length / 2) - 1;
  } else {
    mijloc = Math.floor(arr.length / 2);
  }
  if (arr.length === 1 && arr[0] !== nr) {
    // in cazul in care nu se gaseste in sir
    console.log(nrApelari);
    return nrApelari;
  } else if (nr === arr[mijloc]) {
    // atunci cand l-a gasit
    console.log(nrApelari);
    return nrApelari;
  } else if (nr < arr[mijloc]) {
    nrApelari++;
    return countBinarySearch(arr.slice(0, mijloc), nr);
  } else if (nr > arr[mijloc]) {
    nrApelari++;
    return countBinarySearch(arr.slice(mijloc + 1), nr);
  }
}
