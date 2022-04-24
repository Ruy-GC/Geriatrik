import React from 'react';
import "./Test_button.css";
import { Link } from 'react-router-dom';
import * as BiIcons from 'react-icons/bi';

const STYLES = [
    "btn--primary--solid",
    "btn--secondary--solid"
]

const SIZES = ["btn--medium", "btn--large"]

const TestButton = ({
    children,
    type,
    buttonStyle,
    buttonSize,
    link,
    icon
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle 
        : STYLES[0];
    
    const checkButtonSize = SIZES.includes(buttonSize) 
        ? buttonSize 
        : SIZES[0];

    return (
        <Link to={link}>
            <button className ={`btn ${checkButtonStyle} ${checkButtonSize}`} type={type}>
                <BiIcons.BiNotepad style={{color: 'white', fontSize: '26px',   float: 'left', display: 'block'}}/> 
                {children}
            </button>
        </Link>
  );
};

export default TestButton
