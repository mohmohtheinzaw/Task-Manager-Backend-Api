"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const taskManager_1 = __importDefault(require("../model/taskManager"));
class TaskManagerController {
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.checkBody("title", "title should not be empty").notEmpty();
            req.checkBody("topic", "topic should not be empty").notEmpty();
            req.checkBody("time", "time should not be empty").notEmpty();
            let validationErrors = req.validationErrors();
            if (validationErrors)
                return res.status(400).json(validationErrors);
            let taskManager = new taskManager_1.default();
            try {
                let result = yield taskManager.createTask(req.body);
                res.status(200).json(result, { msg: "Task created successfully!" });
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error!" });
            }
        });
    }
    getTotalCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let taskManager = new taskManager_1.default();
            try {
                let result = yield taskManager.getTotalTasks();
                res.status(200).json(result);
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error!" });
            }
        });
    }
    getTaskWithRange(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.checkQuery("skip", "skip should not be empty").notEmpty();
            req.checkQuery("limit", "limit should not be empty").notEmpty();
            let validationErrors = req.validationErrors();
            if (validationErrors)
                return res.status(400).json(validationErrors);
            let taskManager = new taskManager_1.default();
            try {
                let result = yield taskManager.getTaskWithRange(req.query.skip, req.query.limit);
                res.status(200).json(result);
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error!" });
            }
        });
    }
    searchTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.checkParams("searchText", "searchText should not be empty").notEmpty();
            let validationErrors = req.validationErrors();
            if (validationErrors)
                return res.status(400).json(validationErrors);
            let taskManager = new taskManager_1.default();
            try {
                let result = yield taskManager.searchTasks(req.params.searchTask);
                res.status(200).json(result);
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error!" });
            }
        });
    }
}
exports.default = TaskManagerController;
