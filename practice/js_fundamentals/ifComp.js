// const id = parseInt(prompt("enter 100"));
const id =100;

// Equals to 
if (id == 100) {
    console.log("id == 100")
} 
    else {
        console.log('id !=100')
    }

// triple equal
if (id === 100) {
    console.log("id === 100")
} 
    else {
        console.log('id !=100')
    }

// test if undefined
const d_id =1;

if (typeof d_id !== 'undefined') {
    console.log(`the ID is ${d_id}`)
}
    else{
        console.log('NO ID')
    }

const Name = 'anoop';
const age = 28;
const married ='yes';

if (age <= 30 && married ==='yes') {
    console.log(`${Name} is married under age of 30`)
}

// or is ||

// ternary operators

console.log( id === 10 ? 'correct' : 'incorrect');