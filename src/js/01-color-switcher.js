const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let interval = null;


startBtn.addEventListener('click', () => {
    interval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

     startBtn.disabled = true;
})

stopBtn.addEventListener('click', () => {
   clearInterval(interval);
    stopBtn.disabled = false;
    startBtn.disabled = false;
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}