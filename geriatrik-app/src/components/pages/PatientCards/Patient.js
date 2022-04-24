import React from 'react'
import OldMan from '../../layout/images/OldManPic.jpg'
import './Patient.css' 
import  TestButton  from '../../TestButton'
import  Graph  from '../../Graph'

const HomeLink = "/";

const Patient =() =>{
    return(
        <div className='Card'>
            <PatientInfo 
                image = {OldMan}
                name = "Adrian Becerra"
                age = "89"
                sex = "Masculino"/> 
            <PatientRegistry
                emergencyC = "333-222-2200"
                school = "Secundaria"
                memory = "Si"
                difficulties = "No"
                hipoacusia = "No"/>
            <Details
                
                />
        </div>
    )
}

const PatientInfo =(props) =>{
    return(
    <div className='CardInfo'>
        <div className='CardBody'>
            <img className='PatientImg' src={props.image}/>
            <br></br><br></br>
            <h1 className='PatientName'>{props.name}</h1>
            <br></br>
            <h2 className='PatientAge'>Edad: {props.age}</h2>
            <br></br>
            <h2 className='PatientSex'>Sexo: {props.sex}</h2>
            <br></br><br></br>
        </div>
    </div>
    )
}

const PatientRegistry =(props) =>{
    return(
        <div className='CardRegistry'>
            <div className='CardBody'>
                <br></br>
                <h2 className='PatientRegistryT'>Contacto de emergencia:</h2>
                <p className='PatientRegistryA'>{props.emergencyC}</p>
                <br></br>
                <h2 className='PatientRegistryT'>Escolaridad:</h2>
                <p className='PatientRegistryA'>{props.school}</p>
                <br></br>
                <h2 className='PatientRegistryT'>Queja de memoria:</h2>
                <p className='PatientRegistryA'>{props.memory}</p>
                <br></br>
                <h2 className='PatientRegistryT'>Discapacidades:</h2>
                <p className='PatientRegistryA'>{props.difficulties}</p>
                <br></br>
                <h2 className='PatientRegistryT'>Hipoacusia severa:</h2>
                <p className='PatientRegistryA'>{props.hipoacusia}</p>
                <br></br>
                
            </div>
        </div>
    )
}

const Details =(props) =>{
    return(
        <div className='CardDetails'>
            <div className='CardBody'>
                <TestButton
                    type = "button"
                    buttonStyle = "btn--secondary--solid"
                    buttonSize = "btn--large"
                    link={HomeLink}
                    className = 'BotonMoca'>
                    MOCA
                    
                </TestButton>
            </div>
        </div>
    )
}


export default Patient

