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

//GREAT HALL
//9.30AM-1.00PM

const div1 = document.querySelector('.overlay-text-great-1');
const date1 = new Date();
const hour1 = date.getHours();

if (hour < 10) {
  div1.style.Color = 'white';
} else if (hour > 13) {
  div1.style.Color = 'white';
} else {
  div1.style.Color = 'black';
}

//1.00PM-2.00PM

const div2 = document.querySelector('.overlay-text-great-2');
const date2 = new Date();
const hour2 = date.getHours();

if (hour < 13) {
  div2.style.Color = 'white';
} else if (hour > 14) {
  div2.style.Color = 'white';
} else {
  div2.style.Color = 'black';
}

//2.00PM-6.00PM

const div3 = document.querySelector('.overlay-text-great-3');
const date3 = new Date();
const hour3 = date.getHours();

if (hour < 14) {
  div3.style.Color = 'white';
} else if (hour > 18) {
  div3.style.Color = 'white';
} else {
  div3.style.Color = 'black';
}

//6.00PM

const div4 = document.querySelector('.overlay-text-great-4');
const date4 = new Date();
const hour4 = date.getHours();

if (hour < 18) {
  div4.style.Color = 'white';
} else if (hour < 18) {
  div4.style.Color = 'black';
} else {
  div4.style.Color = 'black';
}
