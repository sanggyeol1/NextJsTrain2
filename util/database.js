import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://sanggyeol1:xpflgks4201@cluster0.4pltbdt.mongodb.net/forum?retryWrites=true&w=majority'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }