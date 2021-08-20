const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const overFive = numbers.filter(number => number > 5);
const startWithE = names.filter(name => name.startsWith('E'));
const haveD = names.filter(name => name.toUpperCase().includes('D'));

console.log('Even Numbers: ', evenNumbers);
console.log('Numbers over five: ', overFive);
console.log('Names starting E: ', startWithE);
console.log('Name that have D: ',haveD);
