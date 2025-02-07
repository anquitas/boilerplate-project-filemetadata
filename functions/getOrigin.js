// META: to get client data from another microservice to log the request 



// ## IMPORTS --- --- ---
const axios = require("axios")




// ## COSNTANTS --- --- ---
const SERVICE_ADDRESS= process.env.REQUEST_HEADER_PARSER_ADRESS
const API_ROUTE= '/api/whoami'



// ## FUNCTIONS --- --- ---
const getOrigin = async (req) => {
  try{
    const headerResponse = await axios.get(
      SERVICE_ADDRESS + API_ROUTE, // api adress of request headerParser microservice
      { headers: req.headers } // too change the server header to client header
    )
  return headerResponse.data // client header data
  } catch (error) { // if the microservice is down
    console.log('+ error connecting to request header parser microservice') // NOTIFICATION
    return {error: 'no microservice connection'} // if there is no response, log as connection error
  }
}



// ## EXPORTS --- --- ---
module.exports = getOrigin


