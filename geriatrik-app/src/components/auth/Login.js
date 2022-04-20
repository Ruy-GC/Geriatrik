import React, {useState, useEffect} from 'react'
import { useNavigate  } from "react-router-dom"
import login from '../layout/images/login.PNG'
const Login = () => {

    const navigate = useNavigate ();

    const [user,setUser] = useState({
        email: '',
        password: ''
    });

    const {email,password} = user;

    const onChange = e => setUser({...user, [e.target.name]:e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        navigate('/home');
        /*if(email === '' || password === ''){
            //missing inputs
        }else{
            //login
        }*/
    }
    
    return (
        <div className='grid-2'>
            <div className='form-container'>
                <h1 className='geriatrik'>GERIATRIK</h1>
                <h2 className='auth-header'>Iniciar Sesión</h2>
                <form onSubmit={onSubmit}>
                    <input placeholder='Correo Electrónico' type='email' name = 'email' value={email} onChange = {onChange} required/>
                    <input placeholder='Contraseña' type='password' name = 'password' value={password} onChange = {onChange} required/>
                    <p style={{margin: '15px', cursor: 'pointer',textDecoration: 'underline'}} onClick = {() => navigate('/register', { replace: true })}>¿No tienes cuenta? Registrate</p>
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