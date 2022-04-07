import React from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/location.png";

function Contact () {
    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="cwrapper-left">
                    <h1 className="contact-title">Let's Connect</h1>
                    <div className="contact-info">
                        <div className="contact-item">
                            <img src={Phone} alt="" className="contact-icon"/>832.818.7186</div>
                        <div className="contact-item">
                            <img src={Email} alt="" className="contact-icon"/>felipezintzun@gmail.com</div>
                        <div className="contact-item">
                            <img src={Address} alt="" className="contact-icon"/>3816 South Lamar Blvd, Austin, Texas 78704</div>
                        </div>
                    </div>
                <div className="cwrappper-right"></div>
            </div>
        </div>
    )
}

export default Contact