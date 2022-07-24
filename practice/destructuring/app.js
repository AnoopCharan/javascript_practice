// Destructuring

let a, b;
[a, b] = [100,200];

// rest pattern 
[a,b, ...rest] = [100,200,300,400,500];

({a,b} = {a:1000, b:2000, c:300, d:400, e:500});
console.log(a, b);
console.log(rest);

// Array destructuring
// const people = ['john', 'Beth', 'Mark'];
// const[person1, person2, person3] = people;

// 
// parse array returned from function

function getPeople() {
    return ['anoop', 'mounica'];
}

let person1, person2, person3;

[person1, person2, person3] = getPeople();
console.log(person1, person2, person3)

// object destructuring
// used in libraries
const person = {
    FirstName: 'Anoop',
    age: 28,
    city: 'miami',
    gender: 'male'
}

// old ES5 way

// const name = person.name,
//         age = person.age,
//         gender = person.gender;

// new ES6 way

const {FirstName, age, city} = person;

console.log(FirstName, age, city)