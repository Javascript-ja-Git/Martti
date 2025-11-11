/* const pin = prompt('Sisesta PIN: ');
const pinAsNumber = Number(pin);

if (pinAsNumber) {
  alert('Sisend on korrektne');
} else {
  alert('Sisend ei ole korrektne');
}

console.log(pinAsNumber);
 */

// Kirjuta programm, mis küsib kasutajalt kasutajanime ja parooli
// Vastavalt sisestatud andmetele peab kasutaja saama tagasisidet:
// Kui ei sisestanud vastavat väärtust (kasutajanimi või parool)
// Kas sisestatud kasutajanimi ja parool kokku on õiged (kas saab ligipääsu?)
/*
const username = prompt('Sisesta kasutajanimi: ');
if (username) {
  if (username.toLowerCase() === 'admin') {
    const password = prompt('Sisesta parool: ');
    if (password) {
      if (password === '1234') {
        alert('Tere tulemast!');
      } else {
        alert('Sisestatud parool on vale');
      }
    } else {
      alert('Sa ei sisestanud parooli');
    }
  } else {
    alert('Sul ei ole süsteemile ligipääsuõigust');
  }
} else {
  alert('Sa ei sisestanud korrektset kasutajanime');
}
 */

// Kirjuta programm, mis kontrollib,
// kas kasutaja sisestatud väärtus jääb vahemikku 1 - 100

// const number = Number(prompt('Sisesta arv vahemikus 1 - 100'));
// OR
/* if (number < 1 || number > 100) {
  alert('Sisestatud arv ei ole vahemikus 1 -100');
} else {
  alert('Sisestatud arv on vahemikus 1 - 100');
} */
// AND
/*
function checkIfInRange(number, min, max) {
  if (number >= min && number <= max) {
    return true;
  } else {
    return false;
  }
}

const number = Number(prompt('Sisesta arv'));

console.log(checkIfInRange(number, 1, 100));
console.log(checkIfInRange(number, 20, 30));
 */

// --- Tegevused stringidega

/* const firstName = prompt('Sisesta oma eesnimi');
// console.log(firstName.length);
for (let i = 0; i < firstName.length; i++) {
  console.log(firstName[i]);
}

console.log(firstName)
 */

// const carNumber = prompt('Sisesta oma auto number:');

/* alert(carNumber.toUpperCase());
alert(carNumber); */

/* if (carNumber.toLocaleUpperCase().includes('EKL')) {
  alert('Läbipääs lubatud');
} else {
  alert('Läbipääs keelatud');
}
 */

/* const allowedCarNumbers = ['123EKL', '234EKL', '123ABC', '234BCD'];

if (allowedCarNumbers.includes(carNumber.toUpperCase())) {
  alert('Läbipääs lubatud');
} else {
  alert('Läbipääs keelatud');
}
 */

/* function checkIfEmail(email) {
  if (!email.includes('@') || !email.includes('.')) {
    return false;
  }
  return true;
}

const email = prompt('Sisesta oma e-mail:');

console.log(checkIfEmail(email));
 */

/* const numbers = [1, 4, 5, 7, 8, 2, 9];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i] + ' on paarisarv');
  } else {
    console.log(numbers[i] + ' on paaritu arv');
  }
} */

// Küsi kasutajalt tema nimi ja kuva konsooli tähed ükshaaval nii,
// et iga teine täht on suurtäht (paarituarvulised indeksid)
/* 
function capitalizeEveryOtherLetter(word) {
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) { // Kui indeks on paarisarv (aga jrknr on paaritu)
      console.log(word[i].toLowerCase());
    } else { // Kui indeks on paaritu (aga jrknr on paaris)
      console.log(word[i].toUpperCase());
    }
  }
}

const firstName = prompt('Sisesta oma eesnimi: ');

capitalizeEveryOtherLetter(firstName);
 */

/* function capitalizeRandom(word) {
  for (let i = 0; i < word.length; i++) {
    if (Math.random() < 0.5) { // Kui indeks on paarisarv (aga jrknr on paaritu)
      console.log(word[i].toLowerCase());
    } else { // Kui indeks on paaritu (aga jrknr on paaris)
      console.log(word[i].toUpperCase());
    }
  }
}

const firstName = prompt('Sisesta oma eesnimi: ');

capitalizeRandom(firstName); */

function randomNumber() {
  const randomNumber = Math.floor(Math.random() * 6); // Arvud vahemikus 0 - 5
  return randomNumber;
}

const counter = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < 6; i++) {
  counter[randomNumber()] += 1;
}

console.log(counter);