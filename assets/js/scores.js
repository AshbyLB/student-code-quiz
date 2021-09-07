var userScore = JSON.parse(localStorage.getItem("user-score"));
var ulEl = document.querySelector("ul");




for (i = 0; i < userScore.length; i++){
    var getScore = document.createElement("li");
    getScore.textContent = userScore[i].name + ": " + userScore[i].score;
    ulEl.appendChild(getScore);
}
