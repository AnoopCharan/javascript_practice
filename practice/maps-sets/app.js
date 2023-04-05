// MAPS - key-value pairs - can use any type as key or value
// like hash maps?

const map1 = new Map();

// set keys

const 
    key1 = 'hello',
    key2 = {},
    key3 = function() {};

// set map values by keys

map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// get values by key
console.log(map1.get(key1),'\n', map1.get(key2), map1.get(key3))

// count
console.log(map1.size);


// loops

for(let [key,value] of map1) {
    console.log(key, value)
}


// array from maps
const arr1 = Array.from(map1.values());
console.log(arr1);



// SETS
// list of unique values, similar to python

const set1 = new Set();

// add values to set
set1.add(100);
set1.add('hey');
set1.add(true);

console.log(set1);

console.log(set1.size);

console.log(set1.has(100));

arr2 = [1,2,4,56,1234,6,2,3,5,33,5,6,77,2,3,5,3,2];
console.log(arr2.length);
const set2 = new Set(arr2);
console.log(set2);