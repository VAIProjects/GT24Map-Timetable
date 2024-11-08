const now = new Date();
const expires = new Date('2024-11-07 10:00:00');
const delay = expires - now;
window.setTimeout(function() {
    window.location = 'https://vaiprojects.github.io/gettogethermap/htmlpages/timetable1.html';
}, delay);