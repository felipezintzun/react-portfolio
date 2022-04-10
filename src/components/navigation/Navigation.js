import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";


function Navigation () {
    return (
        
        <nav className="navigation">

            <div className="nav-logo">
            <NavLink className="logo" to="/" >FZ</NavLink>
            </div>

            <div className="nav-links">

                <NavLink className="nav-item" to="/Projects" >Projects</NavLink>
                <NavLink className="nav-item" to="/Contact" >Contact</NavLink>
                
            </div>

        </nav>

       
    )
}

export default Navigation;