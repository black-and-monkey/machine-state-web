import React from 'react'
import './App.css'
import {Col, Container, Row} from "react-bootstrap";
import {Header} from "./components/Header.jsx";
import {MyList} from "./components/MyProcessList.jsx";
import {Footer} from "./components/Footer.jsx";
import {useWorkflow} from "./hooks/useWorkflow.js";
import {useAuth0} from "@auth0/auth0-react";
import Profile from "./components/Profile.jsx";
import LoginButton from "./components/LoginButton.jsx";
import LogoutButton from "./components/LogoutButton.jsx";

function App() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    const workflow = useWorkflow()

    return (
        <>
            { isAuthenticated === false &&
                (
                    <>
                        <img src="https://raw.githubusercontent.com/black-and-monkey/state-machine-web/main/src/assets/logo2.webp" className="img-fluid" alt="Responsive image"
                             style={{ width: '600px', height: '600px' }}></img>
                        <LoginButton/>
                    </>
                )
            }

            {isAuthenticated && (
                <>
                    <Container>

                        <Row>
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
            )}

        </>
    )
}

export default App
