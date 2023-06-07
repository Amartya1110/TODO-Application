import { useDispatch, useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { useEffect } from "react"
import { getToDo } from "../utilities/slices/toDoSlice"

import "./ToDoList.css"

const ToDoList = () => {
    const dispatch = useDispatch()
    const todoData = useSelector(store => store?.toDo)
    console.log(todoData)

    useEffect( () => {
        dispatch(getToDo())
    }, [])

    return (
        <div className="todoList">
            {
                todoData.map(todo => {
                    return <TodoItem {...todo} />
                })
            }
        </div>
    )
}

export default ToDoList