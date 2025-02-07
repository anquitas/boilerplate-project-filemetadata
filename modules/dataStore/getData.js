// META: to get all data from the fleating datastore



// ## IMPORTS --- --- ---
const logs = require('./connPuffDB')





// ## FUNCTIONS --- --- ---
const getData = () => {
  const data = logs.getAll()
  return data
}



// ## EXPORTS --- --- ---
module.exports = getData