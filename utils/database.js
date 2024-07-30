import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', false)

  if (isConnected) {
    console.log('MongoDB is already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "apitestingdb",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true

    console.log('MongoDB is connected')

  } catch (error) {
    console.log("Error connecting to MongoDB: ", error)
  }
}