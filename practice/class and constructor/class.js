function Person(myname, dob) {
    this.name = myname;
    this.dob = new Date(dob);
};

// Prototypes
// Object.prototype

Person.prototype.getname = function() {
    console.log(this.name);
}

// anoop = new Person('anoop', '1994/01/13');
// anoop.getname();

const personPrototypes = {
    greeting : function() {
        return `hello there ${this.firstName} ${this.lastName}`;
    }
}

const billy = Object.create(personPrototypes);
billy.firstName = 'Billy';
billy.lastName = 'Butcher';
billy.age = 39;

console.log(billy.greeting());

const bruce = Object.create(personPrototypes, {
    firstName: {value: 'Bruce'},
    lastName: {value: 'Wayne'},
    age: {value: 36}
})

console.log(bruce.greeting());

// ES6 classes

class Personclass {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);

    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    static addNumbers(x, y) {
        return x+y;
    }
}
// instantiation: create object from class
const anoop = new Personclass('anoop', 'nakka', '1/13/1994');

console.log(anoop.calculateAge());

// ES6 inheritance, subclasses
class Customer extends Personclass {
    constructor(firstName, lastName, dob, phone, membership) {
        super(firstName, lastName, dob);

        this.phone = phone;
        this.membership = membership;


    }

    static getCost() {
        return 500;
    }
}

const charan = new Customer('charan', 'nakka', '1/13/1994', '66666', 'gold');

console.log(charan.greeting());