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
container.style.width= "34rem"

// dzwięk dla tiemera
const sound = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

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

const timerStart = 1;
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
