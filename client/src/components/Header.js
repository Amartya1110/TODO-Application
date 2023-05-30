import todoLogo from "../../public/images/task.png"
import "./Header.css"

const Header = () => {
    return(
        <header>
            <img src={todoLogo} alt="TODO-LOGO" class="todo-img" />
            <button className="btn" >Register</button>
        </header>
    )
}

export default Header