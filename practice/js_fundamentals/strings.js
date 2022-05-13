const firstName = "Anoop";
const lastName = "Nakka";

let val;

// Concatenation
val = firstName + lastName;
console.log("firstName + lastName:", val);

// Appending
val = "Anoop";
val += "Nakka";
console.log("append", val)

val = 'Hello my name is ' + firstName + ' '+ lastName;
console.log(val);

// Escaping
val= 'the backslash can escape the \'';
console.log(val);

// length 
console.log("val.length :",val.length);

// concat()
console.log( firstName.concat(' ', lastName));

// change case upper lower
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());