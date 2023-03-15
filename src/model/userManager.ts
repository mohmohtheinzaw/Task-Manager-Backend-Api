import mongojs from "mongojs"
import DatabaseQuery from "../database/databaseQuery"
import config from "../config"
const userCollection = "users"
class UserManager {
    async createUser(userData:any){
        try {
            let data = await DatabaseQuery.createDocument(config.dbName,userCollection,userData)
            return data
        } catch (error) {
            throw error
        }
    }

    async totalCount(){
        try {
            let data = await DatabaseQuery.getTotalDocuments(config.dbName,userCollection)
            return data
        } catch (error) {
            throw error
        }
    }

    async getUserWithRange(skip:number,limit:number){
        try {
            let data = await DatabaseQuery.getDocumentsWithSkipAndLimit(config.dbName,userCollection,skip,limit)
            return data
        } catch (error) {
            throw error
        }
    }

    async searchUser(search:string){
        let searchField = {$text:{$search:search}}
        try {
            let data = await DatabaseQuery.getAllDocuments(config.dbName,userCollection,searchField)
            return data
        } catch (error) {
            throw error
        }
    }
}
export default UserManager