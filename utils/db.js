import { MongoClient } from 'mongodb';
import { promisify } from 'util';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const url = `mongodb://${host}:${port}`;

    this.client = new MongoClient(url, { useUnifiedTopology: true });
    this.client.connect()
      .then(() => {
        this.db = this.client.db(database);
        console.log('Connected to MongoDB');
      })
      .catch((err) => {
        console.error('MongoDB connection error:', err);
      });
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    const collection = this.db.collection('users');
    return collection.countDocuments();
  }

  async nbFiles() {
    const collection = this.db.collection('files');
    return collection.countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
