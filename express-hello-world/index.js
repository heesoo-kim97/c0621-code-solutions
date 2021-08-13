const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('ESKEEITTT!!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to port 3000');
});
