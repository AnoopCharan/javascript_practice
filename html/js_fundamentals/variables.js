// var, let ,const

// var has been the way to declare variables since begining of javascript
// let and const are recent additions

// var:
// can be initialized as undefined ex: var x;
// global scope

var myname = 'anoop';
console.log(myname);

myname='sai charan';
console.log(myname);

// initialize var
var greeting;
console.log(greeting); //will say undefined

greeting = 'How are you?';
console.log(greeting);

// letters, numbers, _, $ are allowed in var names, cannot start with number
//  _ is used for private variables

// multiword variable- use camel case
var firstName = 'Anoop';

// let:
// can be intialized as undefined ex: let x;
// block scoped - exists inside a block
// cannot initialize two let variables with same name or cannot reintialize with same name
// CAN reassign value

let fname = 'mouni';
console.log(fname);

// let fname = 'yel'; // cannot reintialize with same name
console.log(fname)

// const:
// cannot reintialize, cannot reassign.
// cannot reintialize with same name, but objects' properties can be changed, like dict, arrays

const person ={
    "name" : "anoop",
    "age"   : 28
}

console.log('person:' , person);

person.name ="mouni";
person.age =26;

console.log('person updated:', person);

person.location ="india";

var man ={
    "name" : "anoop",
    "age"   : 28
}

man.location = "canada";

console.log(man)

const g = 9.8

g =10  //this wil not work

console.log(g)