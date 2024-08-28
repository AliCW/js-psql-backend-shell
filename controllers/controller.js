const {
    demo
} = require('../model/model');

const axios = require('axios');

const listTestData = (request, response, next) => {
    demo(request.query).then((data) => {
        response.status(200).send({ data: data });
    })
    .catch(next);
};

module.exports = {
    listTestData
};