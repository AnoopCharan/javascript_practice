let numbers = [0,1,2,3,4,5,6,7,1,9];

numbers.forEach(function(i, index){
    console.log(`index , i: ${index} ${i}`)
});

let newnums = numbers.map(function(i, index){
    if (i >3){
        return i
    }

});

console.log(newnums);