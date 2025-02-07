// META: to insert the log to the mongoDB for data collection 
// NOTE:  different approach than a global active connection, connecting just to insert record



// ## IMPORTS --- --- ---
const { MongoClient } = require('mongodb') // client to handle mongo DB operations



// ## INITS --- --- ---
const client = new MongoClient(process.env.MANGODB_URI) // creating a new instance using connection string
// provide your own string in `.env` file



// FUNCTIONS --- --- ---
const logToMongo = async (logObject) => { // to handle logging the record to mongoDB
  try {
    await client.connect() // create the connection
    const db = client.db() // connect to database
    const logsCollection = db.collection('fileLogs') // get the respective collection

    const result = await logsCollection.insertOne(logObject) // insert the log
    console.log('Log saved to mongoDB: ', result) // NOTIFICATION
  } catch (error) { // error handling
    console.error('mongoDB log error: ', error)
  } finally {
    await client.close() // close the database connection
  }
}



// EXPORTS --- --- ---
module.exports = logToMongo
