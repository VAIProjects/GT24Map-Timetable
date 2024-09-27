// Calling showTime function at every second
setInterval(showTime, 1000);
 
// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "am";
 
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "pm";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "am";
    }
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;
 
    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}
 
showTime();

//Drawing Room
//10.00AM-11.40AM
const body = document.querySelector('.overlay-text-drawing-1');
const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();

if (hour < 10.00 ) {
  body.style.color = 'white';
} else if (hour >= 11.40) {
  body.style.color = 'white';
} else {
  body.style.color = 'yellow';
}

//11.40AM-12.00AM
const body1 = document.querySelector('.overlay-text-drawing-2');
const date1 = new Date();
const hour1 = date.getHours();
const min1 = date.getMinutes();

if (hour <= 11.40) {
  body1.style.color = 'white';
} else if (hour >= 12.00) {
  body1.style.color = 'white';
} else {
 body1.style.color = 'blue';
}

//12.00PM-1.00PM
const body2 = document.querySelector('.overlay-text-drawing-3');
const date2 = new Date();
const hour2 = date.getHours();
const min2 = date.getMinutes();

if (hour <= 12.00) {
  body2.style.color = 'white';
} else if (hour >= 13.00) {
  body2.style.color = 'white';
} else {
 body2.style.color = 'green';
}