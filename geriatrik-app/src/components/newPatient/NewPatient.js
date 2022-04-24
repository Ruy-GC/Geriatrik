import React, {useState} from 'react'
import { useNavigate  } from "react-router-dom"
import login from '../layout/images/login.PNG'
import AddPatientButton from './AddPatientButton'

const NewPatient = () => {
    
    //allow to navigate through the routes
    const navigate = useNavigate ();

    //user register fields
    const [user,setUser] = useState({
        ID: '',
        name: '',
        lastName: '',
        motherLastName: '',
        birthday: '',
        gender: '',
        scholarity: '',
        disabilities: '',
        memoryComplaint: '',
        severeHearingLoss: '',
        emergencyContact: '',
        profileImage: ''
    });

    const {ID, name, lastName, motherLastName, birthday, gender, scholarity, disabilities, memoryComplaint, severeHearingLoss, emergencyContact, image} = user;

    //copies user data and changes the target of the onchange
    const onChange = e => setUser({...user, [e.target.name]:e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        if(name === '' || lastName === '' || motherLastName === '' || birthday === '' || gender === '' || scholarity === '' || disabilities === '' || memoryComplaint === '' || severeHearingLoss === '' || emergencyContact === ''){
            //missing info
        }else{
            //register
            navigate('/home');
        }
    }
    
    //El onfocus="(this.type='date')" no sirve
    return (
        <div className='grid-2'>
            <div className='form-container'>
                <h1 className='geriatrik'>GERIATRIK</h1>
                <h2 className='auth-header'>Add New Patient</h2>
                <form onSubmit={onSubmit}>
                    <input placeholder='Nombre' type='text' name = 'name' value={name} onChange = {onChange} required/>
                    <input placeholder='Apellido Paterno' type='text' name = 'lastName' value={lastName} onChange = {onChange} required/>
                    <input placeholder='Apellido Materno' type='text' name = 'motherLastName' value={motherLastName} onChange = {onChange} required/>
                    <label for="fe">Fecha de Nacimiento</label>
                    <input type='date' name = 'birthday' value={birthday} onChange = {onChange} required/>
                    <input placeholder='Sexo (H/M)' type='text' name = 'gender' value={gender} onChange = {onChange} required/>
                    <label for="escolaridad">Escolaridad</label>
                    <input id = "escolaridad" type='checkbox' name = 'scholarity' value={scholarity} onChange = {onChange}/>
                    <input placeholder='Discapacidades' type='text' name = 'disabilities' value={disabilities} onChange = {onChange} required/>
                    <label>Queja de memoria</label>
                    <input placeholder='Queja de memoria' type='checkbox' name = 'memoryComplaint' value={memoryComplaint} onChange = {onChange} />
                    <label>Hipoacusia severa</label>
                    <input placeholder='Hipoacusia severa' type='checkbox' name = 'severeHearingLoss' value={severeHearingLoss} onChange = {onChange} />
                    <input placeholder='Contacto de Emergencia' type='number' name = 'emergencyContact' value={emergencyContact} onChange = {onChange} required/>
                    <label for="files">Foto de perfil</label>
                    <input type='file' id = "files" value={image} accept="image/png, image/jpeg" onChange = {onChange}/>
                    <input type="submit" value = "Agregar Paciente" formTarget='_blank'/>
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
        </div>
    )
}

export default NewPatient;
