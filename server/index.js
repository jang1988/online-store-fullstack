import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import sequelize from './db.js';
// import models from './models/models.js';
import cors from 'cors';
import fileupload from 'express-fileupload';

import router from './routes/index.js';
import errorHandler from './middleweare/ErrorHandingMidleweare.js';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())
app.use(fileupload({}));
app.use(express.static('static'));
app.use('/api',router)

//Обработка ошибокб последний Middleweare
app.use(errorHandler)







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
