//Grabbing the questions from the html page
const questions = document.querySelectorAll(".question");

//Looping through questions and adding event listener to the buttons
questions.forEach(function (question) {
  const button = question.querySelector(".question-btn");

  button.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});