
var express = require('express')
var router = express.Router()

const userController = require('../Controllers/controller')

router.get('/users' ,  userController.getAll)

router.post('/creatingUsers', userController.createUser)

router.put('/selectedSingleUsers/:id', userController.updateUserById)

router.get('/selectedUser/:id', userController.getUserById)

router.delete('/remove/:id', userController.deleteingUser) 





module.exports = router;