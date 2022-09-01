import { MongoClient } from "mongodb";
import { env } from "./environtment";


export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  try{  

    //Connect to client
    await client.connect()

    //List database
    await listDatabases(client)

    console.log('Connected successfully to server !')
  
  } finally {
    // Ensure that the client will close when finished
    await client.close()
  }
}

const listDatabases = async (client) => {
  const databasesList = await client.db().admin().listDatabases()
  console.log(databasesList)
  // console.log('Your databases: ')
  // databasesList.forEach(db => console.log(` - ${db.name}`))
}