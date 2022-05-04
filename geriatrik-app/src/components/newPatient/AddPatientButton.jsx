import { useNavigate  } from "react-router-dom"
import React, {useState} from 'react'
import './newPatient.css'


const AddPatientButton = () => {
    const navigate = useNavigate ();
    /*  ---  MODAL FORM --- */
    
    //patient register fields
    const [patient,setPatient] = useState({
        "name": '',
        "lastName": '',
        "motherLastName": '',
        "birthday": '',
        "gender": '',
        "scholarity": '',
        "disabilities": '',
        "memoryComplaint": false,
        "severeHearingLoss": false,
        "emergencyContact": '',
        "image": ''
    });

    const {name, lastName, motherLastName, birthday, gender, scholarity, disabilities, memoryComplaint, severeHearingLoss, emergencyContact, image} = patient;

    //copies patient data and changes the target of the onchange
    const onChange = e => {
        // Actualizamos para los diferentes tipos de datos recopilados
        if(e.target.name === 'memoryComplaint'){
            e.target.value = document.getElementById('memoryCheckbox').checked;
        }
        else if(e.target.name === 'severeHearingLoss'){
            e.target.value = document.getElementById('hearingCheckbox').checked;
        }
        else if(e.target.name === 'sexos'){
            e.target.value = document.getElementById('hearingCheckbox').value;
        }
        setPatient({...patient, [e.target.name]:e.target.value}); 
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log(patient)
        if(name === '' || lastName === '' || motherLastName === '' || birthday === '' || gender === '' || scholarity === '' || disabilities === '' || memoryComplaint === '' || severeHearingLoss === '' || emergencyContact === ''){
            console.log('Missing info')
            //missing info
        }else{
            console.log('Passed test')
            addToDB(patient);
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
        if(e.target === modalContainer){
            close();
        }
    })


    /*  ---  ADD TO DATABASE --- */

    const addToDB = (patient) => {
        console.log(JSON.stringify(patient));
        fetch("/addPatient", {
          method: 'POST',
          headers:{
            'Content-type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify(patient)
        }).then(console.log("Data inserted to paciente in geriatrik DB"));
    }

    return(
        <section>
            <a href="#" class='addPatientButton' onClick={open}>.</a>
            <div class = "modal-container">
                <div class = "modal modal-close">
                    <a class = "close" onClick={close}>X</a>
                    <div class = "modal-text">
                        <h2 className='header'>Agregar nuevo paciente</h2>
                        <form onSubmit={onSubmit}>
                            <div className='grid-2'>
                                <div>
                                    <input placeholder='Nombre' type='text' name = 'name' value={name} onChange = {onChange} required/>
                                    <input placeholder='Apellido Paterno' type='text' name = 'lastName' value={lastName} onChange = {onChange} required/>
                                    <input placeholder='Apellido Materno' type='text' name = 'motherLastName' value={motherLastName} onChange = {onChange} required/>
                                    <input type='date' name = 'birthday' value={birthday} onChange = {onChange} required/>
                                    <select  placeholder='Sexo' id="sexos" name='gender' onChange = {onChange}>
                                        <option disabled selected>Sexo</option>
                                        <option value="H">Masculino</option>
                                        <option value="M">Femenino</option>
                                    </select >
                                    <input placeholder='Escolaridad' type='text' name = 'scholarity' value={scholarity} onChange = {onChange} required/>
                                </div>
                                <div>
                                    <input placeholder='Discapacidades' type='text' name = 'disabilities' value={disabilities} onChange = {onChange} required/>
                                    <div class ='toggle-div'>
                                        <label class ='toggle-label'>Queja de Memoria</label>
                                        <label class="toggle">
                                            <input id='memoryCheckbox' type='checkbox' name = 'memoryComplaint' onChange = {onChange} />
                                            <span class = "slider"></span>
                                            <span class ="labels" data-on="SI" data-off="NO"></span>
                                        </label>
                                    </div>
                                    <div class ='toggle-div'>    
                                        <label class ='toggle-label'>Hipoacusia severa</label>
                                        <label class="toggle">
                                        <input id='hearingCheckbox' type='checkbox' name = 'severeHearingLoss' onChange = {onChange} />
                                            <span class = "slider"></span>
                                            <span class ="labels" data-on="SI" data-off="NO"></span>
                                        </label>
                                    </div>
                                
                                    <input placeholder='Contacto de Emergencia' type='text' name = 'emergencyContact' value={emergencyContact} onChange = {onChange} required/>
                                    <input placeholder='URL Foto de perfil' type = 'text' name = 'image' value={image} onChange = {onChange} required/>
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