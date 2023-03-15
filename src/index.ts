import http from "http"
import express from "express"
import bodyParser from "body-parser"
import validator from "express-validator"
import AuthRouter from "./router/AuthRouter"
import TaskRouter from "./router/TaskRouter"
import TaskManagerRouter from "./router/TaskManagerRouter"
import UserRouter from "./router/UserRouter"
import UserManagerRouter from "./router/UserManagerRouter"

class App {
    httpPort: number = 3000
    app:any
    httpServer :any

    configs: Array<any> = [
        {
            name: "Access-Control-Allow-Origin",
            val: "*",
        },
        {
            name: "Access-Control-Allow-Methods",
            val: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        },
        {
            name: "Access-Control-Allow-Headers",
            val: "Origin, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,Content-Type, Date, X-Api-Version, x-access-token",
        },
    ]

    constructor(){
        this.setUpApplication()
    }

    setUpApplication(){
        this.app = express()

        //initalize to http server
        this.httpServer = http.createServer(this.app)

        this.app.use((req: any, res: any, next: any) => { this.configs.map((config: { name: string; val: string }) => res.set(config.name, config.val)); next() })

        //Use third party library
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(validator())

        //routes
        this.app.use("/api/auth",AuthRouter)
        this.app.use("/api/task",TaskRouter)
        this.app.use("/api/task-manager",TaskManagerRouter)
        this.app.use("/api/user",UserRouter)
        this.app.use("/api/user-manager",UserManagerRouter)
    }

    startServer() {
        // start listening the http server
        this.httpServer.listen(this.httpPort, () => {
            console.log("Http Server is running on port " + this.httpPort + ". \n ^c to exit.")
        })
    }
}
const expressApp = new App()
expressApp.startServer()