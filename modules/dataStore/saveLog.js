// META: to save the log to the fleating database



// ## IMPORTS --- --- ---
const logs = require('./connPuffDB')



// ## FUNCTIONS --- --- ---
const saveLog = (logObject) => {
  return logs.insert(logObject)
}



// ## EXPORTS --- --- ---
module.exports = saveLog









