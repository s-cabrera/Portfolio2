import React from "react";
import avatar from "../images/avatar.png";

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#about-me">Menu</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="img-section">
                <button type="button" class="btn"></button>
                <img src={avatar} alt="Avatar icon" />
                <h2 className="text-shadow">Stephanie Cabrera</h2>
            </section>
        </>
    );
}

export default Header;