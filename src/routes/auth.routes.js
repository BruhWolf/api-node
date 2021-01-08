
const {login} = require('./auth.handler')
const {} = require('../validation');
const { response } = require('express');

const auth = (router) => {
    router.post('/login', login)
}
module.exports = auth;