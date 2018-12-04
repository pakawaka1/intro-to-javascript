// function User () {
//     this.username = prompt('What is your username?');
//     this.password = prompt('What is your password?');

//     this.getName = function() {
//         this.username = prompt('');
//     }
//     this.getPassword = function() {
//         this.password = prompt('p');
//     }
// }

// const david = new User();
// david.getName();
// david getPassword();
// console.log9(david);


// prototype methods

// function User() {
//     this.name;
//     this.password;


//     this.getStuff = function() {
//         this.getName();
//         this.getPassword();
//     }

//     this.getName = function() {
//         this.name = prompt('What is your username?');
//     }

//     this.getPassword = function() {
//         this.password = prompt('What is your password?')

//     }
// }

// const david  = new User();
// david.getStuff();
// console.log(david);

//creating classes

class Animal {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    play() {
        this.energy -= 5;
    }
 }

class Dog extends Animal {
    constructor(name, energy, says) {
        super(...arguments);

        this.says = says;
    }
    speak() {
        console.log(`Dog says ${this.says}`);
    }
}

const fido = new Dog('Fido', 40, 'wooooof');
console.log(fido)
 