const fs = require('fs');
const data = require('./data.json');
const feature = process.argv[2];

if (feature === 'read') {
  for (const key in data.notes) {
    console.log(key + ':', data.notes[key]);
  }
} else if (feature === 'create') {
  data.notes[data.nextId] = process.argv[3];
  data.nextId++;
} else if (feature === 'delete') {
  delete data.notes[process.argv[3]];
} else if (feature === 'update') {
  data.notes[process.argv[3]] = process.argv[4];
}

const newData = JSON.stringify(data, null, 2);

fs.writeFile('data.json', newData, 'utf8', err => {
  if (err) throw err;
});
