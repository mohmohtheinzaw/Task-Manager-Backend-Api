"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_validator_1 = __importDefault(require("express-validator"));
//import TaskRouter from "../src/router/taskRouter"
//import TaskManagerRouter from "../src/router/taskManagerRouter"
const TaskRouter_1 = __importDefault(require("./router/TaskRouter"));
const TaskManagerRouter_1 = __importDefault(require("./router/TaskManagerRouter"));
class App {
    constructor() {
        this.httpPort = 3000;
        this.configs = [
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
        ];
        this.setUpApplication();
    }
    setUpApplication() {
        this.app = (0, express_1.default)();
        //initalize to http server
        this.httpServer = http_1.default.createServer(this.app);
        this.app.use((req, res, next) => { this.configs.map((config) => res.set(config.name, config.val)); next(); });
        //Use third party library
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use((0, express_validator_1.default)());
        //routes
        this.app.use("/api/task", TaskRouter_1.default);
        this.app.use("/api/task-manager", TaskManagerRouter_1.default);
    }
    startServer() {
        // start listening the http server
        this.httpServer.listen(this.httpPort, () => {
            console.log("Http Server is running on port " + this.httpPort + ". \n ^c to exit.");
        });
    }
}
const expressApp = new App();
expressApp.startServer();
