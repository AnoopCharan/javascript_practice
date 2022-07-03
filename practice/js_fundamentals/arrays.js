// Create arrays
const numbers =[12,34,65,23,56];
const array1 = new Array(22,123,45,2121,67);
const names = ['anoop', 'mounica'];

// arrays and lists in javascript is same if no other special libraries are being used
// arrays and lists are used interchangebly in javascript

const mixed =['anoop', 28, 'surrey'];
let val;

console.log('numbers:', numbers);
console.log('array1', array1);
console.log('names', names);
console.log('mixed', mixed);

console.log("Array.isArray(names):",Array.isArray(names));

// get value by index
console.log("numbers[2]",numbers[2]);

// insert  into array
// arrays are mutable
numbers[2] = 1000;
console.log("numbers[2]",numbers[2]);

// index of 
console.log("numbers.indexOf(23)",numbers.indexOf(23));

// appending using push
numbers.push(12345);

// add something at 0 position using unshift
numbers.unshift(111);

console.log(numbers);

// remove last element
numbers.pop();
numbers.shift();
console.log(numbers);

// remove a range of elements using splice
numbers.splice(2,4);
console.log('numbers.splice(2,4)', numbers);

// concat arrays
val =numbers.concat(array1);
console.log('numbers.concat(array1)',val);

// sorting using compare
console.log('sorted numbers', val.sort((a, b) => a-b));

// finding first instance

console.log('find a numbers greater than 50', val.find((a) => a > 50));