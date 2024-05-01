import React from 'react'
import './App.css'
import {Col, Container, Row} from "react-bootstrap";
import {Header} from "./components/Header.jsx";
import {MyList} from "./components/MyProcessList.jsx";
import {Footer} from "./components/Footer.jsx";
import {useWorkflow} from "./hooks/useWorkflow.js";

function App() {
    const workflow = useWorkflow()

    return (
        <>
            <Container>
                <Row >
                    <Col>
                        <Header/>
                    </Col>
                </Row>

                <Row>
                    <MyList workflow={workflow}/>
                </Row>

            </Container>
            <Footer/>
        </>
    )
}

export default App
