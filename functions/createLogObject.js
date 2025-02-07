// META: to handle the creation of the log object with its varius fields



//IMPORTS --- --- ---
const formatData = require('./formatData') // to handle formating and extracting required info from the request object
const getNow = require('./getNow') // to handle time information via remote api call
const getOrigin = require('./getOrigin') // to handle origin information via a remote api call



// ## FUNCTIONS --- --- ---
const createLogObject = async (req) => {
  const logObject = {
    data: formatData(req), // data requested by freeCodeCamp
    time: await getNow(), // to log the time of the request
    origin: await getOrigin(req) // to log the information on the request client
    // here a request call is made to another fcc project microservice
  }
  return logObject
}



// EXPORTS --- --- ---
module.exports = createLogObject