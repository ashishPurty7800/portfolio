import React, { useState } from 'react';
import "./LoginModal.css"
import { RxCross1 } from "react-icons/rx";
import { useForm } from 'react-hook-form';
import {login} from "../../services/operations/authAPI"
import { useDispatch, useSelector } from 'react-redux';


const LoginModal = ({setLoginModalData}) => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.profile);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm();

    const submitLoginForm = async(data) => {
        dispatch(login(data));
        setLoginModalData(false);
    }


    return (
        <div className='login_modal'>
            <div
                onClick={() => setLoginModalData(false) }
                className='cross_nav'
            >
                <RxCross1 className='login_cross' />
            </div>
            
            <form
                onSubmit={handleSubmit(submitLoginForm)}
                className='login_form'
            >
                <div className='email_div'>
                    <label htmlFor='email' className='input_Text'>email : </label>
                    <input
                        type="text"
                        name='email'
                        id='email'
                        {...register("email", {required: true})}
                        className='login_Input'
                        
                    />
                    {
                        errors.email && (
                            <span>
                                Please enter Your name
                            </span>
                        )
                    }
                </div>

                <div className='email_div'>
                    <label htmlFor='password' className='input_Text_pass' >password : </label>
                    <input
                        type="text"
                        name='password'
                        id='password'
                        {...register("password", {required: true})}
                        className='login_Input'
                    />
                    {
                        errors.email && (
                            <span>
                                Please enter Your name
                            </span>
                        )
                    }
                </div>

                <button
                    type='submit'
                    disabled={loading}
                    className='login_button'
                >
                    login
                </button>

            </form>
        </div>
    )
}

export default LoginModal;