const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middle weres
app.use(express.json())
app.use(cors())


// database users and pass - coffeeMaster - KBuYLsYJbfqdGpsz

// mongodb database connections


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gelbn8r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //creating a database and collection in th database
    const coffeeCollection = client.db("coffeeDB").collection("coffee");


    // read data from the database
    // router for all coffee data api
    app.get('/coffee', async (req, res) => {
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray()
      res.send(result)
    })

    // read single data from the database
    // route for single coffee data api
    app.get('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await coffeeCollection.findOne(query)
      res.send(result)
    })


    // posting a coffee data to the data base
    app.post("/coffee", async (req, res) => {
      const newCoffee = req.body;
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result)

    })


    // delete data in the database]
    app.delete('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await coffeeCollection.deleteOne(query)
      res.send(result)
    })


    // update a coffee data in the data base
    app.put('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const coffeeData = req.body;
      const updateDoc = {
        $set: {
         name: coffeeData.name,
         chef: coffeeData.chef,
         supplier: coffeeData.supplier,
         test: coffeeData.test,
         category: coffeeData.category,
         detailes: coffeeData.detailes,
         photo: coffeeData.photo,
        },
      };

      const result = await coffeeCollection.updateOne(filter, updateDoc, options);

      res.send(result)
    })









    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




// default route
app.get('/', (req, res) => {
  res.send("I love coffee")
})


app.listen(port, () => {
  console.log(`The coffee making server is runing on port ${port}`)
})