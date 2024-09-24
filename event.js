
const body = document.querySelector('body');
const date = new Date();
const hour = date.getHours();

if (hour < 12) {
  body.style.backgroundColor = 'lightblue';
} else if (hour < 18) {
  body.style.backgroundColor = 'orange';
} else {
  body.style.backgroundColor = 'black';
}