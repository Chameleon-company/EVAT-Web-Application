const { MongoClient } = require('mongodb');

class MongoDB {
    constructor() {
        this.client = null;
        this.db = null;
    }

    async connect() {
        const uri = process.env.MONGO_URI; // MongoDB URI from .env file
        if (!uri) {
            throw new Error("Mongo URI not found in environment variables");
        }

        try {
            this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await this.client.connect();
            this.db = this.client.db(process.env.DB_NAME); // Database name from .env
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Failed to connect to MongoDB', error);
            throw error;
        }
    }

    getDB() {
        if (!this.db) {
            throw new Error("Database not connected");
        }
        return this.db;
    }

    async close() {
        if (this.client) {
            await this.client.close();
            console.log('MongoDB connection closed');
        }
    }
}

module.exports = MongoDB;