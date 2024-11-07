const express = require('express');
const router = express.Router();

const getPosts = require('../controllers/getPosts');
const createPost = require('../controllers/createPost');

router.use('/', getPosts);
router.use('/', createPost);

module.exports = router