
// The data/time we want to countdown to
var countDownDate = new Date("Sep 20, 2024 21:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("days").innerHTML = days
document.getElementById("hours").innerHTML = hours
document.getElementById("mins").innerHTML = minutes
document.getElementById("secs").innerHTML = seconds
document.getElementById("message").innerHTML = "OUT THERE QUEER FEST begins in..";
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "0"
    document.getElementById("hours").innerHTML = "0" 
    document.getElementById("mins").innerHTML = "0"
    document.getElementById("secs").innerHTML = "0"
    document.getElementById("message").innerHTML = "LET OUT THERE QUEER FEST BEGIN!";
}
}, 1000);


// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("days1").innerHTML = days
document.getElementById("hours1").innerHTML = hours
document.getElementById("mins1").innerHTML = minutes
document.getElementById("secs1").innerHTML = seconds
document.getElementById("message1").innerHTML = "20 SEPT - 06 OCT";
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days1").innerHTML = "0"
    document.getElementById("hours1").innerHTML = "0" 
    document.getElementById("mins1").innerHTML = "0"
    document.getElementById("secs1").innerHTML = "0"
    document.getElementById("message1").innerHTML = "20th Sept - 6th Oct";
}
}, 1000);