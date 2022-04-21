import React from 'react'
import OldMan from '../../layout/images/OldManPic.jpg'

const Patient =() =>{
    return(
    <div className='Card'>
        <PatientInfo /> 
    </div>
    )
}

const PatientInfo =() =>{
    return(
    <div className='CardInfo'>
        <div className='CardBody'>
            <img src={OldMan}/>
            <h1 className='PatientName'>Adrian Becerra</h1>
            <h2 className='PatientAge'>89</h2>
            <h3 className='PatientSex'>Hombre</h3>
        </div>
    </div>
    )
}

export default Patient

