console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  { name: 'Heesoo' }, { name: 'Paul' },
  { name: 'Denny' }, { name: 'Isaac' }
];

const suits = ['heart', 'diamond', 'spades', 'clubs'];
const rank = ['Ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const deck = [];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 13; j++) {
    const card = { suit: suits[i], rank: rank[j] };
    deck.push(card);
  }
}

const shuffle = [];
while (deck.length > 0) {
  const index = Math.floor(Math.random() * deck.length);
  shuffle.push(deck[index]);
  deck.splice(index, 1);
}

for (let k = 0; k < players.length; k++) {
  players[k].hand = [shuffle[0], shuffle[1]];
  shuffle.splice(0, 2);
}

const faceCards = ['Jack', 'Queen', 'King'];
let winners = [];
let score = 0;
function cardValue(card) {
  if (typeof card.rank === 'string') {
    if (faceCards.indexOf(card.rank) > -1) {
      return 10;
    } else {
      return 11;
    }
  } else {
    return card.rank;
  }
}
for (let z = 0; z < players.length; z++) {
  var playerScore = cardValue(players[z].hand[0]) + cardValue(players[z].hand[1]);
  if (playerScore > score) {
    score = playerScore;
    winners = [];
    winners.push(players[z]);
  } else if (playerScore === score) {
    winners.push(players[z]);
  }
  console.log('player:', players[z].name, 'points:', playerScore, 'hand:', players[z].hand);
}

if (winners.length > 1) {
  console.log('Winners:', winners);
} else {
  console.log('Winner:', winners[0]);
}
