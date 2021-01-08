const { request, response } = require('express')
const Express =  require('express')
const bcrypt = require('bcryptjs')
const router = require('./router')
const cors = require('cors')
const api = Express()
require('dotenv').config()
api.use(Express.json())
api.use(cors())
api.use(router)
router.use('/static', Express.static(__dirname+ '/public'))


api.post('/createhash',(request,response)=>{


     bcrypt.hash(request.body.senha, 10,(err,hash)=>{
        return response.json({senha:hash })
    })


})
api.listen(process.env.PORT || 3333)