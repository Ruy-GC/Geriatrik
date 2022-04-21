import React, {useState} from 'react'
import { useNavigate  } from "react-router-dom"
import login from '../layout/images/login.PNG'

const Register = props => {
    
    //allow to naviigate through the routes
    const navigate = useNavigate ();

    //user register fields
    const [user,setUser] = useState({
        name: '',
        lname: '',
        date: '',
        type: '',
        sex: '',
        cedula: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name,lname,date,type,cedula,sex,email,password,password2} = user;

    //copies user data and changes the target of the onchange
    const onChange = e => setUser({...user, [e.target.name]:e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        if(name === '' || email === '' || password === ''){
            //missing info
        }else if (password !== password2){
            //passwords do not match
        }else{
            //register
            navigate('/home');
        }
    }
    
    return (
        <div className='grid-2'>
            <div className='form-container'>
                <h1 className='geriatrik'>GERIATRIK</h1>
                <h2 className='auth-header'>Registrate</h2>
                <form onSubmit={onSubmit}>
                    <input placeholder='Nombre' type='text' name = 'name' value={name} onChange = {onChange} required/>
                    <input placeholder='Apellido' type='text' name = 'lname' value={lname} onChange = {onChange} required/>
                    <input placeholder='Fecha de nacimiento' type='date' name = 'date' value={date} onChange = {onChange} required/>
                    <input style={{width:'35%',display:'inline-block'}} placeholder='Tipo de empleado' list = 'empleados' name = 'type' type='text'/>
                    <datalist id="empleados">
                        <option value="Médic@"/>
                        <option value="Enfermer@"/>
                    </datalist>
                    <input style={{width:'35%', display:'inline-block',margin:'2%'}} placeholder='Sexo' list = 'sexos' name = 'sex' type='text'/>
                    <datalist id="sexos">
                        <option value="Masculino"/>
                        <option value="Femenino"/>
                    </datalist>
                    <input placeholder='Cédula' type='text' name = 'cedula' value={cedula} onChange = {onChange} required/>
                    <input placeholder='Correo Electrónico' type='email' name = 'email' value={email} onChange = {onChange} required/>
                    <input placeholder='Contraseña' type='password' name = 'password' value={password} onChange = {onChange} required minLength={6}/>
                    <input placeholder='Confirmar Contraseña' type='password' name = 'password2' value={password2} onChange = {onChange} required minLength={6}/>
                    <input type="submit" value = "Registarse"/>
                </form>
                <button style = {{marginBottom:'5%'}} className='btn-back' onClick={() => navigate('/', { replace: true })}> Atrás</button>
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

export default Register;