// Tervituse programm
/*
const name = prompt('Mis Su nimi on?');
alert('Tere ' + name);
*/

// Vanuse arvutamine

// alert('Sinu vanus on: ' + (2025 - prompt('Sisesta oma vanus')))

/* const year = prompt('Sisesta oma sünniaasta');
const currentYear = 2025;
const age = currentYear - year;

alert('Sinu vanus on: ' + age); */

// Risküliku pindala arvutamine

/* const width = prompt('Sisesta ristküliku laius');
const height = prompt('Sisesta ristküliku kõrgus');

const area = width * height;
alert('Ristküliku pindala on: ' + area); */

/* // Temperatuuride teisendaja

// Esimene versioon
const temperatureCelsius = prompt('Palun sisesta temperatuur Celsiuse kraadides');
const temperatureFarenheit = temperatureCelsius * 9 / 5 + 32;

alert('Temperatuur Farnheiti skaalal: ' + temperatureFarenheit);

// Teine versioon
const C = prompt('Palun sisesta temperatuur Celsiuse kraadides');
const F = C * 9 / 5 + 32;

alert('Temperatuur Farnheiti skaalal: ' + F);
*/

// Tingimuslaused
/*
const color = prompt('Mis värvi on foori tuli?');

if (color=== 'roheline') {
  alert('Võid üle tee minna');
} else {
  alert('Pead veel ootama');
} */
/*
if (color === 'roheline') {
  alert('Võid edasi sõita');
} else if (color === 'kollane') {
  alert('Pead veel tükk aega ootama');
} else if (color === 'punane') {
  alert('Oota veel pisut');
} else {
  alert('Sellist värvi ei tohiks fooris olla');
}
*/

// Parooli kontrollimine

/*
const password = prompt('Palun sisesta parool');

const existingPassword = 'admin123';

if (password !== existingPassword) {
  alert('Vale parool');
} else {
  alert('Tere tulemast');
}
 */

// Vanuse kontroll
/*
const age = prompt('Sisesta oma vanus');

const ageLimit = 18;

if (age < ageLimit) {
  alert('Oled alaealine');
} else {
  alert('Oled täisealine');
} */

/* const age = Number(prompt('Sisesta oma vanus'));

alert(typeof age);
 */

// Kalkulaator
/* 
const number1 = Number(prompt('Sisesta esimene arv'));
const number2 = Number(prompt('Sisesta teine arv'));

const operator = prompt('Millist tehet soovid teha? (+, -, /, *)');

if (operator === '+') {
  alert(number1 + number2);
} else if (operator === '-') {
  alert(number1 - number2);
} else if (operator === '*') {
  alert(number1 * number2);
} else if (operator === '/') {
  alert(number1 / number2);
} else {
  alert('Seda funktsiooni kalkulaator hetkel veel ei toeta');
}
 */