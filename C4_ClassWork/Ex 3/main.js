// Grab html elements


function runClock() {
    const clock = document.getElementById('clock');
    const date = new Date();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayTime = 'AM';
    
    if(hours > 12) {
        hours -= 12;
        dayTime = "PM";
    }
    if(hours == 0){
        hours = 12;
    }
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    let time = `${hours}:${minutes}:${seconds} ${dayTime}`;

    clock.innerText = time;

    let timeout = setTimeout(() => { runClock() }, 1000);
}
runClock();