import mongojs from "mongojs"
import config from "../config"
import DatabaseQuery from "../database/databaseQuery"

const taskColletion:string = "tasks"

class TaskManager{
    async createTask(task:any){
        try {
            let result = await DatabaseQuery.createDocument(config.dbName,taskColletion,task)
            return result
        } catch (error) {
            throw error
        }
    }

    async getAllTasks(){
        try {
            let result = await DatabaseQuery.getAllDocuments(config.dbName,taskColletion)
            return result
        } catch (error) {
            throw error
        }
    }

    async getTotalTasks(){
        try {
            let result = await DatabaseQuery.getTotalDocuments(config.dbName,taskColletion)
            return result
        } catch (error) {
            throw error
        }
    }

    async getTaskWithRange(skip:number,limit:number){
        try {
            let result = await DatabaseQuery.getDocumentsWithSkipAndLimit(config.dbName,taskColletion,skip,limit)
            return result
        } catch (error) {
            throw error
        }
    }

    async searchTasks(searchText:string){
        let queryField = { $text: { $search: searchText } }
        try {
            let result = await DatabaseQuery.getAllDocuments(config.dbName,taskColletion,queryField)
            return result
        } catch (error) {
            throw error
        }
    }
}

export default TaskManager