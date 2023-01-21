const express = require('express');
const path = require('path');
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
app.use('/api/trades', require('./routes/tradeRoutes'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port.yellow}`));