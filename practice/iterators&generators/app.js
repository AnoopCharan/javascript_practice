// iterators and generators are both part of ES6 standards
// iterators and generators are different but used for same functionality
// iterators are advaced loops that can be paused
// generators are functions that can be paused, can return multiple values


// iterator 
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length ? {value: names[nextIndex++], done: false} : {done:true};
        }
    }
}

// create names
const names = ['anoop', 'mounica'];

const nameIt = nameIterator(names);

console.log(nameIt.next().value);
console.log(nameIt.next().value);
console.log(nameIt.next().value);

// Generators
function* sayNames() {
    yield 'jack';
    yield 'jill';
    yield 'john';
}

const nameG = sayNames();

console.log(nameG.next())

// Generator to create IDs
function* createIds() {
    let index = 0 ;
    while (true) {
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())