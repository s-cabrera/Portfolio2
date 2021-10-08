import React from "react";
import developer_photo from "../images/hiking_selfie_2.jpg";

function AboutMe(props) {
    return (
        <section className="container">
            <div className="row align-items-center justify-content-center gx-5">
                <div className="col-10 col-lg-4 col-md-4 col-sm-10 me-auto"> 
                <img src={developer_photo} className="img-thumbnail" alt="Developer_Photo" />
                </div>
                <div className="col-10 col-lg-8 col-md-8 col-sm-10 text-start me-auto" >
                    <h3 className="border-bottom pb-2">About Me</h3>
                    <p> Welcome to my portfolio. I started my journey in Web Development through my university's extension program BootCampSpot.
                        Through this program, I'm learning the basics of Web Development and applying
                        them to projects as those shown below.
                    </p>
                    <p>
                        Prior to BootCampSpot, I was an undergraduate at UC Riverside where I earned my Bachelor's of Science in Computer Engineering.
                        During my undergraduate days, I was the lead of my Micromouse team, a competition in which a team designs and programs a robotic
                        mouse to solve a maze. My responsibilities included project management, budgetting, PCB designing, and more. My hunger for
                        knowledge led me to Web Development.
                    </p>
                </div >
            </div>
        </section >
    );
}

export default AboutMe;