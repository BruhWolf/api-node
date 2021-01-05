const {getUsers, createNewUser, updateUser, updateUserByID, deleteUser} = require('./user.handler')
const {
    validator,
    postUserValidation,
    delUserValidation,
    patchUserValidationBody,
    patchUserValidationParams,
    putUserValidationParams,
    putUserValidationBody
} = require('../validation')

const userRoutes = (router) => {
    router.get(     '/users',       getUsers),
    router.post(    '/users',       validator.body(postUserValidation),                                                     createNewUser   ),
    router.delete(  '/users/:id',   validator.params(delUserValidation),                                                    deleteUser      ),
    router.put(     '/users/:id',   validator.params(putUserValidationParams),   validator.body(putUserValidationBody),     updateUser      ),
    router.patch(   '/users/:id',   validator.params(patchUserValidationParams), validator.body(patchUserValidationBody),   updateUserByID  )
}
module.exports = userRoutes;