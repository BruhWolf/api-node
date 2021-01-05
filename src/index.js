const  Express =  require('express')
const router = require('./router')
const api = Express()

api.use(Express.json())
api.use(router)



api.listen(3333)