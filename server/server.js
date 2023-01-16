const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 3001;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/trades', require('/routes/tradeRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port.yellow}`));