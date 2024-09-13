const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/ProductModel');

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (request, response) => {
  response.send('server is running');
});

app.get('/status', (request, response) => {
  const status = {
    Status: 'Runnning',
  };
  response.send(status);
});

app.post('/product', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    'mongodb+srv://rishvanabanuibramsha20:Admin123@recipedatabase.vq8pn.mongodb.net/recipeApp?retryWrites=true&w=majority&appName=RecipeDatabase'
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log('Server listening the :', PORT);
    });
  })
  .catch((error) => console.log(console.log(error)));
