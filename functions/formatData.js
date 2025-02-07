// META: to abstract the deconstruction and formating of that from the request object into its own function



// ## FUNCTIONS --- --- ---
const formatData = (req) => {
  const { mimetype, originalname, ...rest } = req.file; // deconstruction

  return {
    // these are named differently from the freeCodeCamp's header fields
    type: mimetype, 
    name: originalname,
    // these are inconsequential to the test
    ...rest
  }
}



// ## EXPORTS --- --- ---
module.exports = formatData