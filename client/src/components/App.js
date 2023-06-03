import "./App.css"
import {Provider} from "react-redux"





import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"
import store from "../utilities/store"


const App = () => {
    return(
        <Provider store={store}>
            <div className="app" >
                <Header />
                <MainContent />
                <Footer />
            </div>
        </Provider>
    )
}

export default App