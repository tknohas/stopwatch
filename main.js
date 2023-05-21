const time = document.getElementById('time');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let timeId;
let elapsedTime =　0;

function start(){
  let startTime = Date.now(); //開始時間
  startTime -= elapsedTime;
  
  timeId = setInterval(function(){
    const nowTime = Date.now();
    elapsedTime = nowTime - startTime;
    
    const ms = elapsedTime % 1000;
    const s = Math.floor(elapsedTime / 1000) % 60;
    const m = Math.floor(elapsedTime /1000 / 60) % 60;

    const formattedMs = ms.toString().padStart(3, '0');
    const formattedS = s.toString().padStart(2, '0');
    const formattedM = m.toString().padStart(1, '0');
    time.textContent = `${formattedM}:${formattedS}:${formattedMs}`;
  }, 10)

  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}

function stop(){
  clearInterval(timeId);
  
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function reset(){
  clearInterval(timeId);
  elapsedTime = 0;
  time.textContent = '0:00:000';

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;

}
 