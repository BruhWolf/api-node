const Express = require('express')
const router = Express()
const {getUsers, createNewUser, updateUser, updateUserByID, deleteUser} = require('./routes/user.handler')

const userRoutes = (router) => {
    router.get('/users', getUsers),
    router.post('/users',createNewUser),
    router.delete('/users/:id',deleteUser),
    router.put('/users/:id',updateUser),
    router.patch('/users/:id',updateUserByID)
}
userRoutes(router)

module.exports = router