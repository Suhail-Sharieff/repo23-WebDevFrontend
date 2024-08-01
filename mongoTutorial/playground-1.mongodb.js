use("crudDb")

db.createCollection("collections")

console.log("created databse named `crudDb` and collection named `collections` under it");

//CREATE
db.collections.insertMany(
  [{name:"XYZ",interests:"Math and Computer Science"},
  {name:"ABC",interests:"Math and Biology"}]
)

//READ
let suh=db.collections.find({name:"Suhail"})
console.log(suh);

//UPDATE
db.collections.updateMany({name:"XYZ"},{$set:{name:"$$$"}})
db.collections.updateMany({name:"ABC"},{$set:{name:"***"}})

//DELETE
db.collections.deleteMany({name:"***"})