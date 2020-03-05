var startBtn = document.getElementById("startBtn");
var questionArr = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. string", "2. boolean", "3. alerts", "4. numbers"],
        correctAnswer: 0
    },
    {
        question: "The condition in an if/else statement is enclosed in _________ .",
        choices: ["1. quotes", "2. curly braces", "3. parentheses", "4. square brackets"],
        correctAnswer: 0
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choices: ["1. numbers and strings", "2. other array(s)", "3. quotes", "4. all of the above"],
        correctAnswer: 0
    },
    {
        question: "A very useful tool used during development and debugging for printing cotent to the debugger is:",
        choices: ["1. Javascript", "2. for loops", "3. console.log", "4. terminal/bash"],
        correctAnswer: 0
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        choices: ["1. commas", "2. curly braces", "3. quotes", "4. parentheses"],
        correctAnswer: 0
    }];

var score = 0;
var time = 1;
var timer = 300;
var stopInterval;
var startBtn = document.getElementById("startBtn");
var nextBtn = document.getElementById("nextBtn");
var currentQuestionIndex = 0;
var quizInterval;

startBtn.addEventListener("click", function () {

    stopInterval = setInterval(function () {
        time--;
        startBtn.textContent = "Your quiz starts in " + time;
        if (time === 0) {
            clearInterval(stopInterval);

            document.getElementById("hide1").classList.add("hide")
            document.getElementById("quizBox").classList.remove("hide");
            document.getElementById("navigationBox").classList.remove("hide");

            quizInterval = setInterval(quizTimer, 1000);
        }
    }, 1000);

    populateQuestion();
})

function quizTimer() {
    timer--;
    var minutes = Math.floor(timer / 60);
    var seconds = timer % 60;
    document.getElementById("countDown").innerText = minutes + ":" + seconds;
}

function populateQuestion() {

    document.getElementById("questions").innerText = "Q" + (currentQuestionIndex + 1) + ": " + questionArr[currentQuestionIndex].question;
    var buttons = document.getElementById("buttons");
    buttons.innerHTML = "";

    for (var i = 0; i < questionArr[currentQuestionIndex].choices.length; i++) {
        var button = document.createElement("button");
        button.innerText = questionArr[currentQuestionIndex].choices[i];
        button.className = "btn rounded bg-primary choices";
        button.answerIndex = i;
        button.addEventListener("click", clickAnswer);
        buttons.appendChild(button);
    }
}

function clickAnswer() {
    var isCorrect = false;
    if (questionArr[currentQuestionIndex].correctAnswer == this.answerIndex) {
        isCorrect = true;
    }

    if (isCorrect) {
        score += 10;
        nextQuestion();
    }
    else {
        timer -= 15;
    }
}

function nextQuestion() {
    if (currentQuestionIndex < (questionArr.length - 1)) {
        currentQuestionIndex++;
        populateQuestion();
    }
    else {
        score += timer;
        document.getElementById("navigationBox").classList.add("hide");
        document.getElementById("quizBox").classList.add("hide");
        document.getElementById("finalScore").classList.remove("hide");
        clearInterval(quizInterval);
    }
}

nextBtn.addEventListener("click", nextQuestion);

document.getElementById("addScore").addEventListener("click", function () {
    var myscore = {
        initials: document.getElementById("initials").value,
        score: score
    };

    var highScores = localStorage.getItem("highScores");
    if (highScores != null) {
        highScores = JSON.parse(highScores);
    }
    else {
        highScores = [];
    }

    highScores.push(myscore);
    var showScore = document.createElement("tr");
    myscore.textContent = showScore;

    localStorage.setItem("highScores", JSON.stringify(highScores));
});
