import 'dotenv/config';
// const { MongoClient, ServerApiVersion } = require('mongodb');
import { MongoClient, ServerApiVersion } from 'mongodb';
import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const db = client.db('hotel');
const collection = db.collection('scores');


// app.post('/api/dev/seed', async function (req, res) {
//   const result =
//     await collection
//       .insertMany(
//         seedData
//       );
//   res.json(result);
// }
// );
app.use(express.json());
app.use(express.static(join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})
app.post('/api/scores', async function(req, res) {
    const newItem = req.body;
    console.log(newItem);
    const result = await collection.insertOne(newItem);
    res.status(201).json(result);
});
app.get('/api/scores', async function(req, res) {
  const score = req.query.score;

    const scores =
      await collection
        .find(score)
        .toArray();

    console.log(scores);     
    res.json(scores);

  }
)
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})