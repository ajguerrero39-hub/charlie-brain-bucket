import 'dotenv/config';
import express from 'express'
//const { MongoClient, ServerApiVersion } = require('mongodb');
import { MongoClient, ServerApiVersion } from 'mongodb'; 

const uri = process.env.MONGODB_URI;
const app = express()
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, '../public')));
app.use( express.json());
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public', 'hotel.html'));
})
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
app.post(
  '/api/students',
  function(req, res) {

    console.log(
      req.body
    );

    res.json({

      received:
        req.body

    });

  }
);
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
app.get(
  '/api/hello',
  function(req, res) {

    const message = {
      message: 'hello from hardcode json',
      success: true
    };

    res.json(message);
      'hello from the server'

  }
);
run().catch(console.dir);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})