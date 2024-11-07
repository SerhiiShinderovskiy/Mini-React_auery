const express = require('express');
const { default: axios } = require('axios');
const router = express.Router();

router.get('/posts', async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        res.json(response.data);
      } catch (error) {
        res.status(500).send("Failed request!")
        console.log(error);
    }
});

module.exports = router;