// Tworzymy kontener
const container = document.createElement('div');
container.style.position = 'absolute';
container.style.top = '100px';
container.style.right = '0px';
container.style.backgroundColor = 'rgba(0,0,0,0.9)';
container.style.color = 'white';
container.style.padding = '10px 15px';
container.style.borderRadius = '5px';
container.style.fontFamily = 'Arial, sans-serif';
container.style.fontSize = '3rem';
container.style.height = '230px';
container.style.zIndex = '9999';
container.style.textAlign = 'center';
container.style.width= "34rem";

// Tworzymy ustawienia
const settings = document.createElement('div');
settings.style.position = 'absolute';
settings.style.top = '100px';
settings.style.right = '0px';
settings.style.backgroundColor = 'rgba(0,0,0,1)';
settings.style.color = 'white';
settings.style.padding = '10px 15px';
settings.style.borderRadius = '5px';
settings.style.fontFamily = 'Arial, sans-serif';
settings.style.fontSize = '3rem';
settings.style.height = '230px';
settings.style.zIndex = '99999';
settings.style.textAlign = 'center';
settings.style.width= "34rem";
settings.style.display= "none";
document.body.appendChild(settings);

// Tworzymy przycisk do włączania ustawień
const buttonSettings = document.createElement('div');
buttonSettings.style.position = 'absolute';
buttonSettings.style.top = '100px';
buttonSettings.style.right = '0px';
buttonSettings.style.zIndex = '999999';
buttonSettings.style.backgroundColor = 'rgba(255, 255, 255, 1)';
buttonSettings.style.color = 'black';
buttonSettings.style.height = '35px';
buttonSettings.style.width = '35px';
buttonSettings.style.fontSize = '25px';
buttonSettings.style.display = 'flex';
buttonSettings.style.alignItems = 'center';
buttonSettings.style.justifyContent = 'center';  
buttonSettings.textContent = '⚙';
buttonSettings.style.cursor = 'pointer';
document.body.appendChild(buttonSettings);

// Obsługa przycisku settings
function settingsbutton(){
    settings.style.display = (settings.style.display === 'none') ? 'block' : 'none';
};

buttonSettings.addEventListener('click', settingsbutton);

// Obsługa ustawień
function createSection(titleText, inputType = 'text') {
    const section = document.createElement('div');
    section.style.flex = '1'; // każda sekcja zajmuje równą część
    section.style.display = 'flex';
    section.style.height= "76px"
    section.style.flexDirection = 'column';
    section.style.justifyContent = 'center';
    section.style.alignItems = 'center';
    section.style.borderBottom = '1px solid rgba(255,255,255,0.3)';

    const title = document.createElement('div');
    title.textContent = titleText;
    title.style.marginBottom = '10px';
    title.style.fontSize = '1rem';
    section.appendChild(title);

    let input;
    if (inputType === 'button') {
        input = document.createElement('button');
        input.textContent = 'Kliknij';
    } else {
        input = document.createElement('input');
        input.type = inputType; // 'text', 'number', 'range' itp.
        input.style.width = '80%';
    }
    section.appendChild(input);

    return section;
}

// Tworzymy trzy sekcje
const nazwaSettings = createSection('Nazwa', 'text');
const timerSettings = createSection('Timer', 'number');
const volumeSettings = createSection('Głośność', 'range');

volumeSettings.querySelector('input').min = 0;
volumeSettings.querySelector('input').max = 1;
volumeSettings.querySelector('input').step = 0.01;

// Dodajemy sekcje do kontenera
settings.appendChild(nazwaSettings);
settings.appendChild(timerSettings);
settings.appendChild(volumeSettings);





// Dzwięk dla tiemera
const sound = new Audio('https://github.com/Aurelia-Mika/Twitch-Timer/raw/refs/heads/main/ring.mp3');

// Tworzymy Nazwa dla timera
const nazwa = document.createElement('div');
nazwa.textContent = '!Fish';
container.appendChild(nazwa);
nazwa.style.color = 'green';

// Tworzymy wyświetlacz timera
const timerDisplay = document.createElement('div');
timerDisplay.textContent = '90';
container.appendChild(timerDisplay);
timerDisplay.style.height = '112px';
timerDisplay.style.display = 'flex';
timerDisplay.style.justifyContent = 'center';
timerDisplay.style.alignItems = 'center';

// Tworzymy przycisk reset
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.style.marginTop = '5px';
resetBtn.style.padding = '5px 10px';
resetBtn.style.border = 'none';
resetBtn.style.borderRadius = '3px';
resetBtn.style.cursor = 'pointer';
container.appendChild(resetBtn);

// Dodajemy kontener do body
document.body.appendChild(container);

let timerStart = 90;
let timerValue;
let timerInterval;

function startTimer() {
  clearInterval(timerInterval);
  timerDisplay.style.color = 'white';
  timerDisplay.style.fontSize = '3rem';
  timerValue = timerStart;
  timerDisplay.textContent = timerValue;

  timerInterval = setInterval(() => {
    timerValue--;
    timerDisplay.textContent = timerValue;
    if (timerValue <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent= "TERAZ"
      timerDisplay.style.fontSize = '8rem';
      timerDisplay.style.color = 'red';
      sound.play();
    }
  }, 1000);
}

// Obsługa przycisku Reset
resetBtn.addEventListener('click', startTimer);

// Start timera od razu
startTimer();

// hover przycisku
resetBtn.addEventListener('mouseenter', () => {
    resetBtn.style.backgroundColor = 'white';
    resetBtn.style.color = 'black';
});

resetBtn.addEventListener('mouseleave', () => {
    resetBtn.style.backgroundColor = 'rgba(0,0,0,0.7)';
    resetBtn.style.color = 'white';
});
 
// active przycisku
resetBtn.addEventListener('mousedown', () => {
    resetBtn.style.backgroundColor = 'grey';
});

resetBtn.addEventListener('mouseup', () => {
    resetBtn.style.backgroundColor = 'white'; // albo tło hover, jeśli nadal jest hover
});





// Zmiana Ustawień

// Nazwa
const nazwaInput = nazwaSettings.querySelector('input');
nazwaInput.addEventListener('input', (e) => {
    const nowaNazwa = e.target.value;
    nazwa.textContent = nowaNazwa;
});

// Timer
const timerInput = timerSettings.querySelector('input');
timerInput.addEventListener('input', (e) => {
    const nowaWartosc = parseInt(e.target.value);
    timerStart = nowaWartosc;
    timerValue = nowaWartosc;
});

// Głośność
const volumeInput = volumeSettings.querySelector('input');
volumeInput.addEventListener('input', (e) => {
    const nowaGlosnosc = parseFloat(e.target.value);
    sound.volume = nowaGlosnosc;
});
