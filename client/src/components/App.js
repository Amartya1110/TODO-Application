import "./App.css"


import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"


const App = () => {
    return(
        <div className="app" >
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App