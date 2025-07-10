let startBtn = document.getElementById('start');
let endBtn = document.getElementById('end');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 1;
let second = 0;

let count = 0;

let timer = false;

startBtn.addEventListener('click', function() {
    let userInput = parseInt(document.getElementById('input-minutes').value) || 0;
    if(!timer){
        hour = Math.floor(userInput/60);
        minute = userInput % 60;
        second = 0;
        count = 0;
        timer = true;
        startTimer();
    }
})

endBtn.addEventListener('click', function(){
    timer = false;
    let sound = document.getElementById('alarm-sound');
    sound.pause();
    sound.currentTime = 0;
})

resetBtn.addEventListener('click', function() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    updateDisplay();
    document.getElementById('input-minutes').value = 0;
    let sound = document.getElementById('alarm-sound');
    sound.pause();
    sound.currentTime = 0;
})


function startTimer(){
    if(timer){
        if(hour === 0 && minute === 0 && second === 0 && count === 0){
            timer = false;
            let sound = document.getElementById('alarm-sound');
            sound.currentTime = 0;
            sound.play();
            return;
        }
        count--;
        if(count < 0){
            count = 99;
            second--;
        }
        if(second < 0){
            second = 59;
            minute--;
        }
        if(minute < 0){
            minute = 59;
            hour--;
        }
        updateDisplay();
        setTimeout(startTimer, 10);
    }
}
function updateDisplay(){
    let hour1 = (hour < 10) ? '0' + hour : hour;
    let min1 = (minute < 10) ? '0' + minute : minute;
    let sec1 = (second < 10) ? '0' + second : second;
    let count1 = (count < 10) ? '0' + count : count;

    document.getElementById('hour').innerHTML = hour1;
    document.getElementById('mins').innerHTML = min1;
    document.getElementById('secs').innerHTML = sec1;
    document.getElementById('count').innerHTML = count1;
}