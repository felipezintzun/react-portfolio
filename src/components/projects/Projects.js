import React from "react";
import "./projects.css";

function Projects ({img,link}) {
    return (
        <div className="projects">
            <div className="projects-browser">
                <div className="projects-circle"></div>
                <div className="projects-circle"></div>
                <div className="projects-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrence">
            <img src={img} alt="" className="projects-img"/>
        </a>
    </div>
    )
}

export default Projects