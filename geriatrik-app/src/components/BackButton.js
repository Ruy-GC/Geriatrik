import React from 'react';
import { Link } from 'react-router-dom';

import * as RiIcons from 'react-icons/ri';
import './BackButton.css';

const BackButton = ({link}) => {
  return (
        
        <Link to={link}>
            <button className ='Button'>
                <RiIcons.RiArrowGoBackLine className='Arrow'/> 
            </button>
        </Link>
  ); 
}

export default BackButton