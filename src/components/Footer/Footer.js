import React from 'react';
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer_wrapper'>
                <div className='footer_faded_text'>ASHISH PURTY</div>

                <div className='footer_skillandIcon'>
                    <div className='footer_link'>
                        <div>
                            Projects
                        </div>
                        <div>
                            Skills
                        </div>
                        <div>
                            Contact Me
                        </div>
                    </div>

                    <div className='footer_icons'>
                        <FaLinkedin size={40}  className='icon_point' />
                        <FaGithub size={40}  className='icon_point' />
                        <FaXTwitter size={40}  className='icon_point' />
                        <FaInstagram size={40}  className='icon_point' />
                        <TbMail size={40}  className='icon_point' />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;