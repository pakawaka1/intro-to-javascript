// Timers and set intervals
const newPrompt = prompt("How much time would you like to wait (in milliseconds)?");
console.log(newPrompt);


function alert(newPrompt) {
    // const prompt = prompt("How much time would you like to wait (in milliseconds)?");
    const timer = setTimeout(quote, newPrompt);
    console.log(timer);
};

function quote() {
    alert('Hello World......')
};

// // Immediately Invoked Function Expressions (IFFE)
// (function() {
//     console.log('whatever'):
// }); 