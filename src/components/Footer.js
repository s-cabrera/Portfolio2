import React from "react";
import github from "../images/github-brands.svg";
import linkedin from "../images/linkedin-brands.svg";
import stackoverflow from "../images/stack-overflow-brands.svg";

function Footer(props) {
    return (
        <footer className="container-fluid bg-light py-2 mt-3 border-top border-2">
            <a className="mx-2" rel="noreferrer" target="_blank" href="https://github.com/s-cabrera/">
                <img src={github} alt="Github link" width="30px" height="30px"/>
            </a>

            <a className="mx-2" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/stephanie-cabrera-809999139/">
                <img src={linkedin} alt="LinkedIn Link" width="30px" height="30px" />
            </a>

            <a className="mx-2" rel="noreferrer" target="_blank" href="https://stackoverflow.com/users/15790246/stephanie-cabrera">
                <img src={stackoverflow} alt="Stack Overflow link" width="30px" height="30px"/>
            </a>
        
        </footer>
    )
}

export default Footer;