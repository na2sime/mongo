const MongoClient = require('mongodb').MongoClient;

// Connexion à MongoDB
const url = 'mongodb://localhost:27017,localhost:27018,localhost:27019/?replicaSet=rs0';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('test');
        const collection = db.collection('users');

        // Insertion des données
        const fakeData = require('../data/fake_data.json');
        await collection.insertMany(fakeData);
        console.log('Inserted fake data into users collection');

        // Lecture des utilisateurs de plus de 30 ans
        const usersOver30 = await collection.find({ age: { $gt: 30 } }).toArray();
        console.log('Users over 30 years old:', usersOver30);

        // Mise à jour de l'âge des utilisateurs
        await collection.updateMany({}, { $inc: { age: 5 } });
        console.log('Updated ages of all users');

        // Suppression d'un utilisateur spécifique
        await collection.deleteOne({ name: 'John Doe' });
        console.log('Deleted user John Doe');

    } catch (err) {
        console.error('Error:', err);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

main();