import React, {useState, useEffect} from 'react'
import { useNavigate  } from "react-router-dom"
import login from '../layout/images/login.PNG'
import './auth.css'
import axios from 'axios';
import { useAlert } from 'react-alert'

const Register = props => {
    localStorage.clear();

    const alert = useAlert()

    //allow to navigate through the routes
    const navigate = useNavigate ();

    //user register fields
    const [user,setUser] = useState({
        name: '',
        lastnameP: '',
        lastnameM: '',
        date: '',
        type: 1,
        sex: 'Masculino',
        cedula: '',
        email: '',
        password: '',
        password2: '',
        pfp: ''
    });

    const [authState,setAuth] = useState({
        token: ''
    });

    useEffect(() => {
        if(authState.token !== ''){
            navigate('/home');
        }
        //eslint-disable-next-line
    },[authState.token]);

    const {name,lastnameP,lastnameM,date,cedula,email,password,password2,pfp} = user;

    //copies user data and changes the target of the onchange
    const onChange = e => setUser({...user, [e.target.name]:e.target.value});

    const registerUser = async() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('https://geriatrik-api.herokuapp.com/register',user,config);
            setAuth({token: res.data.token});

            localStorage.setItem('id',res.data.empleadoID);
            localStorage.setItem('name',res.data.name);
            localStorage.setItem('token',res.data.token);
            alert.success('Bienvenid@ ' + res.data.name);

        } catch (error) {
            alert.error(error.response.data.msg);
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(user);
        if(name === '' || email === '' || password === ''){
            //missing info
            console.log("Please fill all the inputs");
        }else if (password !== password2){
            //passwords do not match
            console.log("Passwords do not match");
        }else{
            //register
            registerUser();
        }
    }


    
    const showPassword = () =>{
        const toggle = document.getElementById('togglePassword');
        const password = document.getElementById('password');

        if(toggle.className === 'bi-eye'){
            toggle.className = 'bi-eye-slash' 
            password.type = 'text';
        }else{
            toggle.className = 'bi-eye';
            password.type = 'password';
        } 
    }

    const showPassword2 = () =>{
        const toggle2 = document.getElementById('togglePassword2');
        const password2 = document.getElementById('password2');

        if(toggle2.className === 'bi-eye'){
            toggle2.className = 'bi-eye-slash' 
            password2.type = 'text';
        }else{
            toggle2.className = 'bi-eye';
            password2.type = 'password';
        } 
    }

    return (
        <div className='grid-2'>
            <div className='form-container'>
                <h1 className='geriatrik'>GERIATRIK</h1>
                <h2 className='auth-header'>Registrate</h2>
                    <form onSubmit={onSubmit}>
                        <div className='grid-2'>
                            <div>
                                <input placeholder='Nombre' type='text' name = 'name' value={name} onChange = {onChange} required/>
                                <input placeholder='Apellido Paterno' type='text' name = 'lastnameP' value={lastnameP} onChange = {onChange} required/>
                                <input placeholder='Fecha de nacimiento' type='date' name = 'date' value={date} onChange = {onChange} required/>
                                <select id="empleados" name='type' onChange = {onChange}>
                                    <option value={1}>Médic@</option>
                                    <option value={2}>Enfermer@</option>
                                </select >
                                <select  id="sexos" name='sex' onChange = {onChange}>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select >
                            </div>
                            <div>
                                <input placeholder='Cédula' type='text' name = 'cedula' value={cedula} onChange = {onChange} required/>
                                <input placeholder='Apellido Materno' type='text' name = 'lastnameM' value={lastnameM} onChange = {onChange} required/>
                                <input placeholder='Correo Electrónico' type='email' name = 'email' value={email} onChange = {onChange} required/>
                                <div>
                                    <i className="bi bi-eye" id="togglePassword" onClick={showPassword}/>
                                    <input id = "password" placeholder='Contraseña' type='password' name = 'password' value={password} onChange = {onChange} required minLength={6}/>
                                </div>
                                <div>
                                    <i className="bi bi-eye" id="togglePassword2" onClick={showPassword2}/>
                                    <input id = "password2" placeholder='Confirmar' type='password' name = 'password2' value={password2} onChange = {onChange} required minLength={6}/>
                                </div>
                                <input placeholder='URL img de perfil' type='text' name = 'pfp' value={pfp} onChange = {onChange} required/>

                            </div>
                        </div>
                        <br/>
                    <input type="submit" value = "Registarse"/>
                </form>
                <button style = {{marginBottom:'5%'}} className='btn-back' onClick={() => navigate('/')}> Atrás</button>
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