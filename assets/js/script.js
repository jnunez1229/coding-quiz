var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');


// Timer that counts down from 75
function countdown() {
  var timeLeft = 75;

  // setInterval to 1000ms. timer changes color to alert user that time is running out.
  var timeInterval = setInterval(function() {
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


  startBtn.onclick = countdown;
  