import React from 'react';
import "./HeroSection.css";
import dot from "../../assets/images/userAsset/dots.png"
import cube from "../../assets/images/userAsset/cube.png"
import circle from "../../assets/images/userAsset/circle.png"
import zigzags from "../../assets/images/userAsset/zigzags.png"
import plus from "../../assets/images/userAsset/plus.png"
import UserImage from "../../assets/images/userAsset/photo.png"
import HireMeButton from '../Buttons/HireMeButton';
import { FaLinkedin } from "react-icons/fa";

const HeroSection = () => {

    // var typeData = new Typed(".role", {
    //     strings: [
    //       "Full Stack Developer",
    //       "Web Developer",
    //       "UI-UX Designer",
    //       "Backend Developer",
    //       "Coder",
    //     ],
    //     loop: true,
    //     typeSpeed: 100,
    //     backSpeed: 80,
    //     backDelay: 1000,
    //   });

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };


    return (
            <div class="hero_section">

                <div class="faded_text">ASHISH PURTY</div>

                {/* left section */}
                <div class="hero_section_left">
                    <div class="hero_section_heading">Hi! Ashish Purty</div>

                    <div class="hero_section_heading hero_section_sub_heading">
                        I am a <span class="role">Full Stack Developer</span>
                    </div>

                    <div class="hero_section_description">
                        I’m a software developer and here is my portfolio website.<br/>
                        Here you’ll learn about my journey as a software developer.
                    </div>

                    

                    <HireMeButton>
                            <div className='hire'
                                onClick={() => openInNewTab("https://www.linkedin.com")}
                            >
                                <span>Linkedin</span>
                                <FaLinkedin className='hire_logo' />
                            </div>
                    </HireMeButton>

                </div>

                {/* right section */}
                <div class="hero_section_right">
                    <div class="absolute icons icon_dots">
                        <img src={dot} alt="" />
                    </div>
                    <div class="absolute icons icon_cube">
                        <img src={cube} alt="" />
                    </div>
                    <div class="absolute icons icon_circle">
                        <img src={circle} alt="" />
                    </div>
                    <div class="absolute icons icon_zigzag">
                        <img src={zigzags} alt="" />
                    </div>
                    <div class="absolute icons icon_plus">
                        <img src={plus} alt="" />
                    </div>
                    <div class="image">
                        <img src={UserImage} alt="" className='photo'/>
                    </div>
                </div>


            </div>
    )
}

export default HeroSection;