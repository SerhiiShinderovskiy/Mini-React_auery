require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const bodyParser = require('body-parser');
const router = require('./routes/main');

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(bodyParser.json());
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});