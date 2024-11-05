require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Failed request!")
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});