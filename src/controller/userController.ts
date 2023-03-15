import User from "../model/user";
class UserController {
    async getInfo(req:any,res:any){
        req.checkParams("id","id must be mongoId").ismongoId()
        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let user = new User(req.params.id)
        try {
            let data = await user.getInfo()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({msg:"Server Error."})
        }
    }

    async updateInfo(req:any,res:any){
        req.checkParams("id","id must be mongoId").ismongoId()
        req.checkBody("username","username should not be empty").notEmpty()
        req.checkBody("password","password should not be empty").notEmpty()

        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let user = new User(req.params.id)
        try {
            await user.updateInfo(req.body)
            res.status(200).json({msg:"User data updated successfully ."})
        } catch (error) {
            res.status(500).json({msg:"Server Error ."})
        }
    }

    async delete(req:any,res:any){
        req.checkParams("id","id must be mongo Id").ismongoId()
        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let user = new User(req.params.id)
        try {
            await user.delete()
            res.status(200).json({msg:"User deleted successfully."})
        } catch (error) {
            res.status(500).json({msg:"Server Error ."})
        }
    }
}
export default UserController