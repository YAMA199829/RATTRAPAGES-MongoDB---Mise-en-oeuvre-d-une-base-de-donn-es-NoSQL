// app.js
// Configuration de l'application Express (middlewares, routes)

import express from 'express';
import cors from 'cors';
import './config/database.js';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API is running ' });
});

export default app;
