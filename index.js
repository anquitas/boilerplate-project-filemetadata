// ## IMPORTS --- --- ---

// related to server
var express = require('express')
var cors = require('cors')
require('dotenv').config()

// related to the microservice functions
const multer = require('multer')
const formatData = require('./functions/formatData')

// related to data and database operations
const saveLog = require('./modules/dataStore/saveLog') // to save to fleating datastore
const logToMongo = require('./functions/logToMongo') //to save to mongoDB
const getData = require('./modules/dataStore/getData') // to get all data from the fleating datastore
const createLogObject = require('./functions/createLogObject') // to create the log object



// ## INTIS --- --- ---
var app = express();
const upload = multer({dest: 'uploads/'})



// MW MOUNTS --- --- ---
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));



// ENDPOINTS --- --- ---
// get: '/'
// get: '/api/file'S
// get: '/api/fileanalyse'



// ## GET: '/' -- root endpoint to serve interface website
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});



// ## GET: '/api/hello' -- freeCodeCamp greeting api
app.get(
  '/api/hello',
  (req, res) => {
    res.send('hello world')
  }
)



// ## POST: '/api/fileanalyse' -- freeCodeCamp test api, to upload file and get its metadata
app.post(
  '/api/fileanalyse', 
  upload.single('upfile'), 
  async (req, res) => {
    console.log('+ get request at /api/fileanalyse')
  // req.file gives the file metadata used inside `formatdata()`
  const data = formatData(req)
  const logObject = await createLogObject(req)
  console.log('log saved fleating: ', saveLog(logObject))
  logToMongo(logObject) // to save perminant log to database
  res.json(data)
})



// ## GET: '/api/db' -- to get the served data from the current uptime
app.get(
  '/api/db',
  (req, res) => {
    res.json(getData()) // gets all the data from datastore
  }
)



// ## EXECUTION --- --- ---
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
