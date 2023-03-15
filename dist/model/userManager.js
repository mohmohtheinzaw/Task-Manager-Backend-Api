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
const databaseQuery_1 = __importDefault(require("../database/databaseQuery"));
const config_1 = __importDefault(require("../config"));
const userCollection = "users";
class UserManager {
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield databaseQuery_1.default.createDocument(config_1.default.dbName, userCollection, userData);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    totalCount() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield databaseQuery_1.default.getTotalDocuments(config_1.default.dbName, userCollection);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getUserWithRange(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield databaseQuery_1.default.getDocumentsWithSkipAndLimit(config_1.default.dbName, userCollection, skip, limit);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    searchUser(search) {
        return __awaiter(this, void 0, void 0, function* () {
            let searchField = { $text: { $search: search } };
            try {
                let data = yield databaseQuery_1.default.getAllDocuments(config_1.default.dbName, userCollection, searchField);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = UserManager;
