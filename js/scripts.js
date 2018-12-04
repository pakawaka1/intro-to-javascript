// // // Set and Clear Timeout 

// const newPrompt = prompt("How much time would you like to wait (in milliseconds)?");
// console.log(newPrompt);
// const timer = setTimeout(quote, newPrompt);



// function quote() {
//     alert('Hello World.....')
// };

// function endQuote() {
//     clearTimeout(timer);
//     console.log(quote, newPrompt);

// }
























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













// Storing Values



const username = prompt("What is your username?");
console.log(username);
const password = prompt ("What is your password?");
console.log(password);


function mySetItem() {     
    localStorage.user = username;
    sessionStorage.user = username;

};

function myGetItem() {
    // const userValue = alert(localStorage.getItem('user'));
    const userValue = alert(sessionStorage.getItem('user'));

// }; 
}
  

function myRemoveItem() {
    // const clearValue = localStorage.removeItem('user');
    const clearValue = sessionStorage.removeItem('user');

    console.log(clearValue);
};


// // Immediately Invoked Function Expressions (IFFE)
// (function() {
//     console.log('whatever'):
// }); 