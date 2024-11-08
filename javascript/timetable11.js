const now = new Date();
const expires = new Date('2024-11-08 17:30:00');
const delay = expires - now;
window.setTimeout(function() {
    window.location = 'https://vaiprojects.github.io/gettogethermap/htmlpages/timetable12.html';
}, delay);