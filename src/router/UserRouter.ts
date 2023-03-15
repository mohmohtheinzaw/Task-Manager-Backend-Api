import UserController from "../controller/userController";
import express from "express"

const router = express.Router()
const userController = new UserController()

router.get("/:id/get-info",userController.getInfo)
router.put("/:id/update-info",userController.updateInfo)
router.delete("/:id",userController.delete)

export default router