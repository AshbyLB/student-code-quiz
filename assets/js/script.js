var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var question = document.getElementById("question");
var answers = document.querySelectorAll("li");
var startQuiz = document.getElementById("start");
var titlePage = document.getElementById("titlePage");
var timeRemaining = 60;

let questions = [
    {
        question: "question",
        answers: ["a1", "a2", "a3", "a4"],
        correctAnswers: 0,
    },
    {
        question: "question",
        answers: ["a1", "a2", "a3", "a4"],
        correctAnswers: 1,
    },
    {
        question: "question",
        answers: ["a1", "a2", "a3", "a4"],
        correctAnswers: 2,
    },
    {
        question: "question",
        answers: ["a1", "a2", "a3", "a4"],
        correctAnswers: 3,
    },
    {
        question: "question",
        answers: ["a1", "a2", "a3", "a4"],
        correctAnswers: 0,
    }]

var startQuiz = document.getElementById("start");

startQuiz.addEventListener("click", function () {
    titlePage.style.display = "none";
    setTimer();
  for (i = 0; i < questions.length; i++) {
      var element = questions[i];

  }

var setTimer = function () {
    timer.textContent = "Time: " + timeRemaining;
    var timeInterval = setInterval(function () {
        timeRemaining--;
        timer.textContent = "Time: " + timeRemaining;
        if (timeRemaining === 0) {
            clearInterval(timeInterval);
            quizOver();


        }
    }, 1000);
}