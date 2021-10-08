//Imports
import React from "react";
// import avatar from "../images/avatar.png";
// import { Fragment } from 'react';
// import {
//   Navbar, NavbarBrand, Nav, NavItem, NavLink
// } from 'reactstrap';

function Header(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#about-me">
                        {/* <img className="me-2 nav-brand" src={avatar} alt="" width="30" height="30"/> */}
                        Menu
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#link">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#resume">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <section className="img-section position-relative">
                <button type="button" className="btn position-absolute top-5 start-0">Light</button>
                <img src={avatar} alt="Avatar icon" />
                <h2 className="text-shadow">Stephanie Cabrera</h2>
            </section> */}
        </header>
    );
}

export default Header;