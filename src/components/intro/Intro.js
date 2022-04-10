import React from "react";
import "./intro.css";
import Me from "../../img/felipe-zintzun-2.jpg";
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa';
import Resume from '../assets/zintzun-resume.pdf';

function Intro () {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h2 className="i-name">Felipe Zintzun</h2>
                    <div className="i-titles">
                        <div className="i-titles-wrapper">
                            <div className="i-titles-item">Web Developer</div>
                            <div className="i-titles-item">React.js</div>
                            <div className="i-titles-item">Adobe Creative Suite</div>
                            <div className="i-titles-item">JavaScript</div>
                            <div className="i-titles-item">Node.js</div>
                        </div>
                    </div>
                    
                    <div className="i-description">
                    I am a full stack developer and graphic designer based in Austin, Texas.
                    Texas State University Alum with a focus in Advertising, Art and Design,
                    and a recent graduate of UT Austin Coding Bootcamp. When I’m not coding,
                    you can find me cooking, weightlifting, or hanging out with my maltipoo Lilo.
                    </div>

                <div className="icon-wrapper">

                    <a className='i-icon' href="https://www.linkedin.com/in/felipe-mendoza-zintzun-40b28a232/" target="_blank" rel="noreferrer"><FaLinkedin size='50'/></a>
                   
                    <a className='i-icon' href="https://github.com/felipezintzun" target="_blank" rel="noreferrer"> <FaGithubSquare size='50'/></a>
            
                    <button className="resume-btn"> 
                        <a href={Resume} type="download" className="resume-link" target="_blank" rel="noreferrer">Download Resume</a>
                    </button>

                </div>

            </div>
            </div>
            <div className="i-right">
                <div className="i-card bg"></div>
                    <div className="i-card">
                        <img src={Me} alt="" className="i-image" />
                    </div>
            </div>

        </div>
    )
}

export default Intro