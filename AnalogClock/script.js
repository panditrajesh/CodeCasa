// Accessing the elements using DOM
let hourCount = document.getElementById('hour');
let minCount = document.getElementById('min');
let secCount = document.getElementById('sec');


// It will call the function at every second means 1000 ms
setInterval(oneRound, 1000);

function oneRound() {
    let date = new Date();      //it will import the current date and time with hour min and sec.

    // to extract only hour min and sec, below functions are called
    let sec = date.getSeconds() / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;

    hourCount.style.transform = "rotate(" + (hour * 360) + "deg)";
    minCount.style.transform = "rotate(" + (min * 360) + "deg)";
    secCount.style.transform = "rotate(" + (sec * 360) + "deg)";
}