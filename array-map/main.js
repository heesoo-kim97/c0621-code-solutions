const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

var doubled = numbers.map(double => double * 2);
var prices = numbers.map(num => '$' + num.toFixed(2));
var upperCased = languages.map(upper => upper.toUpperCase());
var firstLetters = languages.map(first => first[0])

console.log('Doubled values:', doubled);
console.log('The price values:', prices);
console.log('Uppercase of languages:', upperCased);
console.log('First letter:', firstLetters);
