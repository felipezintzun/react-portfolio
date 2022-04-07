import React from "react";
import "./portfolioList.css";
import Projects from "../projects/Projects.js";

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
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
            </div>
        </div>
    )
}

export default PortfolioList