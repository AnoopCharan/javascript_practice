// Type conversion is converting string to int, int to string etc.


let val;

// Number to String 

val = 5;

// output
console.log(val);
console.log(typeof val);
console.log(val.length);



val =String(5);

// output
console.log(val);
console.log(typeof val);
console.log(val.length);

// Bool to string
val = true;

// output
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(true);

// output
console.log(val);
console.log(typeof val);
console.log(val.length);

// Strings to numbers
val = '123';

// output
console.log(val);
console.log(typeof val);
console.log(val.length);

val = Number(val);

// output
console.log(val);
console.log(typeof val);
console.log(val.length);

val = Number(true);

// output
console.log(val);
console.log(typeof val);
console.log(val.length);

val = Number([1,2,3]);

// output
console.log(val);
console.log(typeof val);
console.log(val.length);

// Use parint or parseFloat for int and float nubers

// type coershion is automatically done by js
const v1 = '3';
const v2 = 5;

const sum= v1 + v2;

console.log(sum, typeof sum)