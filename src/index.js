const { request, response } = require('express')
const Express =  require('express')
const router = require('./router')
const api = Express()

api.use(Express.json())
api.use(router)
router.use('/static', Express.static(__dirname+ '/public'))
api.listen(3333)