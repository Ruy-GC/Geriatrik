import React, {useState} from 'react'
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

    /*const togglePassword = document.querySelector('#togglePassword');
    const passwordInput = document.querySelector('#password');

    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        // toggle the eye / eye slash icon
        this.classList.toggle('bi-eye-slash');
    });*/

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