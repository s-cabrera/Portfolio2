//----Imports -----//
//React
import React from "react";

//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
    return (
        <div className="bg-light d-flex flex-wrap justify-content-center align-items-center py-2">

            <a className="mx-2 footer-icon" rel="noreferrer" target="_blank" href="https://github.com/s-cabrera/">
                <FontAwesomeIcon icon={faGithub} />
            </a>

            <a className="mx-2 footer-icon" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/stephanie-cabrera-809999139/">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a className="mx-2 footer-icon" rel="noreferrer" target="_blank" href="https://stackoverflow.com/users/15790246/stephanie-cabrera">
                <FontAwesomeIcon icon={faStackOverflow} />
            </a>
        </div>
    )
}

export default Footer;