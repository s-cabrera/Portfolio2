//Imports
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

//Image Imports
import picture from "../images/hiking_selfie_2.jpg"
// import github from "../images/github-brands.svg";
// import pokemon_search from "../images/pokemon_search_demo.gif"
// import anime_q from "../images/Anime-Q-Demo.gif"
// import password_generator from "../images/password_generator_demo.gif"
// import coding_quiz  from "../images/coding_quiz_demo.gif"
// import weather_dashboard from "../images/weather_dashboard_demo.gif"


function Portfolio(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="card project-card col col-10 col-lg-5 m-2">
                    <div className="card-body">
                        <a href="https://s-cabrera.github.io/Pokemon_Search/" rel="noreferrer" target="_blank">
                            <h2>Pokemon Search</h2>
                            {/* <img className="box-shadow" src={pokemon_search} alt="Pokemon Search Demo" /> */}
                            <img src={picture} className="img-fluid" alt="photo1" />
                            {/* <i class="fab fa-github project-github" href="https://github.com/s-cabrera/Pokemon_Search" style={{cursor: "pointer"}}></i> */}
                            <a href="https://github.com/s-cabrera/Pokemon_Search" className="project-github" style={{cursor: "pointer"}} rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </a>
                    </div>
                </div>
                <div className="card project-card col col-10 col-lg-5 m-2">
                    <div className="card-body">
                        <a href="https://anime-q-list.herokuapp.com" rel="noreferrer" target="_blank">
                            <h2>Anime-Q</h2>
                            {/* <img className="box-shadow" src={anime_q} alt="Anime-Q Demo"/> */}
                            <img src={picture} className="img-fluid" alt="photo2" />
                            {/* <i class="fab fa-github project-github" href="https://github.com/s-cabrera/Phase2_Project" style={{cursor: "pointer"}}></i> */}
                            <a href="https://github.com/s-cabrera/Phase2_Project" className="project-github" style={{cursor: "pointer"}} rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </a>
                    </div>
                </div>
                <div className="card project-card col col-10 col-lg-5 m-2">
                    <div className="card-body">
                        <a href="https://s-cabrera.github.io/Password_Generator/" rel="noreferrer" target="_blank">
                            <h2>Password Generator</h2>
                            {/* <img className="box-shadow" src={password_generator} alt="Password Generator Demo" />  */}
                            <img src={picture} className="img-fluid" alt="photo3" />
                            {/* <button className="fab fa-github project-github" href="https://github.com/s-cabrera/Password_Generator" style={{cursor: "pointer"}} /> */}
                            <a href="https://github.com/s-cabrera/Password_Generator" className="project-github" style={{cursor: "pointer"}} rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </a>
                    </div>
                </div>
                <div className="card project-card col col-10 col-lg-5 m-2">
                    <div className="card-body">
                        <a href="https://s-cabrera.github.io/Code_Quiz/" rel="noreferrer" target="_blank">
                        <h2>Coding Quiz</h2>
                            {/* <img className="box-shadow" src={coding_quiz} alt="Coding Quiz Demo" />*/}
                            <img src={picture} className="img-fluid" alt="photo3" />
                            {/* <i class="fab fa-github project-github" href="https://github.com/s-cabrera/Code_Quiz" style={{cursor: "pointer"}}></i> */}
                            <a href="https://github.com/s-cabrera/Code_Quiz" className="project-github" style={{cursor: "pointer"}} rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </a>
                    </div>
                </div>
                <div className="card project-card col col-10 col-lg-5 m-2">
                    <div className="card-body">
                        <a href="https://s-cabrera.github.io/Weather_Dashboard/" rel="noreferrer" target="_blank">
                        <h2>Weather Dashboard</h2>
                            {/* <img className="box-shadow" src={weather_dashboard} alt="Weather Dashboard Demo" /> */}
                            <img src={picture} className="img-fluid" alt="photo3" />
                            {/* <i class="fab fa-github project-github" href="https://github.com/s-cabrera/Weather_Dashboard" style={{cursor: "pointer"}}></i> */}
                            <a href="https://github.com/s-cabrera/Weather_Dashboard" className="project-github" style={{cursor: "pointer"}} rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </a>
                    </div>
                </div>
                <div className="card project-card col col-10 col-lg-5 m-2">
                    <div className="card-body">
                        <a href="https://s-cabrera.github.io/Password_Generator/" rel="noreferrer" target="_blank">
                            <h2>ADD NEW PROJECT HERE</h2>
                            {/* <img class="box-shadow" src={} alt="Pokemon Search Demo" /> */}
                            <img src={picture} className="img-fluid" alt="photo3" />
                            {/* <i class="fab fa-github project-github" href="https://github.com/s-cabrera/Pokemon_Search" style={{cursor: "pointer"}}></i> */}
                            <a href="https://github.com/s-cabrera/Pokemon_Search" className="project-github" style={{cursor: "pointer"}} rel="noreferrer" target="_blank" >
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;