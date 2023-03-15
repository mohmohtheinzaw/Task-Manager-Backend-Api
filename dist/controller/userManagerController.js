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
const userManager_1 = __importDefault(require("../model/userManager"));
class UserManagerController {
    totalCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userManager = new userManager_1.default();
            try {
                let data = yield userManager.totalCount();
                res.status(200).json(data);
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error !" });
            }
        });
    }
    userWithRange(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.checkBody("skip", "skip should not be empty").notEmpty();
            req.checkBody("limit", "limit should not be empty").notEmpty();
            let validationErrors = req.validationErrors();
            if (validationErrors)
                return res.status(400).json(validationErrors);
            let userManager = new userManager_1.default();
            try {
                let data = yield userManager.getUserWithRange(req.body.skip, req.body.limit);
                res.statu(200).json(data);
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error ." });
            }
        });
    }
    searchUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.checkQuery("searchText", "searchText should not be empty").notEmpty();
            let validationErrors = req.validationErrors();
            if (validationErrors)
                return res.status(400).json(validationErrors);
            let userManager = new userManager_1.default();
            try {
                let data = yield userManager.searchUser(req.query.search);
                res.status(200).json(data);
            }
            catch (error) {
                res.status(500).json({ msg: "Server Error ." });
            }
        });
    }
}
exports.default = UserManagerController;
