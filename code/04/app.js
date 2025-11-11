// const weekdays = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev", "pühapäev", "puhkepäev", "pesupäev"];

/* console.log(weekdays[0]);
console.log(weekdays[1]);
console.log(weekdays[2]);
console.log(weekdays[3]);
console.log(weekdays[4]);
console.log(weekdays[5]);
console.log(weekdays[6]); */

/* for (let i = 0; i < weekdays.length; i++) {
  console.log(weekdays[i]);
} */

// console.log(weekdays.length);

// const temperatures = [10, 12, 14, 16, 10, 12, 13, 14, 13];

/* for (let i = 1; i <= 5; i++) {
  const temp = Number(prompt('Mitu kraadi on hetkel temperatuur?'));
  temperatures.push(temp);
} */

/* let sum = 0;

for (let i = 0; i < temperatures.length; i++) {
  sum = sum + temperatures[i];
  console.log(sum);
}

const average = sum / temperatures.length;

console.log(average);
console.log(temperatures[temperatures.length - 1]); */

// Kirjuta JavaScripti kood, mis loob massiivi, mis sisaldab 10 arvu
// kuva konsooli massiivi iga element, üksteise järel.

// const numbers = [12, 45, 23, 67, 34, 90, 45, 67, 35, 17];

/* for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} */

/* for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(i + 1, numbers[i]);
} */


// Väljast kõik hinnad koos käibemaksuga

/* const prices = [12, 45, 23, 67, 34, 90, 45, 67, 35, 17];

for (let i = 0; i < prices.length; i = i + 2) {
  console.log(prices[i] * 1.24);
} */

/* let k = 'kolmapaev';

k = 'kolmapäev';

console.log(k); */
/*
const k = 'kolmapäev';
k = 'neljapäev'; */


/* const weekdays = ["esmaspäev", "teisipäev", "kolmapaev", "neljapäev", "reede", "laupäev", "pühapäev"];

weekdays = []; */

// ----
// Math objekt

// console.log(Math.PI);

/* const sales = [10, 5, 15, 20];

const randomNumber = Math.ceil(Math.random() * 4) - 1;

console.log(sales[randomNumber]); */

// Funktsioon, mis tagastab arvud vahemikus 1 - 6
/* 
function dice(number) {
  const randomNumber = Math.ceil(Math.random() * number);
  return randomNumber;
}

// const maxNumber = Number(prompt('Palun sisesta maksimaalne juhuarv'));

// alert(dice(6));

const names = ['Jaan', 'Juta', 'Kalle', 'Malle', 'Juhan', 'Tiina'];

const randomNumber = dice(names.length);

console.log(names[randomNumber - 1]); */

/* const names = ['Mati', 'Kati', 'Kalle', 'Malle'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

 */

function logElements(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  return array.length;
}

const names = ['Mati', 'Kati', 'Kalle', 'Malle'];
const numbers = [1, 2, 5, 7, 9, 0];

logElements(names);
const result = logElements(numbers);
console.log(result);
