import "./MainContent.css"

const MainContent = () => {

    const handleSubmit = (e) => {
        // This following line is to prevent the webpage from getting reloaded when form is submitted
        e.preventDefault()
    }


    return(
        <div className="main-content" >
            <h1 className="todo-heading">TODO LIST</h1>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="New Todo" 
                    className="todo-title-input"
                    onChange={(e) => {console.log(e.target.value)}}
                />
                <button type="sunmit" className="btn">Add</button>
            </form>

        </div>
    )
}

export default MainContent