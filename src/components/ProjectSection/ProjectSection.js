import React, { useEffect, useState } from 'react';
import "./ProjectSection.css";
import ProjectCard from '../ProjectCard/ProjectCard';
import HireMeButton from '../Buttons/HireMeButton';
import { LuPlus } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { getAllDetails } from '../../services/operations/authAPI';
import { useForm } from 'react-hook-form';
import ProjectModal from '../ProjectModal/ProjectModal';


const ProjectSection = () => {


    const {user} = useSelector((state) => state.profile);
    const {projects} = useSelector((state) => state.project);
    const [projectData , setProjectData] = useState(false);
    const dispatch = useDispatch();

    

    useEffect(() => {
        dispatch(getAllDetails());
        
    }, [])

    console.log("projects--", projects);

    // console.log("projects length---", projects.length());




    return (
        <div className='project_section'>
            {
                user && (
                    <div className='project_add_button'
                        onClick={() => setProjectData(true)}
                    >
                    <HireMeButton>
                        Add <LuPlus/> 
                    </HireMeButton>
                    </div>
                )
            }
            
            <h2 className='page_header'>Projects</h2>
            <div className='project_container'>
                {
                    projects && (
                        projects.map((project, index) => (
                            <ProjectCard description={project?.description} title={project?.title} url={project?.url} key={index} i={index} id={project._id} />
                        ))
                    )
                }

                {
                    !projects && (
                        <div>
                            No projects available
                        </div>
                    )
                }
                
            </div>
            {
                projectData && (
                    <div className='modal_absolute'>
                        <ProjectModal setProjectData={setProjectData} />
                    </div>
                )
            }
            
        </div>
    )
}

export default ProjectSection;