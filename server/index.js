import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import sequelize from './db.js';
import models from './models/models.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log('error: ', error);
  }
};

start();
