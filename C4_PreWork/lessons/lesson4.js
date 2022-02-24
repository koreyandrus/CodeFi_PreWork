// grab html elements
const startButton = document.querySelector('[data-action="start"]');
const stopButton  = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"');
const minutes     = document.querySelector(".minutes");
const seconds     = document.querySelector(".seconds");
let   timerTime   = 00;
let   isRunning   = false;
let interval;

setInterval(function() {
    
}, 1000);

// create functions

function startTimer() {
    if(isRunning) return;

    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    if(!isRunning) return;

    isRunning = false;
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();

    timerTime = 0;
    minutes.innerText = '00';
    seconds.innerText = '00';
}

function incrementTimer() {
    timerTime++;

    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;


    minutes.innerText = padNum(numOfMinutes);
    seconds.innerText = padNum(numOfSeconds);
}

function padNum(number) {
    return (number < 10) ? '0' + number : number;
}



// event listeners

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);