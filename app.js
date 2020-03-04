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

// window.onload = function () {
// var fiveMinutes = 60 * 5,
// display = document.querySelector('#time');
// startTimer(fiveMinutes, display);
// };

// The below code I want to use for when a user selects an answer. When the answer is selected, I want the for loop to run through the options to determine which answer is correct. When the answer is selected, I then want to append an element to the "results" div that says "Right!" or "Wrong!"

var pageOne = document.getElementsByClassName("questionsOne");
pageOne.addEventListener("click", function () {
    // alert("this is working"); NOT WORKING HAHA
    var string = false;
    var boolean = false;
    var alerts = true;
    var numbers = false;

    var arr1 = [string, boolean, alerts, numbers]

    var oneResults = document.getElementById("results");
    
    for (var i = 0; i < arr1.length; i++) {
        if (string) {
            var wrong = document.createElement("p");
            wrong.textContent = "Wrong!";
            oneResults.appendChild(wrong);
        }
        if (boolean) {
            var wrong = document.createElement("p");
            wrong.textContent = "Wrong!";
            oneResults.appendChild(wrong);
        }
        if (alerts) {
            var right = document.createElement("p");
            right.textContent = "Right!";
            oneResults.appendChild(right);
        }
        if (numbers){
            var wrong = document.createElement("p");
            wrong.textContent = "Wrong!";
            oneResults.appendChild(wrong);
        }
    }
});

