// // // Timers and set intervals

const newPrompt = prompt("How much time would you like to wait (in milliseconds)?");
console.log(newPrompt);
const timer = setTimeout(quote, newPrompt);



function quote() {
    alert('Hello World.....')
};

function endQuote(timer) {
    clearTimeout(timer);
    console.log(quote, newPrompt);

}
















//Set Interval and Stop Interval Methods
// Example:

// const setTime = setInterval(myTimer, 1000);

// function myTimer() {
//     const date = new Date();
//     const time = date.toLocaleTimeString();
//     document.getElementById("clock").innerHTML = time;
// }

// function myStopFunction() {
//     clearInterval(setTime);
// }


















// const setPrompt = prompt("How often do you want to be alerted?")
// const interval = setInterval(alerted, setPrompt);
// function alerted() {
//     alert(Math.random().toString(36).substring(7));
//     console.log(alerted);
// };

// function endAlerted() {
//     clearInterval(alerted);
// };

// // Immediately Invoked Function Expressions (IFFE)
// (function() {
//     console.log('whatever'):
// }); 