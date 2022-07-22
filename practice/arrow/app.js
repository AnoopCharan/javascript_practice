// const sayHello =function () {
//     console.log('Hello!');
// }

// const sayHello = () => {
//     console.log('Hello Arrow!')
// }

// online function
const sayHello = () => console.log('Hello single line!')


sayHello();

// return some value

const giveValue = () => 'this is the response';

console.log(giveValue());

const returnObject = () => 
    ({
        firstName:'anoop'
    });


console.log(returnObject())

// single param
const callOut = firstName => console.log(`hello ${firstName}`); 

callOut('anoop');

// multiple params

const callOutFull = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
callOutFull('anoop', 'nakka');


const users = ['mounica', 'charan', 'adarsh', 'madhuri'];

// const nameLengths = users.map(function (name) {
//     return name.length;
// });

const nameLengths = users.map(name => name.length);

console.log(nameLengths);

