const {getUsers, createNewUser, updateUser, updateUserByID, deleteUser,getUserByID} = require('./user.handler')
const {
    validator,
    postUserValidation,
    delUserValidation,
    patchUserValidationBody,
    patchUserValidationParams,
    putUserValidationParams,
    putUserValidationBody
} = require('../validation')

const usersRoutes = (router) => {
    router.get(     '/users',       getUsers),
    router.post(    '/users',       validator.body(postUserValidation),                                                     createNewUser   ),
    router.get(     '/user/:id',      getUserByID),
    router.delete(  '/users/:id',   validator.params(delUserValidation),                                                    deleteUser      ),
    router.put(     '/users/:id',   validator.params(putUserValidationParams),   validator.body(putUserValidationBody),     updateUser      ),
    router.patch(   '/users/:id',   validator.params(patchUserValidationParams), validator.body(patchUserValidationBody),   updateUserByID  )
}
module.exports = usersRoutes;