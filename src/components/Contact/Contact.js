import React from "react";
import "./Contact.css";
import HireMeButton from "../Buttons/HireMeButton";
import { FaPaperPlane } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="contactUs_container">
            <div className="contact_container">
                <h1 className="conatctUs_heading">Contact me</h1>
                <h3 className="contactus_sub_heading">
                    Questions, thoughts, or just want to say hello?
                </h3>

                <div className="conatctus_form_container">
                    <form className="form">
                        <div className="formfield_container">
                            <input
                                className="formfield"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                            />
                            <input
                                className="formfield"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                            />
                            <input
                                className="formfield"
                                type="text"
                                name="subject"
                                placeholder="Enter your subject"
                            />
                            <textarea
                                className="formfield_textarea formfield"
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder="Enter your message"
                            />
                        </div>
                        <div>
                            <HireMeButton>
                                <span>
                                    Send Message 
                                </span>
                                <span className="paper_icon">
                                    <FaPaperPlane size={24} />
                                </span>
                            </HireMeButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;