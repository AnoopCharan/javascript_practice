function greet(firstName='', LastName='') {
    console.log(`hello ${firstName} ${LastName}` );
}

greet(LastName='nakka');

// function expression

const square = function(x) {
    return x*x;
};

console.log(square(12));

// immediatelt invokable function expression --> IIFEs

(function(){
    console.log('IIFE ran..');
})();

// property method

const todo ={
    add: function() {
        console.log("added to todo");
    }
}

todo.delete = function() {
    console.log('deleted!');
}

todo.add();
todo.delete();