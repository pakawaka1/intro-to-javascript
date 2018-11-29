// // JS Forms //////////////////////////////////////////////////////////////

// //dot notation
// console.log(document.forms);
// //bracket notation
// console.log(document.forms['loginForm']);

// console.log(document.forms.loginForm.button);

// const btn = document.forms.loginForm.button;

// btn.addEventListener('click', (event) => {
//     let firstName = document.forms.loginForm.firstName.value;

//     event.preventDefault();
//     console.log(firstName);
//     console.log('Clicked');

//     firstName.value = '';

// })

// this /////////////////////////////////////////

//create an object
// const person = {
//     name: 'David',
//     wife: {
//         firstName: 'Meera',
//         lastName: 'Bhatt',
//         age: 35,
//         howOld() {
//             console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
//         }
//     }
//     person.howOld();
//     person.wife.howOld();

// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');

// btn1.addEventListener('click', function() {
//     event.preventDefault();

//     this.style.display = 'none';
//     console.log(this);
// });

// btn1.addEventListener('click', logThis);
// btn2.addEventListener('click', logThis);

// function logThis() {
//     console.log(this)
// }

// sayName() {
//     console.log(this);
//     console.log(this.name);

//     }
// },

// sayName() {
//     console.log(this.name);

// const buttons = document.querySelectorAll('button');
// console.log('buttons', buttons);

// buttons.forEach(button => button.addEventListener('click', function() {
//     this.style.display= 'none';
// })
// );

// for(let button of buttons) {
//     button.addEventListener('click', function () {
//         this.style.display = 'block';
//     })
// }

// const dog = {
//   name: 'Fido',
//   says: 'Woof'
// };

// const cat = {
//   name: 'She-Ra',
//   says: 'Meow'
// };

// const baldeagle = {
//   name: 'Freedom',
//   says: 'America.....fuck yeah!!'
// };

// function speak() {
//   alert(`${this.name} says: ${this.says}`);
// }
// console.log(this);

// const dogSays = speak.bind(dog);
// dogSays();

// const catSays = speak.bind(cat);
// catSays();

// const baldeaeaglesays = speak.bind(baldeagle);
// baldeaglesays();

// function speak(location, status) {
//     alert(`${this.name} says: ${this.says} from ${this.location} ${status}`);

// }
// speak.apply(baldeagle, ['the mountainside', 'and hates communism']);
// speak.apply(dog, ['the mountainside', 'and hates communism']);
// speak.apply(cat, ['the mountainside', 'and hates communism']);

class Person {
  constructor(name, age, favColor) {
    this.name = name;
    this.age = age;
    this.favColor = favColor;
  }

  sayName() {
    console.log(this.name);
  }
}
const ben = new Person('Ben', 29, 'pink');
const david = new Person('David', 40, 'blue');

ben.sayName();
david.sayName();
