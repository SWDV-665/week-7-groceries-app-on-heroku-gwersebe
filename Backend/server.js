const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const groceries = [];

// Get all groceries
app.get('/groceries', (req, res) => {
  res.send(groceries);
});

// Get a specific grocery
app.get('/groceries/:id', (req, res) => {
  const id = req.params.id;
  const grocery = groceries.find((g) => g.id === id);
  if (!grocery) {
    return res.status(404).send({ message: 'Grocery not found' });
  }
  res.send(grocery);
});

// Add a new grocery
app.post('/groceries', (req, res) => {
  const grocery = req.body;
  if (!grocery.name) {
    return res.status(400).send({ message: 'Name is required' });
  }
  grocery.id = Date.now().toString();
  groceries.push(grocery);
  res.status(201).send(grocery);
});

// Update a grocery
app.put('/groceries/:id', (req, res) => {
  const id = req.params.id;
  const groceryIndex = groceries.findIndex((g) => g.id === id);
  if (groceryIndex === -1) {
    return res.status(404).send({ message: 'Grocery not found' });
  }
  const grocery = req.body;
  if (!grocery.name) {
    return res.status(400).send({ message: 'Name is required' });
  }
  grocery.id = id;
  groceries[groceryIndex] = grocery;
  res.send(grocery);
});

// Delete a grocery
app.delete('/groceries/:id', (req, res) => {
  const id = req.params.id;
  const groceryIndex = groceries.findIndex((g) => g.id === id);
  if (groceryIndex === -1) {
    return res.status(404).send({ message: 'Grocery not found' });
  }
  groceries.splice(groceryIndex, 1);
  res.status(204).send();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
