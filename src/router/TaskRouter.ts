import express from "express"
import TaskController from "../controller/taskController"

const router = express.Router()
const taskController = new TaskController()

router.get("/:id/get-info",taskController.getInfo)
router.put("/:id/update-info",taskController.getInfo)
router.delete(":/id",taskController.delete)

export default router