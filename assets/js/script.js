
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

    hsForm.style.display = "none";

    ulEl.addEventListener("click", function(event){
        var selectedAnswer = event.target.textContent;
        questionElements = questions[counter];
        if(selectedAnswer===questionElements.answers[questionElements.correctAnswers]) {
            result.textContent = "You got it right, QUEEN!";
            score++;
        } else {
            result.textContent = "Wrong!!!";
            timeRemaining -= 10;

        }
        counter++;
        nextQuestion();
});
    var nextQuestion = function(){
        submitButton.textContent="";
        ulEl.textContent="";
        if (counter === questions.length || !questions) {
            timeRemaining = 0;
            return;
        }
        questionElements = questions[counter];
        questionEl.textContent = questionElements.question;
        for (var i = 0; i < questionElements.answers.length; i++){
            var answersEl = document.createElement("li");
            answersEl.textContent = questionElements.answers[i];
            ulEl.appendChild(answersEl);
            }
    }
    var timerBegin = function(){
        timer.textContent = "Time: " + timeRemaining;
        var timerInterval = setInterval(function(){
            timeRemaining--;
            if (timeRemaining ===0) {
                timeRemaining = 0;
                clearInterval(timerInterval);
                quizOver ();
            }
            timer.textContent = "Time: " + timeRemaining;
        },1000);
    }
    startButton.addEventListener("click", function(){
        titlePage.style.display = "none";
        timerBegin();
        nextQuestion();
    });

    var quizOver = function () {
        questionEl.style.display = "none";
        hsForm.style.display = "block";


    }

    submitButton.addEventListener("click", function(){
        var subInput = nameInput.value;
       localStorage.setItem("Name", subInput);

    })