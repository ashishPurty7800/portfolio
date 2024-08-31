import React from 'react';
import "./HireMeButton.css"

const HireMeButton = ({children}) => {
    return (
        <div className='btn_pink' >
           {children}
        </div>
    )
}

export default HireMeButton;