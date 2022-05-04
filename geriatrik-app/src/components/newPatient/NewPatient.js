import React, {useState} from 'react'
import { useNavigate  } from "react-router-dom"


const NewPatient = () => {
    
    //allow to navigate through the routes
    const navigate = useNavigate ();

    //user register fields
    const [user,setUser] = useState({
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

    const {name, lastName, motherLastName, birthday, gender, scholarity, disabilities, memoryComplaint, severeHearingLoss, emergencyContact, image} = user;

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
                <h2 className='auth-header'>Add New Patient</h2>
                <form onSubmit={onSubmit}>
                    <div className='grid-2'>
                        <div>
                            <input placeholder='Nombre' type='text' name = 'name' value={name} onChange = {onChange} required/>
                            <input placeholder='Apellido Paterno' type='text' name = 'lastName' value={lastName} onChange = {onChange} required/>
                            <input placeholder='Apellido Materno' type='text' name = 'motherLastName' value={motherLastName} onChange = {onChange} required/>
                            <label for="fe">Fecha de Nacimiento</label>
                            <input type='date' name = 'birthday' value={birthday} onChange = {onChange} required/>
                            <select  id="sexos" name='sex' onChange = {onChange}>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select >
                        </div>
                        <div>
                            <input placeholder='Escolaridad' type='text' name = 'scholarity' value={scholarity} onChange = {onChange} required/>
                            <input placeholder='Discapacidades' type='text' name = 'disabilities' value={disabilities} onChange = {onChange} required/>
                            <label>Queja de memoria</label>
                            <input placeholder='Queja de memoria' type='checkbox' name = 'memoryComplaint' value={memoryComplaint} onChange = {onChange} />
                            <label>Hipoacusia severa</label>
                            <input placeholder='Hipoacusia severa' type='checkbox' name = 'severeHearingLoss' value={severeHearingLoss} onChange = {onChange} />
                            <input placeholder='Contacto de Emergencia' type='number' name = 'emergencyContact' value={emergencyContact} onChange = {onChange} required/>
                            <input placeholder='URL Foto de perfil' type = 'text' id = "files" value={image} accept="image/png, image/jpeg" onChange = {onChange}/>
                        </div>
                    </div>
                    <input type="submit" value = "Agregar Paciente" formTarget='_blank'/>
                </form>
                <button className='btn-back' onClick={() => navigate('/home')}> Atrás</button>
            </div>
        </div>
    )
}

export default NewPatient;
