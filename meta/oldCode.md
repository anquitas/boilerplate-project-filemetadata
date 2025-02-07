```js
app.post(
  '/api/fileanalyse', 
  upload.single('upfile'), 
  (req, res) => {
  // req.file is the `avatar` file
  const transformedFileData = {
    ...req.file,
    type: req.file.mimetype,  // Rename mimetype -> type
    name: req.file.originalname    // Rename filename -> name
  };
  
  res.json(transformedFileData)
  // req.body will hold the text fields, if there were any
})
```


```js
  const logObject = {
    data: data, // data requested by freeCodeCamp
    time: current_time(), // to log the time of the request
    origin: await getOrigin(req) // to log the information on the request client
    // here a request call is made to another fcc project microservice
  }
```