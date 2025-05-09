const mongoose = require('mongoose');

const MONGODB_URL = "mongodb+srv://pradeeptaniku:9036016116Pn@cluster0.l1ygj57.mongodb.net/nftify?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
    try {
        console.log('Attempting to connect to MongoDB...');
        console.log('Connection URL:', MONGODB_URL);
        
        // Set up connection options
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            family: 4,
            maxPoolSize: 10,
            minPoolSize: 5,
            retryWrites: true,
            w: 'majority'
        };

        console.log('Connection options:', options);
        
        // Set up event listeners
        mongoose.connection.on('connected', () => {
            console.log('Mongoose connected to MongoDB');
        });

        mongoose.connection.on('error', (err) => {
            console.error('Mongoose connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected from MongoDB');
        });

        // Attempt connection
        await mongoose.connect(MONGODB_URL, options);
        
        console.log('Successfully connected to MongoDB!');
        
        // Test a simple query
        const db = mongoose.connection;
        console.log('Database name:', db.name);
        console.log('Database host:', db.host);
        
        const collections = await db.db.listCollections().toArray();
        console.log('Available collections:', collections.map(c => c.name));
        
        // Test creating a document
        const testDoc = await db.collection('test').insertOne({ test: 'connection' });
        console.log('Test document created:', testDoc.insertedId);
        
        // Clean up
        await db.collection('test').deleteOne({ _id: testDoc.insertedId });
        console.log('Test document deleted');
        
        // Close the connection
        await mongoose.connection.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        if (error.name === 'MongoServerSelectionError') {
            console.error('Server selection error details:', {
                reason: error.reason,
                code: error.code,
                topology: error.topology
            });
        }
    }
}

testConnection(); 