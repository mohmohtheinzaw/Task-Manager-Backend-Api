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
const databaseConnection_1 = __importDefault(require("./databaseConnection"));
class DatabaseQuery {
    /**
    * Insert document to given collection
    * @param collectionName  collection Name of the database
    * @param document Document to insert
    * @return Database result
    */
    static createDocument(dbName, collectionName, document) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let dbConnection = databaseConnection_1.default.getConnection(dbName);
                dbConnection[collectionName].insert(document, (err, data) => {
                    if (err)
                        reject(err);
                    else
                        resolve(data);
                });
            });
        });
    }
    /**
    * Insert documents to given collection
    * @param dbName Name of the required database
    * @param collectionName Collection name of the database
    * @param documents Documents to insert
    * @returns Database result
    */
    static createDocuments(dbName, collectionName, documents) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let dbConnection = databaseConnection_1.default.getConnection(dbName);
                dbConnection[collectionName].insertMany(documents, (err, data) => {
                    if (err)
                        reject(err);
                    else
                        resolve(data);
                });
            });
        });
    }
    /**
     * Get all documents from an collection
     * @param dbName Name of the required database
     * @param collectionName Collection name of the database
     * @param queryField Fields that you want to query the result
     * @param requiredFields Your required fields from the result object
     * @returns Result documents
     */
    static getAllDocuments(dbName, collectionName, queryField = {}, requiredFields = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let dbConnection = databaseConnection_1.default.getConnection(dbName);
                dbConnection[collectionName].find(queryField, requiredFields, (err, data) => {
                    if (err)
                        reject(err);
                    else
                        resolve(data);
                });
            });
        });
    }
    /**
     * Delete all documents from an collection
     * @param dbName Name of the required database
     * @param collectionName Collection name of the database
     * @param queryField Fields that you want to query the result
     * @returns Database result
     */
    static deleteDocument(dbName, collectionName, queryField = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let dbConnection = databaseConnection_1.default.getConnection(dbName);
                dbConnection[collectionName].remove(queryField, (err, data) => {
                    if (err)
                        reject(err);
                    else
                        resolve(data);
                });
            });
        });
    }
    /**
     * Get one document from a collection
     * @param collectionName collectionName of the database
     * @param queryField Field which you want to query the result
     * @param requiredField Your required fields from the result object
     * @retrun Result document
     */
    static getOneDocument(dbName, collectionName, queryField = {}, requiredField = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let dbConnection = databaseConnection_1.default.getConnection(dbName);
                dbConnection[collectionName].findOne(queryField, requiredField, (err, data) => {
                    if (err)
                        reject(err);
                    else
                        resolve(data);
                });
            });
        });
    }
    /**
    * Get all documents from a collection with sorting number
    * @param collectionName Collection name of the database
    * @param queryField Fields that you want to query the result
    * @param requiredFields Your required fields from the result object
    * @param sortedField Field which you want to sort the result object
    * @returns Result documents
    */
    static getAllDocumentsWithSort(dbName, collectionName, queryField = {}, requiredField = {}, sortField = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let dbConnection = databaseConnection_1.default.getConnection(dbName);
                dbConnection[collectionName].find(queryField, requiredField).sort(sortField, (err, data) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    else
                        resolve(data);
                });
            });
        });
    }
    /**
    * Update document from a collection
    * @param collectionName collection name of the database
    * @param queryField field which you want to query the result
    * @param updateField field which you want to update in document
    * @return updated document
    */
    static updateDocument(dbName, collectionName, queryField = {}, updateField = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let dbConnection = databaseConnection_1.default.getConnection(dbName);
                dbConnection[collectionName].update(queryField, updateField, (err, data) => {
                    if (err)
                        reject(err);
                    else
                        resolve(data);
                });
            });
        });
    }
    /**
     * Get documents from collection with skip and limit
     * @static
     * @param dbName Name of the required database
     * @param collectionName Collection name of the database
     * @param skip Numbers of documents to skip
     * @param limit Numbers of documents to limit
     * @param queryField Fields that you want to query the result
     * @param requiredField Your required fields from the result object
     * @returns Result documents
     */
    static getDocumentsWithSkipAndLimit(dbName, collectionName, skip, limit, queryField = {}, requiredField = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let dbConnection = databaseConnection_1.default.getConnection(dbName);
                dbConnection[collectionName]
                    .find(queryField, requiredField)
                    .skip(skip)
                    .limit(limit, (err, data) => {
                    if (err)
                        reject(err);
                    else
                        resolve(data);
                });
            });
        });
    }
    /**
     * Get total documents with required fields
     * @param dbName Name of the required database
     * @param collectionName Collection name of the database
     * @param queryFields Filds you want to query with the result
     * @returns Result documents
     */
    static getTotalDocuments(dbName, collectionName, queryFields = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let dbConnection = databaseConnection_1.default.getConnection(dbName);
                dbConnection[collectionName].count(queryFields, (err, data) => {
                    if (err)
                        reject(err);
                    else
                        resolve(data);
                });
            });
        });
    }
    /**
     * Get random documents with count from collection
     * @param dbName Name of the required database
     * @param collectionName Collection name of the database
     * @param count Number of required documents
     * @returns Result documents
     */
    static getRandomDocumentsWithLimit(dbName, collectionName, count) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let dbConnection = databaseConnection_1.default.getConnection(dbName);
                dbConnection[collectionName].aggregate([{ $sample: { size: count } }], (err, data) => {
                    if (err)
                        reject(err);
                    else
                        resolve(data);
                });
            });
        });
    }
}
exports.default = DatabaseQuery;
