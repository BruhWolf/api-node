const database = require('../database')
 
const getUsers = async (request,response) => { 
    const users = database.getUsers()
    return response.json(users)
}
const createNewUser =  async (request,response)=>{
    const user = request.body
    const res = database.createNewUser(user)
    return response.json(res)
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
 module.exports = {
    getUsers,
    createNewUser,
    updateUser,
    updateUserByID,
    deleteUser,
 }