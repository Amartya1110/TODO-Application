import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectToDB = () => {
    // The following connection string will give us "Connection Refused" - error
    // const MONGODB_CONN_STR = "mongodb://localhost:27017"
    // This is bcz writing "localhost" - will not work in latest NodeJS versions. We have to write "127.0.0.1" instead of "localhost"
    // Checkout the video - "How to Fix Mongoose Server Selection Error connect ECONNREFUSED" in Geeky Shows- channel
    // const MONGODB_CONN_STR = "mongodb://127.0.0.1:27017"

    mongoose
        .connect(process?.env?.MONGODB_CONN_STR, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((conn) => {
            // console.log(conn) // => It's a big object with all the details about the mongoDB connection established.
            console.log(`DB connected successfully: ${conn?.connection?.host}`)
        })
        .catch((err) => {
            console.log(err.message)
            process.exit(1)
        })

    // To check whether the connection to the MongoDB has been successfully established or not, we use the below "on" - method
    mongoose.connection.on('connected', () => {
        console.log('MongoDB Connection established successfully!!!')
    })

    mongoose.connection.on('disconnected', () => {
        console.log("MongoDB disconnected!!!")
    })

    mongoose.connection.on('error', (err) => {
        console.log("Error while connecting to MongoDB : " + err?.message)
    })

}

export default connectToDB