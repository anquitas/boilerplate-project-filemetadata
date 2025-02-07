// no file handling   ✧*｡٩(ˊᗜˋ*)و✧ 
// single array, schemaless   ( ◡‿◡ )


// ## IMPORTS --- --- ---
const {matchesQuery, notMatchesQuery} = require('./helper_functions')


class PuffDB { // database class --- --- --- --- --- ---

// ## CONSTRUCTORS --- --- ---
constructor () {
  this.data = []
  this.idCounter = 1
}



// ## CRUD --- --- ---
// create -- insert (2)
// read -- find, getAll
// update -- update
// delete -- remove, clear



// -- CREATE --- --- ---
insert (record) { //  // Insert data (single)
  const newRecord = {_id: this.idCounter++, ...record}
  this.data.push(newRecord)
  return newRecord
} // add overload for multiple record inserts

insertMult(records) {
  records.forEach(
    record => this.insert(record)
  )
}



// -- READ --- --- ---
find (query = {}) {
  return this.data.filter(
    record => matchesQuery(record, query)
  )
}

findExcept(query = {}) {
  return this.data.filter(
    record => notMatchesQuery(record, query)
  )
}

findById (id) {
  const record = this.find({_id: id})
  if (record.length > 0)
  return record[0]
}

// id () {} // should be used with record to provide immutability on _id field

getAll() {
  return this.data
}



// -- UPDATE --- --- ---
update(query = {}, newData) {
  this.find(query).forEach(record => Object.assign(record, newData));
}



// -- DELETE --- --- ---
remove(query = {}) {
  this.data = this.data.filter(
    record => notMatchesQuery(record, query)
  ) // if not found throws error, i think it shouldnt
}

clear() {
  this.data = []
  this.idCounter = 1
}
} // Class Ending --- --- --- --- --- ---



// ## HIGH LEVEL FUNCTIONS --- --- ---
const puffDB= () => new PuffDB() // high level function to create PuffDB



// ## TESTS --- --- ---
// const db = puffDB()
// db.insert({name: 'deneme'})
// const res = db.getAll()
// console.log(res)
// const one = db.findById(Number("1"))
// console.log(one)

// ## EXPORTS --- --- ---
module.exports = puffDB
