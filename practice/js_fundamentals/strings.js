const firstName = "Anoop";
const lastName = "Nakka";
const str ="testing slicing using javascript";
const csv ="1,2,3,4,5,6,7";

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

// indexOf()
console.log("firstName.indexOf('o') :",firstName.indexOf('o'));
console.log("firstName.lastIndexOf('o') :",firstName.lastIndexOf('o'));


// charAt()
console.log("firstName.charAt('1')" ,firstName.charAt('1'));
console.log("firstName.charAt(firstName.length -1)" , firstName.charAt(firstName.length -1));

// substring()
console.log("firstName.substring(2,3):",firstName.substring(2,4));

// slice()
console.log("firstName.slice(3,-2):" ,firstName.slice(-3));

// split()
console.log("str.split(' ')" ,str.split(" "));
console.log("csv.split(',')" , csv.split(','));

// replace()
console.log("csv.replace('1','new'):" ,csv.replace('1','new'))

// includes()
console.log( "csv.includes(1):", csv.includes(1))