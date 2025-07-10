let startBtn = document.getElementById('start');
let endBtn = document.getElementById('end');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;

let count = 0;

startBtn.addEventListener('click', function(){
    timer = true;
    stopWatch();
})

endBtn.addEventListener('click', function() {
    timer = false;
})

resetBtn.addEventListener('click', function(){
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById('hour').innerHTML = '00';
    document.getElementById('mins').innerHTML = '00';
    document.getElementById('secs').innerHTML = '00';
    document.getElementById('count').innerHTML = '00';
})

function stopWatch() {
    if(timer){
        count++;
        if(count == 100){
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
            second = 0;
        }

        let hour1 = hour;
        let min1 = minute;
        let sec1 = second;
        let count1 = count;

        if(hour < 10){
            hour1 = '0' + hour1;
        }
        if(min1 < 10){
            min1 = '0' + min1;
        }
        if(sec1 < 10){
            sec1 = '0' + sec1;
        }
        if(count1 < 10){
            count1 = '0' + count1;
        }

        document.getElementById('hour').innerHTML = hour1;
        document.getElementById('mins').innerHTML = min1;
        document.getElementById('secs').innerHTML = sec1;
        document.getElementById('count').innerHTML = count1;

        setTimeout(stopWatch, 10);
    }
}