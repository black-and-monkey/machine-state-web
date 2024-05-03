import {Container, Nav, Navbar} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton.jsx";
import LogoutButton from "../components/LogoutButton.jsx";
import Profile from "../components/Profile.jsx";

export default function NavigationBar() {

    const { isAuthenticated} = useAuth0();

    return isAuthenticated && (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">My State Machine</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Profile></Profile>
                <LogoutButton></LogoutButton>

            </Container>
        </Navbar>
    );
}
