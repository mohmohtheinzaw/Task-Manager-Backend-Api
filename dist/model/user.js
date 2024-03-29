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
const mongojs_1 = __importDefault(require("mongojs"));
const config_1 = __importDefault(require("../config"));
const databaseQuery_1 = __importDefault(require("../database/databaseQuery"));
const userCollection = "users";
class User {
    constructor(userId) {
        this.userId = userId;
    }
    getInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            let queryField = { _id: mongojs_1.default.ObjectId(this.userId) };
            try {
                let data = yield databaseQuery_1.default.getOneDocument(config_1.default.dbName, userCollection, queryField);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateInfo(updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryField = { _id: mongojs_1.default.ObjectId(this.userId) };
            let updateField = { $set: { updateData } };
            try {
                let data = yield databaseQuery_1.default.updateDocument(config_1.default.dbName, userCollection, queryField, updateField);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            let queryField = { _id: mongojs_1.default.ObjectId(this.userId) };
            try {
                let data = yield databaseQuery_1.default.deleteDocument(config_1.default.dbName, userCollection, queryField);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = User;
