const express = require('express');
const app = express();

const path = require('path');
const middleware = path.join(__dirname, 'public');

app.use(express.static(middleware));

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
