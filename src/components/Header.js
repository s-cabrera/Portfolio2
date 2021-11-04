//Imports
import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import avatar from "../images/avatar.png";

function Header({handlePageChange }) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#about" onClick={() => handlePageChange('Home')}>
                <img
                    src={avatar}
                    width="30"
                    height="30"
                    className="d-inline-block align-top nav-logo mx-2" 
                    alt="Avatar icon" 
                />
                Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#about" onClick={() => handlePageChange('About')}>About Me</Nav.Link>
                    <Nav.Link href="#projects" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
                    <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
                    <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;