import mongojs from "mongojs"
import config from "../config"
import DatabaseQuery from "../database/databaseQuery"

class Auth {
    //jwtTokenKey: string
    adminCollection: string = "admins"
    userCollection: string = "users"

    // constructor(jwtTokenKey: string) {
    //     this.jwtTokenKey = jwtTokenKey
    // }

    async registerUser(user:any){
        try {
            let data = await DatabaseQuery.createDocument(config.dbName,this.adminCollection,user)
            return data
        } catch (error) {
            throw error 
        }        
    }

    async loginUser(username:string,password:string){
        let queryField = {
            username,
            password
        }
        try {
            let data = await DatabaseQuery.getOneDocument(config.dbName,this.userCollection,queryField)
            return data
        } catch (error) {
            throw error
        }
    }
}
export default Auth