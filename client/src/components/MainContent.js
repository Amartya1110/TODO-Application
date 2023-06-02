import { ToDoStates } from "../constants"
import "./MainContent.css"
import axios from "axios"

const MainContent = () => {

    const handleSubmit = (e) => {
        // This following line is to prevent the webpage from getting reloaded when form is submitted
        e.preventDefault()
        // console.log(e.target) => It'll be the <form> - element itself
        // Now we can pass the reference to the form element, i.e.; e.target - to
        // the FormData() - constructor which will create a new FormData - object
        const formData = new FormData(e.target) 
        // Always pass a form element to the FormData() constructor

        // Next we need to add the 'status' of the ToDo, which will be 'Pending' initially
        formData.append('status', ToDoStates?.pending)

        // Now let's convert the FormData object into a Normal object
        const toDoData = Object.fromEntries(formData?.entries())
        // console.log(toDoData)

        // After this we need to send this 'toDoData' to backend, so that it gets saved
        // in the DataBase
        axios.post('http://localhost:7000/todo/create', toDoData, {
            // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
    }


    return(
        <div className="main-content" >
            <h1 className="todo-heading">TODO LIST</h1>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    placeholder="New Todo Title" 
                    className="todo-title-input"
                    // onChange={(e) => {console.log(e.target.value)}}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="New Todo Description" 
                    className="todo-title-input"
                    // onChange={(e) => {console.log(e.target.value)}}
                />
                <button type="sunmit" className="btn">Add ToDo</button>
            </form>

            

        </div>
    )
}

export default MainContent