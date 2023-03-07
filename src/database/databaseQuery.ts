import DatabaseConnection from "./databaseConnection"

class DatabaseQuery {

    /**
    * Insert document to given collection
    * @param collectionName  collection Name of the database
    * @param document Document to insert
    * @return Database result
    */
    static async createDocument(dbName: string, collectionName: string, document: Object) {
        return new Promise((resolve: Function, reject: Function) => {
            let dbConnection = DatabaseConnection.getConnection(dbName)
            dbConnection[collectionName].insert(document, (err: any, data: any) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    /**
    * Insert documents to given collection
    * @param dbName Name of the required database
    * @param collectionName Collection name of the database
    * @param documents Documents to insert
    * @returns Database result
    */
    static async createDocuments(dbName: string, collectionName: string, documents: Array<Object>) {
        return new Promise((resolve: Function, reject: Function) => {
            let dbConnection = DatabaseConnection.getConnection(dbName)
            dbConnection[collectionName].insertMany(documents, (err: any, data: any) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    /**
     * Get all documents from an collection
     * @param dbName Name of the required database
     * @param collectionName Collection name of the database
     * @param queryField Fields that you want to query the result
     * @param requiredFields Your required fields from the result object
     * @returns Result documents
     */
    static async getAllDocuments(dbName: string, collectionName: string, queryField: Object = {}, requiredFields: Object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            let dbConnection = DatabaseConnection.getConnection(dbName)
            dbConnection[collectionName].find(queryField, requiredFields, (err: any, data: any) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    /**
     * Delete all documents from an collection
     * @param dbName Name of the required database
     * @param collectionName Collection name of the database
     * @param queryField Fields that you want to query the result
     * @returns Database result
     */
    static async deleteDocument(dbName: string, collectionName: string, queryField = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            let dbConnection = DatabaseConnection.getConnection(dbName)
            dbConnection[collectionName].remove(queryField, (err: any, data: any) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    /**
     * Get one document from a collection
     * @param collectionName collectionName of the database
     * @param queryField Field which you want to query the result
     * @param requiredField Your required fields from the result object
     * @retrun Result document
     */

    static async getOneDocument(dbName: string, collectionName: string, queryField: Object = {}, requiredField: Object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            let dbConnection = DatabaseConnection.getConnection(dbName)
            dbConnection[collectionName].findOne(queryField, requiredField, (err: any, data: any) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    /**
    * Get all documents from a collection with sorting number
    * @param collectionName Collection name of the database
    * @param queryField Fields that you want to query the result
    * @param requiredFields Your required fields from the result object
    * @param sortedField Field which you want to sort the result object 
    * @returns Result documents
    */
    static async getAllDocumentsWithSort(dbName: string, collectionName: string, queryField: Object = {}, requiredField: Object = {}, sortField: Object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            let dbConnection = DatabaseConnection.getConnection(dbName)
            dbConnection[collectionName].find(queryField, requiredField).sort(sortField, (err: any, data: any) => {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                else resolve(data)
            })
        })
    }

    /**
    * Update document from a collection
    * @param collectionName collection name of the database
    * @param queryField field which you want to query the result
    * @param updateField field which you want to update in document
    * @return updated document
    */
    static async updateDocument(dbName: string, collectionName: string, queryField: Object = {}, updateField: Object = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            let dbConnection = DatabaseConnection.getConnection(dbName)
            dbConnection[collectionName].update(queryField, updateField, (err: any, data: any) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
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
    static async getDocumentsWithSkipAndLimit(
        dbName: string,
        collectionName: string,
        skip: number,
        limit: number,
        queryField = {},
        requiredField = {}
    ) {
        return new Promise((resolve: Function, reject: Function) => {
            let dbConnection = DatabaseConnection.getConnection(dbName)
            dbConnection[collectionName]
                .find(queryField, requiredField)
                .skip(skip)
                .limit(limit, (err: any, data: any) => {
                    if (err) reject(err)
                    else resolve(data)
                })
        })
    }

    /**
     * Get total documents with required fields
     * @param dbName Name of the required database
     * @param collectionName Collection name of the database
     * @param queryFields Filds you want to query with the result
     * @returns Result documents
     */
    static async getTotalDocuments(dbName: string, collectionName: string, queryFields = {}) {
        return new Promise((resolve: Function, reject: Function) => {
            let dbConnection = DatabaseConnection.getConnection(dbName)
            dbConnection[collectionName].count(queryFields, (err: any, data: any) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    /**
     * Get random documents with count from collection
     * @param dbName Name of the required database
     * @param collectionName Collection name of the database
     * @param count Number of required documents
     * @returns Result documents
     */
    static async getRandomDocumentsWithLimit(dbName: string, collectionName: string, count: number) {
        return new Promise((resolve: Function, reject: Function) => {
            let dbConnection = DatabaseConnection.getConnection(dbName)
            dbConnection[collectionName].aggregate([{ $sample: { size: count } }], (err: any, data: any) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

}

export default DatabaseQuery
