import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Stacks} from "./layout/sections/stacks/Stacks.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Feedback} from "./layout/sections/feedback/Feedback.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Stacks/>
            <Projects/>
            {/*<Feedback/>*/}
            {/*<Footer/>*/}
        </div>
    )
}

export default App

