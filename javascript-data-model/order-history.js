var orderHistory = [
  {
    orderPlaced: { month: 'August', day: 4, year: 2020 },
    total: '$34.40',
    shipTo: 'JS Masher',
    OrderNumber: '114-3941689-8772232',
    deliveredDate: { month: 'August', day: 8, year: 2020 },
    item: {
      title: 'JavaScript for impatient programmers',
      author: 'Rauschmayer, Dr. Axel',
      returnBy: { month: 'September', day: 7, year: 2020 },
      priceWithoutTax: '$31.55'
    }
  },
  {
    orderPlaced: { month: 'July', day: 19, year: 2020 },
    total: '$44.53',
    shipTo: 'JS Masher',
    OrderNumber: '113-9984268-1280257',
    deliveredDate: { month: 'Jul', day: 20, year: 2020 },
    item: {
      title: 'The Timeless Way of Building',
      author: 'Alexander, Christopher',
      returnBy: { month: 'August', day: 19, year: 2020 },
      priceWithoutTax: '$41.33'
    }
  },
  {
    orderPlaced: { month: 'July', day: 4, year: 2020 },
    total: '$17.22',
    shipTo: 'JS Masher',
    OrderNumber: '114-2875557-9059409',
    deliveredDate: { month: 'July', day: 7, year: 2020 },
    item: {
      title: 'Gamecube Controller Adapter',
      returnBy: { month: 'August', day: 5, year: 2020 },
      priceWithoutTax: '$15.98'
    }
  },
  {
    orderPlaced: { month: 'July', day: 3, year: 2020 },
    total: '$138.93',
    shipTo: 'JS Masher',
    OrderNumber: '113-28831777-2648248',
    deliveredDate: { month: 'July', day: 5, year: 2020 },
    item: [{
      title: 'GameCube Controller',
      returnBy: { month: 'August', day: 4, year: 2020 },
      priceWithoutTax: '$94.95'
    },
    {
      title: 'The Art of Sql',
      author: 'Faroult, Stephane',
      returnBy: { month: 'August', day: 4, year: 2020 },
      priceWithoutTax: '$33.99'
    }
    ]
  }
];

console.log(orderHistory);
