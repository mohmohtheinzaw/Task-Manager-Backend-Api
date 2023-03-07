"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongojs_1 = __importDefault(require("mongojs"));
/**
 * Database class using singleton pattern
 * When referencing the class you have to call the get database
 */
class DatabaseConnection {
    /**
     * Overwrite the default constructor to prevent
     * creating a new object
     */
    constructor() { }
    /**
     * Get the current database
     * @param dbName Database name to connect
     * @returns Database object
     */
    static getConnection(dbName) {
        if (!DatabaseConnection.database) {
            DatabaseConnection.database = (0, mongojs_1.default)(dbName);
        }
        return this.database;
    }
}
exports.default = DatabaseConnection;
