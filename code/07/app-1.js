// Otsime lehelt üles vastava nupu
const testButton = document.getElementById('test-button');

function buttonPress() {
  console.log('Nuppu vajutati');
}


testButton.addEventListener('click', buttonPress);

// Otsime lehelt üles vastava nupu
const testButton1 = document.getElementById('test-button-1');

testButton1.addEventListener('click', buttonPress);

// Otsime lehelt üles konteineri, millele hakkame elemente lisama
const container = document.getElementById('container');

// Tekitame uue paragrahvi elemendi
const newParagraph = document.createElement('p');
// Lisame paragrahvile sisu
newParagraph.innerText = 'Siin on uus sisu, mis on tekitatud kasutades JavaScripti';
// Lisame loodud paragrahvi alamelemendina konteinerisse
container.appendChild(newParagraph);