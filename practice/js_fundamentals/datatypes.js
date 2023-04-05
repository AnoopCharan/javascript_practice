// Data types 
// 
// Two major categories of data types
// 1. Primitive Data types : 
// Stored directly in the memory locations the variable accesses
// stored on the stack

// 2. Reference Data Types: 
// Accesses by reference
// Objects (reference type) that are stored on the heap
// A pointer to a location in memory

// SIX primitive Data types
// 
// String
// Numbers (int, float, decimal all are number type)
// Boolean
// Null (intentional empty)
// Undefined 
// Symbols (ES6)

// Reference types:
// 
// Arrays 
// Object Literals 
// Functions 
// Dates 
// Anything else

// JS is Dynamically types language, 
// types are associated with values in the variable not the variable definition 
// same variable can hold multiple types 
// No need to specify type of variable like in C int a etc.
// Most other languages are statically typed (Java, C, C++)
// Typescript and flow are supersets of JS and allow for static typing 
// 
// **** Since primitives are stored on stack and reference types are stored in heap
// any reassignement and changing variable will not change primitive type, but will change in reference type
//  for ex: name= "anoop", is always same, Person.name="anoop", can be reassigned from anywhere


// PRIMITIVE

// string
const myname ="anoop";
console.log(typeof myname);

// Number
const age = 28;
console.log(typeof age);

const height = 1.78;
console.log(typeof height);

// boolean
const married = true;
console.log(typeof married);

//  null
const car = null ;
console.log(typeof car);

// undefined
let bike;
console.log(typeof bike);

// symbol ; is a new primitive type
const sym = Symbol();
console.log(typeof sym);


// REFERENCE TYPES

// ARRAY
const hobbies =['cars', 'tech'];
console.log(typeof hobbies);

// OBJECT LITERALS - IS THE DICTIONARY
const address ={
    'state': 'bc',
    'country': 'Canada'
}
console.log(typeof address);

// DATE

const today= new Date()
console.log(typeof today)