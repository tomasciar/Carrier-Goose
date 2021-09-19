var questions = [];
var questionInput = document.getElementById("question-input");
var numberInput = document.getElementById("number-input");
var phoneNumber = document.getElementById("number-input");

// Function to add an element on the list of questions
function addTo() {
  questions.push(questionInput.value);
  console.log(questions);
  questionInput.value = "";
}


function send() {
  console.log(phoneNumber.value);
  numberInput.value = "";
}

// Adds content of input field on the release of the enter key
questionInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add-button").click();
    questionInput.value = "";
  }
});

numberInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("send-button").click();
    numberInput.value = "";
  }
});
