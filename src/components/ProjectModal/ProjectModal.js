import React from 'react';
import './ProjectModal.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../slices/projectSlice';
import { addProjectDetails } from '../../services/operations/authAPI';
import { RxCross1 } from "react-icons/rx";

const ProjectModal = ({setProjectData}) => {


    const {loading} = useSelector((state) => state.project);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm();

    const onSubmit = (data) => {
        console.log("data---", data);
        dispatch(addProjectDetails(data));
        setProjectData(false);
    }


    return (
        <div className='project_modal'>
                    <div>
                            <div
                                onClick={() =>  setProjectData(false)}
                                className='project_tab'
                            >
                                <RxCross1 className='project_cross' />
                            </div>
                        
                        <form onSubmit={handleSubmit(onSubmit)}
                            className='add_project_form'
                        >
                            {/* title */}
                            <div className='title_div'>
                                <label htmlFor='title' className='add_project_text_title'>title : </label>
                                <input
                                    type="text"
                                    name='title'
                                    id='title'
                                    {...register("title", {required: true})}
                                    className='project_title'
                                    
                                />
                                {
                                    errors.title && (
                                        <span>
                                            Please enter project title
                                        </span>
                                    )
                                }
                            </div>

                            {/* description */}
                            <div className='title_div'>
                                <label htmlFor='description' className='add_project_text_description'>description : </label>
                                <textarea
                                    name='description'
                                    id='description'
                                    {...register("description", {required: true})}
                                    className='project_title'
                                    
                                />
                                {
                                    errors.description && (
                                        <span>
                                            Please enter project description
                                        </span>
                                    )
                                }
                            </div>

                            {/* url */}
                            <div className='title_div'>
                                <label htmlFor='url' className='add_project_text_url'>github url : </label>
                                <input
                                    type="text"
                                    name='url'
                                    id='url'
                                    {...register("url", {required: true})}
                                    className='project_title'
                                    
                                />
                                {
                                    errors.url && (
                                        <span>
                                            Please enter project url
                                        </span>
                                    )
                                }
                            </div>

                            <button
                                type='submit'
                                disabled={loading}
                                className='addProject_button'
                            >
                                Add Project
                            </button>
                        </form>
                    </div>
        </div>
    )
}

export default ProjectModal;