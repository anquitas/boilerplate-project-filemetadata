// META: functions to be used by puffDB module



// INNER HELPER FUNCTIONS --- --- ---
const isMatch = (record, query) => key => record[key] === query[key]
const notMatch = (record, query) => key => record[key] !== query[key]



// ## FUNCTIONS --- --- ---
const matchesQuery = (record, query) => {
  return Object.keys(query).every(isMatch(record, query));
}



// for no match
const notMatchesQuery = (record, query) => !Object.keys(query).every(isMatch(record, query))



// ## EXPORTS --- --- ---
module.exports = {
  matchesQuery,
  notMatchesQuery
}