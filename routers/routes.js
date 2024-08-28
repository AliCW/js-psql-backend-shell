const express = require('express');
const apiRouter = express.Router();

const {
    listTestData
} = require('../controllers/controller');

apiRouter.get('/example', listTestData);


module.exports = { apiRouter };