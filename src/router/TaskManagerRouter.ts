import express from "express"
import TaskManagerController from "../controller/taskManagerController"
const router = express.Router()
const taskManagerController = new TaskManagerController()

router.post("/create-task",taskManagerController.createTask)
router.get("/get-task-with-range",taskManagerController.getTaskWithRange)
router.get("/get-total-count",taskManagerController.getTotalCount)
router.get("/:searchText/search",taskManagerController.searchTask)

export default router