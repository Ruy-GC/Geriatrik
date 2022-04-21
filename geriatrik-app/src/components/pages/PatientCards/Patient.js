import React from 'react'
import OldMan from '../../layout/images/OldManPic.jpg'
import './Patient.css' 

const Patient =() =>{
    return(
    <div className='Card'>
        <PatientInfo 
        name = "Adrian Becerra"
        age = "89"
        sex = "Hombre"/> 
    </div>
    )
}

const PatientInfo =(props) =>{
    return(
    <div className='CardInfo'>
        <div className='CardBody'>
            <img className='PatientImg' src={OldMan}/>
            <h1 className='PatientName'>{props.name}</h1>
            <h2 className='PatientAge'>{props.age}</h2>
            <h3 className='PatientSex'>{props.sex}</h3>
        </div>
    </div>
    )
}

export default Patient

