import express from "express"
import UserManagerController from "../controller/userManagerController"

const router = express.Router()
const userManagerController = new UserManagerController()

router.get("/get-total",userManagerController.totalCount)
router.get("/search",userManagerController.searchUser)
router.post("/users-with-range",userManagerController.userWithRange)

export default router