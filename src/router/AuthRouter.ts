import express from "express"
import AuthController from "../controller/authController"
const router = express.Router()
const authController = new AuthController()

router.post("/register-user",authController.loginUser)
router.post("/login-user",authController.loginUser)

export default router