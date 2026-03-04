import './App.css'
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Title>It-Incubator</Title>
            <img src="./assets/images/50353683%201.jpg" alt=""/>
        </div>
    )
}

export default App

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;