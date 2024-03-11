// __tests__/recipeRoutes.test.js
const request = require('supertest');
const express = require('express');
const recipeRoutes = require('../routes/recipeRoutes');

const app = express();
app.use(express.json());
app.use('/api/recipes', recipeRoutes.router);

describe('Recipe API', () => {
  it('GET /api/recipes - should list all recipes', async () => {
    const res = await request(app).get('/api/recipes');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(expect.arrayContaining([])); // assuming initial state is an empty array
  });

  it('POST /api/recipes - should create a new recipe', async () => {
    const recipeData = {
      title: 'Test Recipe',
      ingredients: ['Test Ingredient 1', 'Test Ingredient 2'],
      instructions: ['Test Instruction 1', 'Test Instruction 2'],
    };

    const res = await request(app).post('/api/recipes').send(recipeData);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toEqual(recipeData.title);
    expect(res.body.image).toEqual('default.jpg'); // Check if default image is set
  });
});
