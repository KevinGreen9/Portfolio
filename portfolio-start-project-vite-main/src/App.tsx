import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Stacks} from "./layout/sections/stacks/Stacks.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Feedback} from "./layout/sections/feedback/Feedback.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Particle} from "./componets/particle/Particle.tsx";
import {GoTopBtn} from "./componets/goTopBtn/GoTopBtn.tsx";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Stacks/>
            <Projects/>
            <Feedback/>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}

export default App

