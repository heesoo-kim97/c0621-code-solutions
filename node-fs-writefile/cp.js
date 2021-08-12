
const fs = require('fs');
const text = process.argv.slice(2);
const [first, second] = text;

function writeFile(data) {
  fs.writeFile(second, data + '\n', err => {
    if (err) throw err;
  });
}

fs.readFile(first, 'utf8', (err, data) => {
  if (err) throw err;
  writeFile(data);
});
