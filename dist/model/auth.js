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
class Auth {
    constructor() {
        //jwtTokenKey: string
        this.adminCollection = "admins";
        this.userCollection = "users";
    }
    // constructor(jwtTokenKey: string) {
    //     this.jwtTokenKey = jwtTokenKey
    // }
    registerUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield databaseQuery_1.default.createDocument(config_1.default.dbName, this.adminCollection, user);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    loginUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryField = {
                username,
                password
            };
            try {
                let data = yield databaseQuery_1.default.getOneDocument(config_1.default.dbName, this.userCollection, queryField);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = Auth;
