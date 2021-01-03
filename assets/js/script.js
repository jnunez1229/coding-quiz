// Quiz Questions
let questions = [
  {
    question : "What does HTML stand for?",
    choiceA : "A. Hyper Text Markup Language",
    choiceB : "B. HyperLinks and Text Markup Language",
    choiceC : "C. Home Tool Markup Language",
    choiceD : "D. Home and Tech Media Language",
    correct : "A"
  },
  {
    question : "What tag is used to define a hyperlink, or link to another page?",
    choiceA : "A. strong",
    choiceB : "B. a",
    choiceC : "C. blockquote",
    choiceD : "D. em",
    correct : "B"
  },
  {
    question : "What tag is required in all HTML documents, and is used to define the title?",
    choiceA : "A. br",
    choiceB : "B. body",
    choiceC : "C. head",
    choiceD : "D. title ",
    correct : "D"
  },
  {
    question : "What does CSS stand for?",
    choiceA : "A. Chrome Styling Service",
    choiceB : "B. Cascading Style Service",
    choiceC : "C. Cascading Style Sheets",
    choiceD : "D. Community Service Styling",
    correct : "C"
  },
  {
    question : "What is the name of CSS design that calls for fluid and adaptable elements based on the device resolution or size?",
    choiceA : "A. Cascading",
    choiceB : "B. Responsive",
    choiceC : "C. Shifting",
    choiceD : "D. Evolution",
    correct : "B"
  },
  {
    question : "What is the name of the property used to specify the effects displayed behind all elements on a page?",
    choiceA : "A. Transparency",
    choiceB : "B. Bottom Layer",
    choiceC : "C. Background",
    choiceD : "D. Border",
    correct : "C"
  },
  {
    question : "In JavaScript, what element is used to store multiple values in a single variable?",
    choiceA : "A. Arrays",
    choiceB : "B. Variables",
    choiceC : "C. Functions",
    choiceD : "D. Strings",
    correct : "A"
  },
  {
    question : "What is the element called that forms a search pattern out of a sequence of characters?",
    choiceA : "A. Boolean Variable",
    choiceB : "B. Event",
    choiceC : "C. Conditional Argument",
    choiceD : "D. RegExp or Regular Expression",
    correct : "D"
  },
  {
    question : "In JavaScript, what is used in conjunction with HTML to “react” to certain elements?",
    choiceA : "A. Events",
    choiceB : "B. RegExp",
    choiceC : "C. Boolean",
    choiceD : "D. Condition",
    correct : "A"
  },
  {
    question : "What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?",
    choiceA : "A. Repeater",
    choiceB : "B. Clone",
    choiceC : "C. Debugger",
    choiceD : "D. Loop",
    correct : "D"
  },
];

//Global Variables
const startBtn = document.getElementById('start');
const scoreBtn = document.getElementById('score-btn');
const homeBtn = document.getElementById('home-btn');
const submitBtn = document.getElementById('submit');
const scoreCounterEl = document.getElementById('score-counter');
const timerEl = document.getElementById('timer');
const headerEl = document.getElementById('header');
const mainEl = document.getElementById('main');
const quizEl = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
const recordScoreEl = document.getElementById('record-score');
const userScoreEl = document.getElementById('user-score');
const highScoreEl = document.getElementById('high-score');


let timeLeft = 75;
let scoreCounter = 0;
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let scoreH3 = document.createElement("h3");
let timeInterval;


function countdown() {
  // setInterval to 1000ms. 
  timeInterval = setInterval(function() {
    timeLeft--
    timerEl.textContent =  timeLeft;

    // timer changes color to alert user that time is running out.
    if(timeLeft <= 0){
      clearInterval(timeInterval);
      alert("Time's Up!");
      timeLeft = 0;
      timerEl.textContent ="";
      displayUserScore();
     
    }else if(timeLeft < 31){
      timerEl.style.color = "orange";
      
    }else if(timeLeft < 11){
      timerEl.style.color = "red";
      
    }
    
    // If user reaches last question before timer runs out, clearInterval 
    if(runningQuestionIndex > lastQuestionIndex){
    clearInterval(timeInterval);
    displayUserScore();
    }

  }, 1000);

}

//renders questions for user
let renderQuestion = function(){
  if(runningQuestionIndex > lastQuestionIndex){
    clearInterval(timeInterval);
    displayUserScore();
    return
    
  }
  

  let q = questions[runningQuestionIndex];
  questionEl.textContent = q.question;
  choiceA.textContent = q.choiceA;
  choiceB.textContent = q.choiceB;
  choiceC.textContent = q.choiceC;
  choiceD.textContent = q.choiceD;
  
  
}

// Checks to see if user answer is correct
let checkAnswer = function(event){
  let answer = event.target.getAttribute("id");
  console.log(answer);
  let feedbackEl = document.getElementById("feedback");

  // Correct? notify user, move on to next question
  if(questions[runningQuestionIndex].correct === answer){
    feedbackEl.innerHTML = "<h3 style='color:green;'>CORRECT!</h3>";
    scoreCounter+=10
    runningQuestionIndex++;
    renderQuestion();
  }
  
  // Incorrect? notify user, move on, and subtract 10 from timeLeft
  else{
    feedbackEl.innerHTML = "<h3 style='color:red;'>INCORRECT!</h3>";
    runningQuestionIndex++;
    renderQuestion();
    scoreCounter-=5
    timeLeft-=10;

  }

}
  
  function displayUserScore(){
    quizEl.style.display = "none";
    timerEl.textContent = "";
    scoreCounterEl.textContent ="";
    userScoreEl.textContent = scoreCounter;
    userScoreEl.style.fontWeight = "700";
    userScoreEl.style.textDecoration = "underline";
    recordScoreEl.style.display = "block"; 
  
  }
  
  function renderHighScore(){
    // get user initials
    let userInitials = document.getElementById("user-initials").value;
  
  
    // high score object
    const result = {user: userInitials, score: scoreCounter};
  
    // get the score, or the initial value if empty
    const savedScores = localStorage.getItem('highscore') || '[]'; 
  
    // add the result and display 5 highest scores
    const highScores = [...JSON.parse(savedScores), result] 
      .sort((a, b) => b.score- a.score) // sort descending
      .slice(0, 5) // take highest 5
    
    // store the scores
    localStorage.setItem('highscore', JSON.stringify(highScores)); 
  
    let highScoreTbl = document.getElementById("score-display");
  
    for (let i = 0; i < highScores.length; i++) {
      highScoreTbl.innerHTML += '<tr><td>' + (i+1) + '</td><td>' + highScores[i].user + '</td><td>' + highScores[i].score + '</td></tr>';
    }
    
  }
  
  function displayHighScore(){
    event.preventDefault();
    renderHighScore();
    
    mainEl.style.display = "none";
    scoreBtn.style.display = "none"
    recordScoreEl.style.display = "none";
    homeBtn.style.display = "block";
    highScoreEl.style.display = "block";
  }
  
  let startQuiz = function(){
    mainEl.style.display = "none";
    scoreBtn.style.display = "none";
    // Timer displays 75
    timerEl.textContent =  timeLeft;
    countdown();
    renderQuestion();
    quizEl.style.display = "block";
    homeBtn.style.display = "block";
    
  }
  
  choiceA.addEventListener("click", checkAnswer);
  choiceB.addEventListener("click", checkAnswer);
  choiceC.addEventListener("click", checkAnswer);
  choiceD.addEventListener("click", checkAnswer);
  submitBtn.addEventListener("click", displayHighScore);
  scoreBtn.addEventListener("click", displayHighScore);
  startBtn.addEventListener("click", startQuiz);