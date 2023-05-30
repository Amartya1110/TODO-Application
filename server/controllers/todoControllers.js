import todoModel from "../models/todoModel.js"
import ToDo from "../models/todoModel.js"


export const home = (req, res) => {
    res.send("TODO App")
}

export const createToDo = async (req, res) => {
    try{
        // Step-1: Get the data sent from the frontend
        const {title, description} = req?.body

        // Step-2: Validate that received data
        if(!title) {
            throw new Error("Title is required!!!")
        }

        // Step-3: If data is validated,
        //    a> Check whether the ToDo already exists in DB or not
        const titleExists = await ToDo.findOne({title})
        if(titleExists) {
            throw new Error("Todo already exists")
        }
        //    b> If data does not exist in DB, insert the data into the DB
        const todo = ToDo.create({title, description})
        res.status(201).json({
            success: true,
            message: "ToDo added successfully"
        })
    }
    catch(err) {
        console.log(err?.message)
    }

}

export const getTodos = async (req, res) => {
    try {
        const todos = await ToDo.find()
        res.status(200).json({
            success: true,
            todos,
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            success: false,
            message: err?.message,
        })
    }
}

export const editTodo = async (req, res) => {
    try {
        const todo = await ToDo.findByIdAndUpdate(req?.params?.id, req?.body)
        res.status(200).json({
            success: true,
            message: "Todo updated successfully !!!"
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            success: false,
            message: err?.message,
        })
    }
}

export const deleteTodo = async (req,res) => {
    try {
        const todo = await ToDo.findByIdAndDelete(req?.params?.id, req?.body)
        res.status(200).json({
            success: true,
            message: "Todo deleted successfully !!!"
        })
    } catch (error) {
        console.log(err)
        res.status(400).json({
            success: false,
            message: err?.message,
        })
    }
}