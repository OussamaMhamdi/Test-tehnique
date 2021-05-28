const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');



router.get('/', userController.GetUsers);

router.post('/Regestir', userController.AddUser);

router.get('/Login', userController.Login)

module.exports = router ;