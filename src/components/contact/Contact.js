import React, {useState, useRef} from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/location.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
        const formRef = useRef()
        const [done, setDone] = useState(false)

        const handleSubmit = (e) => {
            e.preventDefault();
            emailjs.sendForm('service_3c96jh4', 'template_89c5w8p', formRef.current, 'D0f4A_G4mHZa_MGbb')
              .then((result) => {
                  console.log(result.text);
                  setDone(true)
              }, (error) => {
                  console.log(error.text);
              });
          };
    return (
        <div className="contact">
            {/* <div className="contact-bg"></div> */}
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
                    
                <div className="cwrapper-right">
                    <p className="contact-description">
                        Since you landed here you are probably looking for someone who can build your new website. Well done! You found the man for the job. I can handle projects from scratch. Yes, even your logo and branding identity. Let's make something!
                    </p>
                <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name"/>
                    <input type="text" placeholder="Subject" name="user_subject"/>
                    <input type="text" placeholder="Email" name="user_email"/>
                    <textarea rows="5" placeholder="Message" name="message" />
                    <button className="submit-btn" type="submit">Submit</button>
                    {done && "Thank You!"}
                </form>
                </div>
            </div>
        </div>
    );
};

export default Contact