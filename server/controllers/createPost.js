const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

router.post('/add-post', async (req, res) => {
    try {
        const { title, body, userId } = req.body;
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title,
            body,
            userId,
        });
        res.status(201).json(response.data);
        console.log(response.data);
    } catch (error) {
        res.status(500).send("Failes to create post!");
        console.log(error);
    }
});

module.exports = router;