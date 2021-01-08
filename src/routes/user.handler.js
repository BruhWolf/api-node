const database = require('../database')
const {createHash} = require('../security/bcrypt')
const {createToken} = require('../security/jwt')
 
const getUsers = async (request,response) => { 
    const users = database.getUsers()
    return response.json(users)
}
const createNewUser =  async (request,response)=>{
    const user = request.body
    const emailExists =  database.emailExists(user.email)
    if (emailExists) 
        response.json({message: 'This email  already exist'})
    else{
        await createHash(user.password, async hash =>{
        const res = database.createNewUser({...user, password:hash})
        const token = await createToken(res.id)
        return response.json({...res, password:undefined, token})
        })
}
}
 const updateUser = async (request,response) => {
    const target = request.params.id
    const newUserContent = request.body
    const updatedUser = database.updateUser(target,newUserContent) 
    return response.json(updatedUser)
}
 const updateUserByID = async (request,response) => {
    const target = request.params.id
    const newUserContent = request.body
    const updatedUser = database.updateUserByID(target,newUserContent)
    return response.json(updatedUser)
}
const deleteUser = async (request,response)=>{
    const target = request.params.id
    const res = database.deleteUser(target)
    response.json(res)
}
const getUserByID = async (request,response) => { 
    const id = request.params.id
    console.log(id)
    const user = database.getUserByID(id)
    return response.json(user)
}
 module.exports = {
    getUsers,
    createNewUser,
    updateUser,
    updateUserByID,
    deleteUser,
    getUserByID
 }