import mongoose from "mongoose"

const schema = mongoose.Schema

const todoSchema = new schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true,
        trim: true,
        maxlength: [50, "Title should be max 50 characters long !!!"]
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
})

const todoModel = mongoose.model("Todo", todoSchema)

export default todoModel

