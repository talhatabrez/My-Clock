function updateClock(){
    const gmtTime = new Date().toUTCString();
    const estTime = new Date().toLocaleString('nl-NL', {timeZone: 'America/New_York'});
    const cetTime = new Date().toLocaleString('nl-NL', {timeZone: 'Europe/Berlin'});
    
    document.getElementById('gmt-time').innerHTML = gmtTime;
    document.getElementById('est-time').innerHTML = estTime;
    document.getElementById('cet-time').innerHTML = cetTime;
}

setInterval(updateClock, 1000);