const takeAChance = require('./take-a-chance');

const promise = takeAChance('Heesoo');

promise.then(value => {
  console.log(value);
}, err => {
  console.log(err.message);
});
