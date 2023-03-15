import mongojs from "mongojs"
import config from "../config"
import DatabaseQuery from "../database/databaseQuery"
const userCollection = "users"
class User{
    userId:string
    constructor(userId:string){
        this.userId = userId
    
    }
    async getInfo(){
        let queryField = {_id:mongojs.ObjectId(this.userId)}
        try {
            let data = await DatabaseQuery.getOneDocument(config.dbName,userCollection,queryField)
            return data
        } catch (error) {
            throw error
        }
    }

    async updateInfo(updateData:any){
        let queryField = {_id:mongojs.ObjectId(this.userId)}
        let updateField = {$set:{updateData}}
        try {
            let data = await DatabaseQuery.updateDocument(config.dbName,userCollection,queryField,updateField)
            return data
        } catch (error) {
            throw error
        }
    }

    async delete(){
        let queryField = {_id:mongojs.ObjectId(this.userId)}
        try {
            let data = await DatabaseQuery.deleteDocument(config.dbName,userCollection,queryField)
            return data
        } catch (error) {
            throw error
        }
    }
}
export default User