import React from 'react'
import OldMan from '../../layout/images/OldManPic.jpg'
import './Patient.css' 

const Patient =() =>{
    return(
        <div className='Card'>
            <PatientInfo 
                name = "Adrian Becerra"
                age = "89"
                sex = "Masculino"/> 
            <PatientRegistry
                emergencyC = "333-222-2200"
                school = "Secundaria"
                memory = "Si"
                difficulties = "No"
                hipoacusia = "No"/>
        </div>
    )
}

const PatientInfo =(props) =>{
    return(
    <div className='CardInfo'>
        <div className='CardBody'>
            <img className='PatientImg' src={OldMan}/>
            <h1 className='PatientName'>{props.name}</h1>
            <h2 className='PatientAge'>Edad: {props.age}</h2>
            <h2 className='PatientSex'>Sexo: {props.sex}</h2>
        </div>
    </div>
    )
}

const PatientRegistry =(props) =>{
    return(
        <div className='CardRegistry'>
            <div className='CardBody'>
                <h2 className='PatientRegistryT'>Contacto de emergencia:</h2>
                <p className='PatientRegistryA'>{props.emergencyC}</p>
                <h2 className='PatientRegistryT'>Escolaridad:</h2>
                <p className='PatientRegistryA'>{props.school}</p>
                <h2 className='PatientRegistryT'>Queja de memoria:</h2>
                <p className='PatientRegistryA'>{props.memory}</p>
                <h2 className='PatientRegistryT'>Discapacidades:</h2>
                <p className='PatientRegistryA'>{props.difficulties}</p>
                <h2 className='PatientRegistryT'>Hipoacusia severa:</h2>
                <p className='PatientRegistryA'>{props.hipoacusia}</p>
                
            </div>
        </div>
    )
}


export default Patient

