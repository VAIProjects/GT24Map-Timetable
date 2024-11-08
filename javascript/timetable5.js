const now = new Date();
const expires = new Date('2024-11-07 14:00:00');
const delay = expires - now;
window.setTimeout(function() {
    window.location.href = "htmlpages/timetable2";
}, delay);

setTimeout(function(){window.location.href='http://yourdomainname/views/add.html'},1000);