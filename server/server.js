const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const cors = require('cors');
const port = process.env.PORT || 5001;

const app = express();
app.use(cors());

app.listen(port, () => console.log(`Server started on port ${port.yellow}`));