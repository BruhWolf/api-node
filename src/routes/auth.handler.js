const { response } = require('express')
const database = require('../database')
const {createToken} = require('../security/jwt.js')
const {compare} = require('../security/bcrypt')



const login = async (request, response) => {
    const {email,password} = request.body
    const user = database.getUserByEmail(email)
    if(!user)
        response.status(400).send({error: 'User not found'})
    else if(!await compare(password, user.password) )
        response.status(400).send({error: 'Password invalid'})
    else{
        const token =  await createToken(user.id)
        response.json({user:{...user, password:undefined},token})
    }
}
module.exports = {
    login
}
