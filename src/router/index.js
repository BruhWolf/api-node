const Express = require('express')
const userRoutes = require('../routes/user.routes')
const router = Express()

userRoutes(router)


module.exports = router