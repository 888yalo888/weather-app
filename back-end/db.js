const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.DB_URL);

// (async () => {
//     try {
//         console.log('Connecting to database at:', process.env.DB_URL);
//         await mongoose.connect(process.env.DB_URL);
//         console.log('Successfully connected to the database');
//     } catch (error) {
//         console.error('Error connecting to the database:', error);
//     }
// })();

const database = client.db('Weather-app');

const SavedLocation = database.collection('SavedLocation');

const User = database.collection('User');

const Token = database.collection('Token');

module.exports = {
    User,
    SavedLocation,
    Token,
};
