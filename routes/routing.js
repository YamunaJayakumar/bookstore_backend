//import express
const express=require('express')
const userController = require('../controller/userController')
//create router object
const router=new express.Router()
//define path for client api request
//register
router.post('/register',userController.registerController)
router.post('/login',userController.loginController)
router.post('/google/sign-in',userController.GoogleLoginController)
module.exports=router