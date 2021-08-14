const express = require('express');

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const app = express();

app.get('/api/grades', (req, res) => {
  const keepGrades = [];
  for (const key in grades) {
    keepGrades.push(grades[key]);
  }
  res.json(keepGrades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000');
});
