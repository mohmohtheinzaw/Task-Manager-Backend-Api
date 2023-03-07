import mongojs from "mongojs"

/**
 * Database class using singleton pattern
 * When referencing the class you have to call the get database
 */
class DatabaseConnection {
    [x: string]: any;    
    static database: any

    /**
     * Overwrite the default constructor to prevent
     * creating a new object
     */
    private constructor() { }

    /**
     * Get the current database
     * @param dbName Database name to connect
     * @returns Database object
     */
    public static getConnection(dbName: string): DatabaseConnection {
        if (!DatabaseConnection.database) {
            DatabaseConnection.database = mongojs(dbName)
        }
        return this.database
    }
}

export default DatabaseConnection

