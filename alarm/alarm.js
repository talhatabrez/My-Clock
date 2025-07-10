let interval = null;

document.getElementById('save-alarm').addEventListener('click', function(){
    let hour = parseInt(document.getElementById('alarm-hour').value);
    let min = parseInt(document.getElementById('alarm-minute').value);

    console.log('time is', hour, min);
    if(isNaN(hour) || isNaN(min)){
        alert('Invalid time!')
        return;
    }

    let now = new Date();
    let currHour = now.getHours();
    let currMin = now.getMinutes();

    let hourLeft = hour - currHour;
    let minLeft = min-currMin;

    if(minLeft < 0){
        minLeft += 60;
        hourLeft -= 1;
    }

    if(hourLeft < 0){
        hourLeft += 24;
    }

    // document.querySelector('.pop-up').innerHTML = `<h1>Alarm set for ${hourLeft} hours and ${minLeft} minutes from now</h1>`;   
    alert(`Alarm set for ${hourLeft} hours and ${minLeft} minutes from now.`);
    clearInterval(interval);

    interval = setInterval(function() {
        let time = new Date();
        let currentHour = time.getHours();
        let currentMinute = time.getMinutes();
        if(currentHour == hour && currentMinute == min){
            let sound = document.getElementById('alarm-sound');
            sound.currentTime = 0;
            sound.play();
            clearInterval(interval);
        }
    }, 1000);
    
});

document.getElementById('cancel-alarm').addEventListener('click', function(){
    clearInterval(interval);
    let h1 = document.getElementById('alarm-hour');
    let m1 = document.getElementById('alarm-minute');
    m1 = '';
    h1 = '';
    h1.placeholder = "Hour(s)";
    m1.placeholder = "Minute(s)";
    // document.querySelector('.pop-up').innerHTML = `<h1>Alarm cancelled</h1>`;
    alert('Alarm Cancelled!');
})



