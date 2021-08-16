let nextId = 1;

const grades = {};

const express = require('./node_modules/express');
const app = express();

app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (const key in grades) {
    newArray.push(grades[key]);
  }
  res.json(newArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const id = nextId;
  const newGrade = req.body;
  newGrade.id = id;
  grades[id] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to port 3000!');
});
