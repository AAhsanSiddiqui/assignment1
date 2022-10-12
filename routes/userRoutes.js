const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")
const authController = require("../controllers/authController")


router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);


router
.route("/")
.post(userController.creatUser)
.get(authController.protect, userController.getAllUser)


router
.route("/:id")
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser)


module.exports = router;