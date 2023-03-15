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
const user_1 = __importDefault(require("../model/user"));
class UserController {
    getInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.checkParams("id", "id must be mongoId").ismongoId();
            let validationErrors = req.validationErrors();
            if (validationErrors)
                return res.status(400).json(validationErrors);
            let user = new user_1.default(req.params.id);
            try {
                let data = yield user.getInfo();
                res.status(200).json(data);
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error." });
            }
        });
    }
    updateInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.checkParams("id", "id must be mongoId").ismongoId();
            req.checkBody("username", "username should not be empty").notEmpty();
            req.checkBody("password", "password should not be empty").notEmpty();
            let validationErrors = req.validationErrors();
            if (validationErrors)
                return res.status(400).json(validationErrors);
            let user = new user_1.default(req.params.id);
            try {
                yield user.updateInfo(req.body);
                res.status(200).json({ msg: "User data updated successfully ." });
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error ." });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.checkParams("id", "id must be mongo Id").ismongoId();
            let validationErrors = req.validationErrors();
            if (validationErrors)
                return res.status(400).json(validationErrors);
            let user = new user_1.default(req.params.id);
            try {
                yield user.delete();
                res.status(200).json({ msg: "User deleted successfully." });
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error ." });
            }
        });
    }
}
exports.default = UserController;
