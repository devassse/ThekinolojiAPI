const express = require('express');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(express.json());
const API_VERSION = process.env.API_VERSION || '/api/v1';

app.use(`${API_VERSION}/posts`, postRoutes);
app.use(`${API_VERSION}/users`, userRoutes);

module.exports = app;