// 5 minute timer 
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        } 
        if (timer == 0) 
            alert("Time's Up!");
    }, 1000);      
}

    function timerStart() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

window.onload = function () {
var fiveMinutes = 60 * 5,
display = document.querySelector('#time');
startTimer(fiveMinutes, display);
};