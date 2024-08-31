import React from 'react';
import "./SkillContainer.css";
import blob from "../../assets/images/userAsset/blob vector.png";
import html from "../../assets/images/stack/HTML.png";
import css from "../../assets/images/stack/CSS.png";
import javascript from "../../assets/images/stack/Javascript.svg";
import react from "../../assets/images/stack/React.png";
import nodeJs from "../../assets/images/stack/NodeJs.svg";
import next from "../../assets/images/stack/Next.svg";
import redux from "../../assets/images/stack/Redux.svg";
import tailwind from "../../assets/images/stack/Tailwind.png";
import bootstrap from "../../assets/images/stack/Bootstrap.svg";
import material from "../../assets/images/stack/MaterialUI.svg";
import express from "../../assets/images/stack/Express.png";
import git from "../../assets/images/stack/Git.svg";
import github from "../../assets/images/stack/Github.svg";
import graph from "../../assets/images/stack/Graphql.svg";
import mongodb from "../../assets/images/stack/MongoDB.svg";
import vercel from "../../assets/images/stack/Vercel.svg";
import chart from "../../assets/images/stack/ChartJs.svg";
import bash from "../../assets/images/stack/Bash.svg";
import docker from "../../assets/images/stack/Docker.svg";
import k8s from "../../assets/images/stack/K8s.svg";

const SkillContainer = () => {
    return (
        <div className='skill_container'>
            <div class="skill_fade_text">Skills</div>

            <div className='skill_container_left'>
                <h2 className='skill_heading'>
                    <span className='caps'>M</span>e and
                    <br/>
                    MyTech Stack
                </h2>

                <div className='skill_subHeading'>
                    <p>
                        Hi Everyone My name is Ashish Purty I am a Full Stack Web Developer I
                        have been working for last 3 Years and Currently I am working with a
                        Budding Startup in USA and a full Time Freelancer. Currently I am
                        working on NextJs and Making Beautiful UI-UX are my fey features
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                        doloremque aspernatur, maiores voluptatum minus laudantium?
                        Perspiciatis accusamus minima porro dolores necessitatibus, magni
                        dolorem et qui veniam nulla sequi molestiae maxime.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem
                        quos ullam veritatis voluptates tenetur qui ipsa nulla culpa itaque?
                    </p>
                </div>
            </div>

            <div class="skill_container_right">
                <img src={blob} class="blob_style" alt="" />

                <img src={html} alt="" class="skills_logo" />
                <img src={css} alt="" class="skills_logo" />
                <img src={javascript} alt="" class="skills_logo" />
                <img src={react} alt="" class="skills_logo" />
                <img src={nodeJs} alt="" class="skills_logo" />
                <img src={next} alt="" class="skills_logo" />
                <img src={redux} alt="" class="skills_logo" />
                <img src={tailwind} alt="" class="skills_logo" />
                <img src={bootstrap} alt="" class="skills_logo" />
                <img src={material} alt="" class="skills_logo" />
                <img src={express} alt="" class="skills_logo" />
                <img src={git} alt="" class="skills_logo" />
                <img src={github} alt="" class="skills_logo" />
                <img src={graph} alt="" class="skills_logo" />
                <img src={mongodb} alt="" class="skills_logo" />
                <img src={vercel} alt="" class="skills_logo" />
                <img src={chart} alt="" class="skills_logo" />
                <img src={bash} alt="" class="skills_logo" />
                <img src={docker} alt="" class="skills_logo" />
                <img src={k8s} alt="" class="skills_logo" />
            </div>

        </div>
    )
}

export default SkillContainer;