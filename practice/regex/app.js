let re;
// defining regex in js
// flags go after /
// i is case insenstive
// g - global search, look at whole text for all instances, multiple 

re=/hello/i;
console.log(re);
console.log(re.source);

// some functions that are used to evalulate expressions
// exec() will return results in array if there is a match, null if no match
const result = re.exec('hey hello man how are you');
console.log(result);

console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test()- returns true or false for matching
const testResult = re.test('hey Hello man how are you');
console.log(testResult);

// match()- will return array or null, similar to exec()
const str = 'h1ey hello man how are you';
const matchResult = str.match(re);
console.log(matchResult);

// search() - will return index of first match, if not found returns -1
const searchResult = str.search(re);
console.log('searchResult:' + searchResult)

// replace() - will return a new string with some or all of matches of a pattern
const replaceResult = str.replace(re, 'wassup');
console.log('replaceResult:'+ replaceResult);

console.log('!!!!!!!!!!!!----METACHARACTER SYMBOLS-----!!!!!');

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
        console.log(str.match(re))
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}

// const reNew = /hello/i;
// Metacharacters symbols
//  ^ means starts with
// const reNew=/^h/i;

// $ means ends with
// const reNew =/d$/i;

// begins with and ends with
// const reNew = /^h d$/;

//  . match any character- only one
// const reNew = /^h.llo/i;

// * wild card matching- any 0 or more times
// const reNew = /h*llo/i; //use full for filerting similar text

// // ? used for optional character
// const reNew = /gra?e?y/i;

//escape characters
let reNew= /gra?e?y\?/
console.log('!!!!!!!!!!!!----Character sets-----!!!!!');

// brackets are character sets, they are options for matching ex:
reNew = /gr[ae]y/i;
reNew = /[^g]ray/i; // matches anything in bracket location except g
reNew= /[A-Z]ray/i; //matches all from a to z;
reNew = /[0-9]ray/i; //match any digit in first place in brackets

// {} - are quantifiers- count a occurance of letter
reNew =/hel{3}o/i; //matches if l occures 3 times in sequence
reNew= /hel{2,4}o/i; // matches if l occures 2 to 4 times 
reNew = /hel{2,}o/i; //matches if l occues atleast 2 times

//  () - are used for grouping
reNew = /([0-9]){3}/; // matches if any number 0-9 occurs 3 times in sequence

// shorthand character classes
reNew = /\w/;  //word character - it can be any letter or anynumber or underscore
reNew = /\w+/  // + is one or more aplhanumerical like \w

reNew = /\W/; // anything but \w 

reNew = /\d/; // will match any digit

reNew = /\D/; // oposite of \d

reNew = /\s/; // matches white space character

reNew = /\S/; // oposite of \s

reNew = /Hell\b/i; // word boundary

// Assertions - conditions
reNew = /x(?=y)/; // matches only if x is followed by y
reNew = /x(?!y)/; // matches only if x is Not followed by y


let strNew= "Helllo hell its 444ray? 222";
strNew = "xy yx"


reTest(reNew, strNew);




