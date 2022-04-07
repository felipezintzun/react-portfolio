import React from "react";
import "./intro.css";
import Me from "../../img/felipe-zintzun-2.jpg";
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa';

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
                    I am a full stack developer with experience in graphics and coding. He recently received a certificate from the UT Austin Coding Bootcamp for completing the course. Felipe gradutated from Texas State University with a Bachelor's of Science, majoring in Advertising and minoring in Art & Design. He finds joy in all things but not limited to cutting-edge design, cooking, technology, street tacos, craft cocktails, his maltipoo Lilo, and all things futuristic.
                </div>
                <div className="icon-wrapper">
                <a className='i-icon' href="https://www.linkedin.com/in/felipe-mendoza-zintzun-40b28a232/" target="_blank"><FaLinkedin size='50'/></a>
                <a className='i-icon' href="https://github.com/felipezintzun" target="_blank"> <FaGithubSquare size='50'/></a>
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