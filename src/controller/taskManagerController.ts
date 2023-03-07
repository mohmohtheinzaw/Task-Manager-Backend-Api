import TaskManager from "../model/taskManager";

class TaskManagerController{
    async createTask(req:any,res:any){
        req.checkBody("title","title should not be empty").notEmpty()
        req.checkBody("topic","topic should not be empty").notEmpty()
        req.checkBody("time","time should not be empty").notEmpty()
        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let taskManager = new TaskManager()
        try {
            let result = await taskManager.createTask(req.body)
            res.status(200).json(result,{msg:"Task created successfully!"})
        } catch (error) {
            res.status(500).json({msg:"Server Error!"})
        }
    }

    async getTotalCount(req:any,res:any){
        let taskManager = new TaskManager()
        try {
            let result = await taskManager.getTotalTasks()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({msg:"Server Error!"})
        }
    }

    async getTaskWithRange(req:any,res:any){
        req.checkQuery("skip","skip should not be empty").notEmpty()
        req.checkQuery("limit","limit should not be empty").notEmpty()
        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let taskManager = new TaskManager()
        try {
            let result = await taskManager.getTaskWithRange(req.query.skip,req.query.limit)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({msg:"Server Error!"})
        }
    }

    async searchTask(req:any,res:any){
        req.checkParams("searchText","searchText should not be empty").notEmpty()
        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let taskManager = new TaskManager()
        try {
            let result = await taskManager.searchTasks(req.params.searchTask)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({msg:"Server Error!"})
        }
    }
}
export default TaskManagerController