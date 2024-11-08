const now = new Date();
const expires = new Date('2024-11-08 10:30:00');
const delay = expires - now;
window.setTimeout(function() {
    window.location = 'https://vaiprojects.github.io/gettogethermap/htmlpages/timetable2.html';
}, delay);

