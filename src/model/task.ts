import mongojs from "mongojs"
import config from "../config"
import DatabaseQuery from "../database/databaseQuery"
const taskColletion:string = "tasks"
class Task{
    taskId :string
    constructor(taskId:string){
        this.taskId = taskId
    }

    async getInfo(){
        let queryField = {_id :mongojs.ObjectId(this.taskId)}
        try {
            let result = await DatabaseQuery.getOneDocument(config.dbName,taskColletion,queryField)
            return result
        } catch (error) {
            throw error
        }
    }

    async updateInfo(updateData:any){
        let queryField = {_id:mongojs.ObjectId(this.taskId)}
        let updateField = {$set:{updateData}}
        try {
            let result = await DatabaseQuery.updateDocument(config.dbName,taskColletion,queryField,updateField)
            return result
        } catch (error) {
            throw error   
        }
    }

    async delete(){
        let queryField = {_id:mongojs.ObjectId(this.taskId)}
        try {
            let result = await DatabaseQuery.deleteDocument(config.dbName,taskColletion,queryField)
            return result
        } catch (error) {
            throw error
        }
    }


}
export default Task