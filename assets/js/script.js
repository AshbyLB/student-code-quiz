
let questions = [
    {
        question: "question1",
        answers: ["a1", "a2", "a3", "a4"],
        correctAnswers: 0,
    },
    {
        question: "question",
        answers: ["b1", "b2", "b3", "b4"],
        correctAnswers: 1,
    },
    {
        question: "question",
        answers: ["c1", "c2", "c3", "c4"],
        correctAnswers: 2,
    },
    {
        question: "question",
        answers: ["d1", "d2", "d3", "d4"],
        correctAnswers: 3,
    },
    {
        question: "question",
        answers: ["e1", "e2", "e3", "e4"],
        correctAnswers: 0,
    }]

var startButton = document.querySelector("#start");
var questionEl = document.querySelector("#title");
var titlePage = document.querySelector("#titlePage");
var timer = document.querySelector("#timer");
var ulEl = document.querySelector("ul")
var result = document.querySelector("#result");
var timeRemaining = 60;
var counter = 0;
var score = 0;
var questionElements = questions[counter];
var hsForm = document.getElementById("hsForm");
var submitButton = document.getElementById("submit");
var nameInput = document.getElementById("nameInput");
var tryAgain = document.getElementById("tryAgain");

if (!localStorage.getItem('user-score')) {
    var stored = [];
} else {
    var stored = JSON.parse(localStorage.getItem("user-score"));
}

hsForm.style.display = "none";
tryAgain.style.display = "none";

ulEl.addEventListener("click", function (event) {
    var selectedAnswer = event.target.textContent;
    questionElements = questions[counter];
    if (selectedAnswer === questionElements.answers[questionElements.correctAnswers]) {
        result.textContent = "You got it right!";
        score++;
    } else {
        result.textContent = "Wrong!!!";
        timeRemaining -= 10;

    }
    counter++;
    nextQuestion();
});
var nextQuestion = function () {
    startButton.textContent = "";
    ulEl.textContent = "";
    if (counter === questions.length) {
        timeRemaining = 0;
        return;
    }
    questionElements = questions[counter];
    questionEl.textContent = questionElements.question;
    for (var i = 0; i < questionElements.answers.length; i++) {
        var answersEl = document.createElement("li");
        answersEl.textContent = questionElements.answers[i];
        ulEl.appendChild(answersEl);
    }
}
var timerBegin = function () {
    timer.textContent = "Time: " + timeRemaining;
    var timerInterval = setInterval(function () {
        timeRemaining--;
        if (timeRemaining <= 0) {
            timeRemaining = 0;
            clearInterval(timerInterval);
            quizOver();
        }
        timer.textContent = "Time: " + timeRemaining;
    }, 1000);
}
startButton.addEventListener("click", function () {
    titlePage.style.display = "none";
    timerBegin();
    nextQuestion();
});

var quizOver = function () {
    questionEl.style.display = "none";
    finalScore.textContent = "You have a final score of " + score + "!";
    hsForm.style.display = "block";
}
var finalScore = document.getElementById("finalScore");
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    var userName = nameInput.value;
    var userScore = {
        name: userName,
        score: score
    };
    stored.push(userScore);
    localStorage.setItem("user-score", JSON.stringify(stored));
    tryAgain.style.display = "block";
})
tryAgain.addEventListener("click", function() {
    location.reload();
})

