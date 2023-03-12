import Auth from "../model/auth";
class AuthController{
    async registerUser(req:any,res:any){
        req.checkBody("username","username should not be empty").notEmpty()
        req.checkBody("password","password should not be empty").notEmpty()
        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let auth = new Auth()
        try {
            let data = await auth.registerUser(req.body)
            res.statu(200).json(data)
        } catch (error) {
            res.status(500).json({msg:"Server Errors"})
        }
    }

    async loginUser(req:any,res:any){
        req.checkBody("username","username should not be empty").notEmpty()
        req.checkBody("password","password should not be empty").notEmpty()
        let validationErrors = req.validationErrors()
        if(validationErrors) return res.status(400).json(validationErrors)
        let auth = new Auth()
        try {
            let data = await auth.loginUser(req.body.username,req.body.password)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({msg:"Server Errors"})
        }
    }
}
export default AuthController