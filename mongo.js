// const { MongoClient } = require("mongodb");
// const assert = require('assert');

// // Replace the uri String with your connection String.
// const url = 'mongodb://localhost:27017';

// const client = new MongoClient(url);

// async function run() {
//   try {
//     await client.connect();
//     const database = client.db('ieeeDB'); // Use correct database name
//     const peopleCollection = database.collection('people'); // Use correct collection name

//     // Query for a person with a specific name, for example
//     const query = { name: 'Asif' }; // Specify the query based on your document structure
//     const person = await peopleCollection.findOne(query);

//     console.log(person);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// run().catch(console.dir);
