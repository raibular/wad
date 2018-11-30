var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer :0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1


},
    {
        question: "What is the meaning of Pakistan?",
        choices: ["Muslim Land",
            "Land of five rivers",
            "Desert",
            "Holy Land"],
        correctAnswer: 3
    },
    {
        question: "When did Pakistan win Olympic gold medal in Hockey for the first time?",
        choices: ["1948",
            "1952",
            "1960",
            "1964"],
        correctAnswer: 3
    }];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    /*Write your code here */
   if(currentQuestion<4)
   {
       var n = document.querySelector("input[type=radio]:checked");
       if (n == null) {
           var displaymessage = document.getElementById("quiz-message");
           displaymessage.style.display = "inline"
           displaymessage.innerText = "select any option";
           var QuestionChoice=document.getElementById("choice-list");
           QuestionChoice.innerHTML='';
       }
       else{
           if(questions[currentQuestion].correctAnswer)
           {
               correctAnswers++;
           }
           var QuestionChoice = document.getElementById("choice-list");
           QuestionChoice.innerHTML = '';
           currentQuestion++;
       }
       displayCurrentQuestion();

   }

   else
   {
       displayScore();


   }



}
function playAgian(){

    resetQuiz();
    displayCurrentQuestion();
}
function displayCurrentQuestion() {
    /*Write your code here */
    var QuizQuestion=document.getElementById("question");
    var QuestionChoice=document.getElementById("choice-list");
    QuizQuestion.innerHTML='<p>'+questions[currentQuestion].question + '</p>';
    for(var i=0; i<questions[currentQuestion].choices.length;i++)
    {
        QuestionChoice.innerHTML+="<input type='radio' name='checked'>"+questions[currentQuestion].choices[i]+"<br>";
    }





}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';

}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}










