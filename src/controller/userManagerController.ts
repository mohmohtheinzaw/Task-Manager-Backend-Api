import UserManager from "../model/userManager";
class UserManagerController{
    async totalCount(req:any,res:any){
        let userManager = new UserManager()
        try {
            let data = await userManager.totalCount()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({msg:"Server Error !"})
        }
    }

    async userWithRange(req:any,res:any){
        req.checkBody("skip","skip should not be empty").notEmpty()
        req.checkBody("limit","limit should not be empty").notEmpty()
        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let userManager = new UserManager()
        try {
            let data = await userManager.getUserWithRange(req.body.skip,req.body.limit)
            res.statu(200).json(data)
        } catch (error) {
            res.status(500).json({msg:"Server Error ."})  
        }
    }

    async searchUser(req:any,res:any){
        req.checkQuery("searchText","searchText should not be empty").notEmpty()
        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let userManager = new UserManager()
        try {
            let data = await userManager.searchUser(req.query.search)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({msg:"Server Error ."})
        }
    }
}
export default UserManagerController
