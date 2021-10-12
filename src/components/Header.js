//Imports
import React from "react";
import { Nav, Navbar} from 'react-bootstrap';
// import avatar from "../images/avatar.png";

function Header(props) {
    return (
        // <>
            <Navbar bg="light" expand="lg" className="ms-3">
                <Navbar.Brand href="">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">About Me</Nav.Link>
                        <Nav.Link href="projects">Portfolio</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                        <Nav.Link href="resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        //     {/* <section className="img-section position-relative">
        // //         <button type="button" className="btn position-absolute top-5 start-0">Light</button>
        // //         <img src={avatar} alt="Avatar icon" />
        // //         <h2 className="text-shadow">Stephanie Cabrera</h2>
        // //     </section> */}
        // // </>
    );
}

export default Header;