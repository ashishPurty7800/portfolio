import React, { useEffect } from 'react';
import "./ProjectCard.css";
import html from "../../assets/images/stack/HTML.png";
import css from "../../assets/images/stack/CSS.png";
import javascript from "../../assets/images/stack/Javascript.svg";
import express from "../../assets/images/stack/Express.png";
import nextJsCircle from "../../assets/images/stack/NextJsCircle.png";
import tailwind from "../../assets/images/stack/Tailwind.png";
import nodeJs from "../../assets/images/stack/NodeJs.svg";
import mongoDB from "../../assets/images/stack/MongoDB.svg";
import redux from "../../assets/images/stack/Redux.svg";
import vercel from "../../assets/images/stack/Vercel.svg";
import car from "../../assets/images/projects/car-2.jpg";
import HireMeButton from "../Buttons/HireMeButton"
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteProject } from '../../services/operations/authAPI';
import { useDispatch } from 'react-redux';





const ProjectCard = (
    {
        description,
        title,
        url,
        i,
        id,
    }
) => {


    // useEffect(() => {
    //     console.log("description--", description);
    //     console.log("title--", title);
    //     console.log("url--", url);
    //     console.log("i--", i);
    //     console.log("id--", id);
    // }, []);
    
    const dispatch = useDispatch();

    const num = i+1;
    
    const iseven = (num) => {
        if(num % 2 === 0){
            return true
        }
            return false
        
    }

    var boolNumber = iseven(num);

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

      const deleteFunction = (id) => {
            dispatch(deleteProject({projectId: id}));
      }

    
    

    return (
        <div className={`project_card ${
            boolNumber
            ? ("card_right")
            : ("card_left")
        }`}>
            <div className={`project_number ${
                boolNumber
                ? ("project_number_left")
                : ("project_number_right")
            }`}>0{num}</div>
            <div className={`project_content ${
                boolNumber
                ? ("project_content_right")
                : ("project_content_left")
            }`}>
                <div className='project_skills_container'>
                  <img class="project_skill" src={html} alt="" />
                  <img class="project_skill" src={css} alt="" />
                  <img class="project_skill" src={javascript} alt="" />
                  <img class="project_skill" src={express} alt="" />
                  <img class="project_skill" src={nextJsCircle} alt="" />
                  <img class="project_skill" src={tailwind} alt="" />
                  <img class="project_skill" src={nodeJs} alt="" />
                  <img class="project_skill" src={mongoDB} alt="" />
                  <img class="project_skill" src={redux} alt="" />
                  <img class="project_skill" src={vercel} alt="" />
                </div>

                <h2 class="project_heading">{title}</h2>

                <p class="project_subHeading">{description}</p>

                <div className='btn_grp'
                    onClick={() => openInNewTab(url)}
                >
                    <HireMeButton>
                        <div>
                            Read More
                        </div>
                    </HireMeButton>
                    <FaGithub size={40} className='btn_logo' />
                    <FaLink size={40} className='btn_logo' />
                </div>

            </div>

            <div className={`card_delete ${
                boolNumber
                ? ("icon_right")
                : ("icon_left")
            }`}>
                <RiDeleteBin6Line className='delete_icon' onClick={() => deleteFunction(id)}  />
            </div>
            
        </div>
    )
}

export default ProjectCard;