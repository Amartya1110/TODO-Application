import {configureStore} from "@reduxjs/toolkit"
import toDoSlice from "./slices/toDoSlice"

const store = configureStore({
    reducer: {
        toDo: toDoSlice,
    }
})

export default store