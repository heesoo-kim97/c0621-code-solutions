const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((sum, number) => sum + number);
const product = numbers.reduce((product, number) => product * number);
const balance = account.reduce((bal, transaction) => {
  if (transaction.type === 'deposit') {
    bal += transaction.amount
  } else {
    bal -= transaction.amount;
  }
  return bal;
}, 0);
const composite = traits.reduce((pokemon, trait) => Object.assign(pokemon, trait), {});

console.log('Total sum:', sum);
console.log('The product is:', product);
console.log('The balance is:', balance);
console.log('The combined result:', composite);
