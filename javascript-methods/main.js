var numbers = [3, 5, 8];

var maximumValue = Math.max(...numbers);
console.log('Maximum value is:', maximumValue);

var heros = ['Iron Man', 'Batman', 'Superman', 'Black Panther'];
var randomNumber = Math.random(heros) * heros.length;
var randomIndex = Math.floor(randomNumber);
console.log('random Index is:', randomIndex);

var randomHero = heros[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter: Chamber of Secrets',
    author: 'J.K Rowling'
  },
  {
    title: 'Harry Potter: Goblet of Fire',
    author: 'J.K Rowling'
  },
  {
    title: 'Harry Potter: Order of the Phoenix',
    author: 'J.K Rowling'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library', library);

var fullName = 'Heesoo Kim';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
