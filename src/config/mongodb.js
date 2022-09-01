import { MongoClient } from "mongodb";
import { env } from "./environtment";

let dbInstance = null

export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

    //Connect to client
    await client.connect()

    //Assign clientDB to uor DBInstance
    dbInstance = client.db(env.DATABASE_NAME)
  
}

// const listDatabases = async (client) => {
//   const databasesList = await client.db().admin().listDatabases()
//   console.log(databasesList)
//   // console.log('Your databases: ')
//   // databasesList.forEach(db => console.log(` - ${db.name}`))
// }

//Get database instance
export const getDB = () => {
  if (!dbInstance) throw Error('Must connect to Database first !')
  return dbInstance
}