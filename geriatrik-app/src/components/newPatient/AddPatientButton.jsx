import { useNavigate  } from "react-router-dom"
import React, {useState} from 'react'
import './newPatient.css'


const AddPatientButton = () => {
    const navigate = useNavigate ();
    /*  ---  MODAL FORM --- */
    
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
    
    /*  ---  MODAL ACTIONS --- */
    let modal = document.querySelectorAll(".modal")[0];
    let modalContainer = document.querySelectorAll(".modal-container")[0];

    const open = e => {
        e.preventDefault();
        modalContainer.style.opacity = "1";
        modalContainer.style.visibility ="visible";
        modal.classList.toggle("modal-close");
    }
    const close = () => {
        modal.classList.toggle("modal-close");
        setTimeout(function(){
            modalContainer.style.opacity = "0";
            modalContainer.style.visibility = "hidden";
        }, 600)//vamos a darle 1s para ejecutar la función
    }
    
    window.addEventListener("click", function(e){
        console.log(e.target);
        if(e.target == modalContainer){
            close();
        }
    })

    return(
        <section>
            <a href="#" class='addPatientButton' onClick={open}>.</a>
            <div class = "modal-container">
                <div class = "modal modal-close">
                    <a class = "close" onClick={close}>X</a>
                    <div class = "modal-text">
                        <h2 className='header'>Add New Patient</h2>
                        <form onSubmit={onSubmit}>
                            <div className='grid-2'>
                                <div>
                                    <input placeholder='Nombre' type='text' name = 'name' value={name} onChange = {onChange} required/>
                                    <input placeholder='Apellido Paterno' type='text' name = 'lastName' value={lastName} onChange = {onChange} required/>
                                    <input placeholder='Apellido Materno' type='text' name = 'motherLastName' value={motherLastName} onChange = {onChange} required/>
                                    <input type='date' name = 'birthday' value={birthday} onChange = {onChange} required/>
                                    <select  id="sexos" name='sex' onChange = {onChange}>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                    </select >
                                    <input placeholder='Escolaridad' type='text' name = 'scholarity' value={scholarity} onChange = {onChange} required/>
                                </div>
                                <div>
                                    <input placeholder='Discapacidades' type='text' name = 'disabilities' value={disabilities} onChange = {onChange} required/>
                                    <div class ='toggle-div'>
                                        <label class ='toggle-label'>Queja de Memoria</label>
                                        <label class="toggle">
                                            <input type='checkbox' name = 'memoryComplaint' value={memoryComplaint} onChange = {onChange} />
                                            <span class = "slider"></span>
                                            <span class ="labels" data-on="SI" data-off="NO"></span>
                                        </label>
                                    </div>
                                    <div class ='toggle-div'>    
                                        <label class ='toggle-label'>Hipoacusia severa</label>
                                        <label class="toggle">
                                        <input placeholder='Hipoacusia severa' type='checkbox' name = 'severeHearingLoss' value={severeHearingLoss} onChange = {onChange} />
                                            <span class = "slider"></span>
                                            <span class ="labels" data-on="SI" data-off="NO"></span>
                                        </label>
                                    </div>
                                
                                    <input placeholder='Contacto de Emergencia' type='number' name = 'emergencyContact' value={emergencyContact} onChange = {onChange} required/>
                                    <input placeholder='URL Foto de perfil' type = 'text' id = "files" value={image} accept="image/png, image/jpeg" onChange = {onChange}/>
                                </div>
                            </div>
                            <input type="submit" value = "Agregar Paciente" formTarget='_blank'/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default AddPatientButton