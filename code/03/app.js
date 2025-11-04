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

// Funktsioonid

/* function add(a, b) {
  const sum = a + b;
  return sum;
}

// const result = add(2, 3);
console.log(add(2, 3));
console.log(add(5, 3));
console.log(add(200, 3)); */


/* function greeting(name) {
  const message = 'Tere, ' + name;
  return message;
} */

// console.log(greeting('Martti')); // -> 'Tere, Martti'
// Küsi kasutajalt nimi ja kasutades funktsiooni, kuva tervitus kasutajale

/* const username = prompt('Sisesta oma nimi');
const message = greeting(username);
alert(message);
 */

/* function triangleArea(base, height) {
  if (base <= 0) {
    return 'Sellist kolmnurka ei eksisteeri';
  } else if (height <= 0) {
    return 'Sellist kolmnurka ei eksisteeri';
  }
  const area = (base * height) / 2;
  return area;
} */

/* function triangleArea(base, height) {
  if (base <= 0 || height <= 0) {
    return 'Sellist kolmnurka ei eksisteeri';
  }
  const area = (base * height) / 2;
  return area;
}

console.log(triangleArea(5, 10));
console.log(triangleArea(8, 4));
console.log(triangleArea(-8, 4));
console.log(triangleArea(8, -4));
 */

/* function greeting(name) {
  const message = 'Tere, ' + name;
  console.log(message);
  return;
}

const result = greeting('Martti');

console.log(result);
 */

// --- Neljanda loengu algus

/* for (let i = 0; i < 10; i = i + 2) {
  console.log(i);
} */

/* let i = 0;

while (i < 10) {
  i = i + 2;
  console.log(i);
} */

/* let i = 0;

do {
  console.log(i);
  i = i + 2;
} while (i < 10); */

function divide(a, b) {
  if (b === 0) {
    return 'Nulliga ei saa jagada';
  }
  const result = a / b;
  return result;
}

// const result = divide(4, 2);

console.log(divide(4, 2));
console.log(divide(4, 0));
console.log(divide(10, 0));
console.log(divide(4, 3));
console.log(divide(823434, 3434));