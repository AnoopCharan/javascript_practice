const person ={
    firstName: 'Anoop',
    lastName: 'Nakka',
    age:'1000',
    email: 'nakka@anoop.com',
    address: {
        city:'ptc',
        state:'tg'
    },

    getBirthYear: function() {
        return 1022;
    }


}

let val;

console.log(person);
console.log(person.firstName);
console.log(person['firstName']);
console.log(person.age);
console.log(person.address.city)
console.log(person.getBirthYear());

const people = [
    {Name: 'ramaraju', age:30},
    {Name: 'Bheem', age:30}
]

for (let i=0; i < people.length; i++) {
    console.log(people[i].Name)
}