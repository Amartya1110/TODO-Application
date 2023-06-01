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


app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:1234"); // update to match the domain you will make the request from
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader ('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use("/todo", todoRoutes)

app.get("/", (req, res) => {
    res.status(200).send("Home Page")
})



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
