import './Navbar.css';
import React from 'react';
import logo from "../../assets/images/userAsset/logo.png"
import { LuPlus } from "react-icons/lu";
import { useState } from 'react';
import LoginModal from '../LoginModal/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../slices/profileSlice';



const Navbar = () => {


    const [loginModalData, setLoginModalData] = useState(false);
    const {user} = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const logoutFunction = () => {
        localStorage.setItem("user", null);
        dispatch(setUser(null));
    }


    return (
        <div className='navbar_wrapper'>
            
            <div>
                <img src={logo} className='portfolioLogo' />
            </div>

            <div className='nav_items'>
                <div className='portfolio_nav_textItems'>
                    <p className='portfolio_nav_text'>Projects</p>
                    <p className='portfolio_nav_text'>Skills</p>
                    <p className='portfolio_nav_text'>Contact Me</p>
                </div>

                {/* <div className='nav_add'>
                    <p className='nav_addText'>Add</p>
                    <LuPlus className='nav_plus_icon'/>
                </div> */}
                {
                    user && (
                        <div className='nav_login'
                            onClick={ logoutFunction}
                        >
                            {/* <img 
                                src={`https://api.dicebear.com/5.x/initials/svg?seed=ashish%20purty`}
                                className='dice_icon' 
                            /> */}
                            Logout
                        </div> 
                    )
                }
                
                {
                    !user && (
                        <div 
                            className='nav_login'
                            onClick={() => setLoginModalData(true)}
                        >
                            login
                        </div>
                    )
                }

                        

                

                

                
            </div>
            
                {
                    loginModalData && (
                        <LoginModal setLoginModalData={setLoginModalData} />
                    )
                }

                
            
        </div>
    )
}

export default Navbar;