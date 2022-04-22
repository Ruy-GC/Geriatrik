import React, {useState} from 'react'
import { useNavigate  } from "react-router-dom"
import login from '../layout/images/login.PNG'
import AddPatientButton from './AddPatientButton'

const NewPatient = () => {
    
    //allow to navigate through the routes
    const navigate = useNavigate ();

    //user register fields
    const [user,setUser] = useState({
        name: '',
        firstName: '',
        age: '',
        emergencyContact: '',
        scholarity: '',
        memoryComplaint: '',
        disabilities: '',
        severeHearingLoss: '',
        dateLastTest: ''  
    });

    const {name,firstName,age,emergencyContact, scholarity, memoryComplaint, disabilities, severeHearingLoss,dateLastTest} = user;

    //copies user data and changes the target of the onchange
    const onChange = e => setUser({...user, [e.target.name]:e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        if(name === '' || firstName === '' || age === '' || emergencyContact === '' || scholarity === '' || memoryComplaint === '' || disabilities === '' || severeHearingLoss === '' || dateLastTest === ''){
            //missing info
        }else{
            //register
            navigate('/home');
        }
    }
    
    return (
        <div className='grid-2'>
            <div className='form-container'>
                <h1 className='geriatrik'>GERIATRIK</h1>
                <h2 className='auth-header'>Add New Patient</h2>
                <form onSubmit={onSubmit}>
                    <input placeholder='Nombre' type='text' name = 'name' value={name} onChange = {onChange} required/>
                    <input placeholder='Primer Apellido' type='text' name = 'firstName' value={firstName} onChange = {onChange} required/>
                    <input placeholder='Edad' type='text' name = 'age' value={age} onChange = {onChange} required/>
                    <input placeholder='Contacto de Emergencia' type='text' name = 'emergencyContact' value={emergencyContact} onChange = {onChange} required/>
                    <input placeholder='Escolaridad' type='text' name = 'scholarity' value={scholarity} onChange = {onChange} required/>
                    <input placeholder='Queja de memoria' type='text' name = 'memoryComplaint' value={memoryComplaint} onChange = {onChange} required/>
                    <input placeholder='Discapacidades' type='text' name = 'disabilities' value={disabilities} onChange = {onChange} required/>
                    <input placeholder='Hipoacusia severa' type='text' name = 'severeHearingLoss' value={severeHearingLoss} onChange = {onChange} required/>
                    <input placeholder='Fecha de último test' type='date' name = 'dateLastTest' value={dateLastTest} onChange = {onChange} required/>

                    <input type="submit" value = "Agregar Paciente"/>
                    <button className='btn-back' onClick={() => navigate('/home')}> Atrás</button>
                    
                    
                </form>
            </div>
            <div>
                <center>
                    <img className='login-img'
                        src={login}
                        alt='Geriatra'
                    />
                </center>
            </div>
            <AddPatientButton/>
        </div>
    )
}

export default NewPatient;
