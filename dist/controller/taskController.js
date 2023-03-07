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
const task_1 = __importDefault(require("../model/task"));
class TaskController {
    getInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.checkParams("id", "id must be mongoId").isMongoId();
            let validationErrors = req.validationErrors();
            if (validationErrors)
                return res.status(400).json(validationErrors);
            let task = new task_1.default(req.params.id);
            try {
                let data = yield task.getInfo();
                res.status(200).json(data);
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error!" });
            }
        });
    }
    updateInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.checkParams("id", "id must be mongoId").isMongoId();
            req.checkBody("title", "title should not be empty").notEmpty();
            req.checkBody("topic", "topic should not be empty").notEmpty();
            req.checkBody("time", "time should not be empty").notEmpty();
            let validationErrors = req.validationErrors();
            if (validationErrors)
                return res.status(400).json(validationErrors);
            let task = new task_1.default(req.params.id);
            try {
                yield task.updateInfo(req.body);
                res.status(200).json({ msg: "Data Successfully updated!" });
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error!" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.checkParams("id", "id must be mongoId").isMongoId();
            let validationErrors = req.validationErrors();
            if (validationErrors)
                return res.status(400).json(validationErrors);
            let task = new task_1.default(req.params.id);
            try {
                yield task.delete();
                res.status(200).json({ msg: "Deleted!" });
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error!" });
            }
        });
    }
}
exports.default = TaskController;
