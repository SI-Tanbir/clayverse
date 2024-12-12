const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())




app.get('/', (req, res) => {
  res.send('api working!')
})
app.use(express.json()) //adding middle ware
app.get('/test', (req, res) => {
  res.send('Test path working!')
})

const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);
myDB = client.db("clayverse");
myColl = myDB.collection("art_and_craft_items");


async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    app.get('/items',async(req,res)=>{
      const result=await myColl.find().toArray()
      console.log(result)
      res.send(result)
    })
    app.post('/insert',async(req,res)=>{
      const doc=req.body
      const result= await myColl.insertOne(doc);
      console.log(result);
      res.send(result);
    })

    



  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);










app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})