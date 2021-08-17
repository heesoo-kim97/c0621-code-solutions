const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.get('api/notes', (req, res) => {
  const newArray = [];
  for (const key in data.notes) {
    newArray.push(data.notes[key]);
  }
  res.status(200).json(newArray);
});

app.get('/api/notes/:id', (req, res) => {
  const userReq = parseInt(req.params.id);
  const error400 = {
    error: 'id must be a postive integer'
  };
  const error404 = {
    error: `cannot find note with id ${userReq}`
  };
  if (isNaN(userReq) === true) {
    res.status(400).json(error400);
  } else if (data.notes[userReq] === undefined) {
    res.status(404).json(error404);
  } else if (isNaN(userReq) === false) {
    res.status(200).json(data.notes[userReq]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const error400 = {
    error: 'content is a required field'
  };
  const error500 = { error: 'An unexpected error occurred.' };
  if (req.body.content === undefined) {
    res.status(400).json(error400);
  } else if (Boolean(newNote) === true) {
    const id = data.nextId;
    newNote.id = id;
    data.notes[newNote.id] = newNote;
    data.nextId++;
    const newObj = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newObj, 'utf8', err => {
      if (err) {
        res.status(500).json(error500);
      } else res.status(201).json(newNote);
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const userReq = parseInt(req.params.id);
  const error400 = {
    error: 'id must be a positive integer'
  };
  const error404 = {
    error: `cannot find note with id ${userReq}`
  };
  const error500 = {
    error: 'An unexpected error occurred.'
  };
  if (isNaN(userReq) === true) {
    res.status(400).json(error400);
  } else if (data.notes[userReq] === undefined) {
    res.status(404).json(error404);
  } else if (Boolean(data.notes[userReq]) === true) {
    delete data.notes[userReq];
    const newObj = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newObj, 'utf8', err => {
      if (err) {
        res.status(500).json(error500);
      } else res.status(204).json();
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const userReq = parseInt(req.params.id);
  const updatedNote = req.body;
  const error400integer = {
    error: 'id must be a positive integer'
  };
  const error400content = {
    error: 'content is a required field'
  };
  const error404 = {
    error: `cannot find note with id ${userReq}`
  };
  const error500 = {
    error: 'An unexpected error occurred.'
  };
  if (isNaN(userReq) === true) {
    res.status(400).json(error400integer);
  } else if (req.body.content === undefined) {
    res.status(400).json(error400content);
  } else if (data.notes[userReq] === undefined) {
    res.status(404).json(error404);
  } else if (Boolean(data.notes[userReq]) === true) {
    updatedNote.id = userReq;
    data.notes[userReq] = updatedNote;
    const newDataObj = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newDataObj, 'utf8', err => {
      if (err) {
        res.status(500).json(error500);
      } else res.status(200).json(updatedNote);
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
