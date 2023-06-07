import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const sliceName = "ToDo"

export const addToDo = createAsyncThunk(
    `{sliceName}/addToDo`, async (toDoData) => {
        try {
            // console.log(toDoData)
            const response = await axios.post('http://localhost:7000/todo/create', toDoData, {
                headers: {
                    'Accept' : 'Application/json',
                    'Content-Type' : 'Application/json',
                }
            })
            // console.log(response?.data)
            return response?.data
        } catch (error) {
            // console.log(error?.response?.data?.error)
            throw new Error(error?.response?.data?.error)
            // Don't write => return error, otherwise 'addToDo.fulfilled' - this reducer fumction will be called instead of 'addToDo.rejected' reducer function
        }
    }
)


export const getToDo = createAsyncThunk(
    `{sliceName}/getToDo`, async () => {
        try {
            const response = await axios.get('http://localhost:7000/todo/get', {
                headers: {
                    'Accept' : 'Application/json',
                    'Content-Type' : 'Application/json',
                }
            })
            // console.log(response?.data)
            return response?.data
        } catch (error) {
            console.log(error)
        }
    }
)



const toDoSlice = createSlice({
    name: {sliceName},
    initialState: [],
    reducers: {
        
    },
    extraReducers: {
        [addToDo.pending] (state) {
            console.log("Pending")
        },
        [addToDo.fulfilled] (state, action) {
            console.log("Action fulfilled")
            state.push(action?.payload?.data)
        },
        [addToDo.rejected] (state, action) {
            console.log(action?.error?.message)
        },
        [getToDo.pending]: () => {

        },
        [getToDo.fulfilled] (state, action) {
            const todoData = action?.payload?.todos
            todoData.forEach(todo => {
                state.push(todo)
            });
            
        },
        [getToDo.rejected]: () => {

        },
    }
})


export default toDoSlice.reducer