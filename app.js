function updateLocalTime() {
    const now = moment(); 
    let time = now.format('h:mm:ss A'); 
    let date = now.format('D MMMM YYYY'); 
    document.getElementById('time').innerHTML = time ;
    document.getElementById('date').innerHTML = date;
}

setInterval(updateLocalTime,1000)


// var moment = require('moment-timezone');
// moment().tz("America/New_York").format();


function updateZoneTime() {
    const timeZone = document.getElementById('time-zone1').value; 
    const now = moment().tz(timeZone); 
    let selectTimeZone = now.format('hh:mm:ss A'); 
     let selectDateZone = now.format('D MMMM YYYY'); 
    document.getElementById('selecttime').innerHTML = selectTimeZone;
    document.getElementById('selectdate').innerHTML = selectDateZone;
}

setInterval(updateZoneTime,1000)