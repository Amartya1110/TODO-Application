import express from "express"
import dotenv from "dotenv"

import todoRoutes from "./routes/todoRoutes.js"

dotenv.config()

// Note: In NodeJs, while importing modules, we need to provide the extension of the module;  
// otherwise it'll show us error as "ERR_MODULE_NOT_FOUND"
import connectToDB from "./config/db.connect.js";

const PORT = (process?.env?.PORT) || 3000
connectToDB()

const app = express();

// App level middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/todo", todoRoutes)

app.get("/", (req, res) => {
    res.status(200).send("Home Page")
})



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
