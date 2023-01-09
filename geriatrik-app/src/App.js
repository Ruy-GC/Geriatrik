import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/pages/Home";
import Patient from "./components/pages/PatientCards/Patient";
import Moca from "./components/pages/MocaPage/Moca";


//utils
import setAuthToken from "./utils/setAuthToken";
import Profile from "./components/pages/Profile";

//set auth token for all the web app
if(localStorage.getItem('token')){
    setAuthToken(localStorage.getItem('token')); 
}

function App() {
    return (
        <Router basename="/Geriatrik">
            <Fragment>
                <Routes>
                    <Route path='/moca/:idEmpleado/:idPaciente' element = {<Moca/>}/>
                    <Route exact path='/' element = {<Login/>}/>
                    <Route exact path='/home' element = {<Home/>}/>
                    <Route exact path='/profile/:id' element = {<Profile/>}/>
                    <Route exact path='/Register' element = {<Register/>}/>
                    <Route exact path='/PatientCard/:id' element = {<Patient/>}/>
                </Routes>
            </Fragment>
        </Router>
  );
}

export default App;
