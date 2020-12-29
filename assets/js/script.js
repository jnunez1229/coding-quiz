const timerEl = document.getElementById('timer');
const mainEl = document.getElementById('main');
const startBtn = document.getElementById('start');
const quizEl = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D'); 
let timeLeft = 75;


// Quiz Questions
let questions = [
  {
    question : "What does HTML stand for?",
    choiceA : "Hyper Text Markup Language",
    choiceB : "HyperLinks and Text Markup Language",
    choiceC : "Home Tool Markup Language",
    choiceD : "Home and Tech Media Language",
    correct : "A"
  },
  {
    question : "What tag is used to define a hyperlink, or link to another page?",
    choiceA : "strong",
    choiceB : "a",
    choiceC : "blockquote",
    choiceD : "em",
    correct : "B"
  },
  {
    question : "What tag is required in all HTML documents, and is used to define the title?",
    choiceA : "br",
    choiceB : "body",
    choiceC : "head",
    choiceD : "title ",
    correct : "D"
  },
  {
    question : "What does CSS stand for?",
    choiceA : "Chrome Styling Service",
    choiceB : "Cascading Style Service",
    choiceC : "Cascading Style Sheets",
    choiceD : "Community Service Styling",
    correct : "C"
  },
  {
    question : "What is the name of CSS design that calls for fluid and adaptable elements based on the device resolution or size?",
    choiceA : "Cascading",
    choiceB : "Responsive",
    choiceC : "Shifting",
    choiceD : "Evolution",
    correct : "B"
  },
  {
    question : "What is the name of the property used to specify the effects displayed behind all elements on a page?",
    choiceA : "Transparency",
    choiceB : "Bottom Layer",
    choiceC : "Background",
    choiceD : "Border",
    correct : "C"
  },
  {
    question : "In JavaScript, what element is used to store multiple values in a single variable?",
    choiceA : "Arrays",
    choiceB : "Variables",
    choiceC : "Functions",
    choiceD : "Strings",
    correct : "A"
  },
  {
    question : "What is the element called that forms a search pattern out of a sequence of characters?",
    choiceA : "Boolean Variable",
    choiceB : "Event",
    choiceC : "Conditional Argument",
    choiceD : "RegExp or Regular Expression",
    correct : "D"
  },
  {
    question : "In JavaScript, what is used in conjunction with HTML to “react” to certain elements?",
    choiceA : "Events",
    choiceB : "RegExp",
    choiceC : "Boolean",
    choiceD : "Condition",
    correct : "A"
  },
  {
    question : "What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?",
    choiceA : "Repeater",
    choiceB : "Clone",
    choiceC : "Debugger",
    choiceD : "Loop",
    correct : "D"
  },
];

// variables used to de
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;


// Timer that counts down from 75
let countdown = function() {
  
  // setInterval to 1000ms. timer changes color to alert user that time is running out.
  let timeInterval = setInterval(function() {
    if( timeLeft > 30){
        timerEl.innerHTML = "<h4 id='timer'>Time Left: <span style='color: darkgreen;'>" + timeLeft + "</span></h4>";
        
        timeLeft--;
    }else if(timeLeft > 10){
        timerEl.innerHTML = "<h4 id='timer'>Time Left: <span style='color: orange;'>" + timeLeft + "</span></h4>";

        timeLeft--;
    }else if(timeLeft >= 1){
        timerEl.innerHTML = "<h4 id='timer'>Time Left: <span style='color: red;'>" + timeLeft + "</span></h4>";

        timeLeft--;
    }else{
        timerEl.textContent = 'Timer: 0';
        clearInterval(timeInterval);
        displayMessage();
    }
  }, 1000);
}


// Checks to see if user answer is correct
let checkAnswer = function(answer){
  let feedbackEl = document.getElementById("feedback");

  if(questions[runningQuestionIndex].correct === answer){
    feedbackEl.innerHTML = "<h3 style='color:green;'>CORRECT!</h3>";
    
    runningQuestionIndex++
    renderQuestion();
  }else{
    feedbackEl.innerHTML = "<h3 style='color:red;'>WRONG!</h3>";

    runningQuestionIndex++
    renderQuestion();
    timeLeft-=10;
  }
}

//renders questions for user
let renderQuestion = function(){
  let q = questions[runningQuestionIndex];
  questionEl.innerHTML = "<h2>" + q.question + "</h2>";
  choiceA.innerHTML = "<button class='btn'>"+q.choiceA+"</button>";
  choiceB.innerHTML = "<button class='btn'>"+q.choiceB+"</button>";
  choiceC.innerHTML = "<button class='btn'>"+q.choiceC+"</button>";
  choiceD.innerHTML = "<button class='btn'>"+q.choiceD+"</button>";


}

let startQuiz = function(){
  mainEl.style.display = "none";
  countdown();
  renderQuestion();
  quizEl.style.display = "block";
  
}


startBtn.onclick = startQuiz;
  