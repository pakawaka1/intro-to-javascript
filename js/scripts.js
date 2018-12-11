// const newPrompt = +prompt('How much time would you like to wait in seconds?')*1000;
// const timer =setTimeout(quote, newPrompt);

// const intervalPrompt = +prompt('How many times do you want the message to appear?')*1000;
// const setTime = setInterval(quote, intervalPrompt);

// function quote () {
//     const random = alert(Math.random().toString(27).substring(2,15));
// }
// function endQuote() {
//     clearTimeout(timer);
// }

// function myStopFunction() {
//     clearInterval(setTime);
// }

const username = prompt('What is your username');
const password = prompt('What is your password?');

function mySetItem() {
    sessionStorage.setItem('user', username);
    sessionStorage.password = password;
    console.log(password);
 }

 function myGetItem() {
     const userValue = alert(sesssionStorage.getItem('user'))
    // alert(localStorage.user);
    // alert(localStorage.getItem('password'));
 }

function myClearItem() {
   console.log(sessionStorage.removeItem('user'));
   console.log(sessionStorage.removeItem('password'));

}


// var v = 1;
//     var getValue = (function(x) {
//         return function() {
//             alert(x);
//         };
//     }(v));
//     v = 2;

//      getValue();

(function () {
    const foo = 'Are you sure about this?';
    alert(foo);
    // console.log(foo);
    
})();

console.log(foo);

