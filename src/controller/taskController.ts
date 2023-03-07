import Task from "../model/task";

class TaskController{
    async getInfo(req:any,res:any){
        req.checkParams("id","id must be mongoId").isMongoId()
        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let task = new Task(req.params.id)
        try {
            let data = await task.getInfo()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({msg:"Server Error!"})
        }
    }

    async updateInfo(req:any,res:any){
        req.checkParams("id","id must be mongoId").isMongoId()
        req.checkBody("title","title should not be empty").notEmpty()
        req.checkBody("topic","topic should not be empty").notEmpty()
        req.checkBody("time","time should not be empty").notEmpty()
        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let task = new Task(req.params.id)
        try {
            await task.updateInfo(req.body)
            res.status(200).json({msg:"Data Successfully updated!"})
        } catch (error) {
            res.status(500).json({msg:"Server Error!"})
        }
    }

    async delete(req:any,res:any){
        req.checkParams("id","id must be mongoId").isMongoId()
        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let task = new Task(req.params.id)
        try {
            await task.delete()
            res.status(200).json({msg:"Deleted!"})
        } catch (error) {
            res.status(500).json({msg:"Server Error!"})
        }
    }
}
export default TaskController