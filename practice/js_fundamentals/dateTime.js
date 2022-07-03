let val;

const today = new Date();
const bday = new Date("09/13/2022");

console.log('new Date();', today);
console.log('bday', bday);
console.log('bday.getMonth()',bday.getMonth());
console.log('bday.getDate()',bday.getDate());
console.log('bday.getDay()',bday.getDay());
console.log('bday.getTime()',bday.getTime());

bday.setDate(13);
bday.setMonth(0);
bday.setFullYear(1994);
console.log(bday);