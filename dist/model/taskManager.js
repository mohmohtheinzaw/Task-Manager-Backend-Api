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
const config_1 = __importDefault(require("../config"));
const databaseQuery_1 = __importDefault(require("../database/databaseQuery"));
const taskColletion = "tasks";
class TaskManager {
    createTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield databaseQuery_1.default.createDocument(config_1.default.dbName, taskColletion, task);
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield databaseQuery_1.default.getAllDocuments(config_1.default.dbName, taskColletion);
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getTotalTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield databaseQuery_1.default.getTotalDocuments(config_1.default.dbName, taskColletion);
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getTaskWithRange(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield databaseQuery_1.default.getDocumentsWithSkipAndLimit(config_1.default.dbName, taskColletion, skip, limit);
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
    searchTasks(searchText) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryField = { $text: { $search: searchText } };
            try {
                let result = yield databaseQuery_1.default.getAllDocuments(config_1.default.dbName, taskColletion, queryField);
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = TaskManager;
