const express = require("express")
const router=express.Router()
const userController=require('../controller/userController')

router.route ('/')
.get(userController.getuserHome)

router.route('/signup')
.get(userController.getUserSignup)
.post(userController.getUserDatas)


// router.route("/submit")
// .post(userController.getUserData)



module.exports=router