import React, {useEffect, useState} from 'react'
import { useNavigate  } from "react-router-dom"
import login from '../layout/images/login.PNG'
import './auth.css'
import axios from 'axios';
import { useAlert } from 'react-alert'

const Login = () => {
    localStorage.clear();
    const alert = useAlert()

    const navigate = useNavigate();

    const [user,setUser] = useState({
        email: '',
        password: ''
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

    const {email,password} = user;

    const onChange = e => setUser({...user, [e.target.name]:e.target.value});

    const loginUser = async() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: false,
        }

        try {
            const res = await axios.post('https://geriatrik-api.herokuapp.com/login',user,config);
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

        loginUser();

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

    return (
        <div className='grid-2'>
            <div className='form-container'>
                <h1 className='geriatrik'>GERIATRIK</h1>
                <h2 className='auth-header'>Iniciar Sesión</h2>
                <form onSubmit={onSubmit}>
                    <input placeholder='Correo Electrónico' type='email' name = 'email' value={email} onChange = {onChange} required/>
                    <div>
                        <i className="bi bi-eye" id="togglePassword" onClick={showPassword}/>
                        <input id = "password" placeholder='Contraseña' type='password' name = 'password' value={password} onChange = {onChange} required/>
                    </div>
                    <p style={{margin: '15px', cursor: 'pointer',textDecoration: 'underline'}} onClick = {() => navigate('/register')}>¿No tienes cuenta? Registrate</p>
                    <input type="submit" value = "Iniciar Sesión"/>
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

export default Login