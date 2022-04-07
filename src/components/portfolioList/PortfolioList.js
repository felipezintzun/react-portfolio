import React from "react";
import "./portfolioList.css";
import Projects from "../projects/Projects.js";
import {projects} from "../../data.js"

function PortfolioList () {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">Projects</h1>
                <p className="pl-description">
                Checkout my work!
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) => (
                    <Projects key={item.id} img={item.img} link={item.link}/>
                ))}
                    
            </div>
        </div>
    )
}

export default PortfolioList