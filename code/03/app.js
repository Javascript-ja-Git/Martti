// Väljasta arvud 5 kuni 15
// While - tsükkel
/* let i = 5;
while (i <= 15) {
  console.log(i);
  i++;
}

console.log(i); */

// For - tsükkel

/* for (let i = 1; i <= 10; i++) {
  console.log('Hello');
} */

// console.log(i);

/* for (let i = 0; i > 0; i++) {
  console.log('hello');
}

let i = 6;
do {
  console.log(i);
  i++;
} while (i <= 5) */

// Programm, mis küsib kasutajalt arvu ja siis väljastab arvud nullist kuni sisestatud arvuni (ka)
/*
const count = Number(prompt('Palun sisesta arv:'));

let i = 0;
let sum = 0;

while (i <= count) {
  if (i !== 3) {
    sum = sum + i;
  }
  if (sum > 10) {
    console.log(i, sum);
  } else {
    console.log(i);
  }
  i++;
}
 */

/* // Kivi - paber - käärid

const player1 = prompt('Mängija 1, vali kivi - paber - käärid');
const player2 = prompt('Mängija 2, vali kivi - paber - käärid');

if (player1 === player2) {
  alert('Viik');
} else if (player1 === 'kivi' && player2 === 'käärid') {
  alert('Mängija 1 võitis');
} else if (player1 === 'paber' && player2 === 'kivi') {
  alert('Mängija 1 võitis');
} else if (player1 === 'käärid' && player2 === 'paber') {
  alert('Mängija 1 võitis');
} else {
  alert('Mängija 2 võitis');
}
 */