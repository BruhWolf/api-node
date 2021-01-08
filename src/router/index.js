const Express = require('express')
const usersRoutes = require('../routes/user.routes')
const auth = require('../routes/auth.routes')
const aulas = require('../routes/aulas.routes')
const router = Express()

usersRoutes(router)
auth(router)
aulas(router)
module.exports = router