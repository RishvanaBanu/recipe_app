const express = require('express');
const mongoose = require('mongoose');

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
