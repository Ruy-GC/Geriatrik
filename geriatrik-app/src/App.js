import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/pages/Home";
import Reports from "./components/pages/Reports";
import Navbar from "./components/Navbar";
import Patient from "./components/pages/PatientCards/Patient";
import NewPatient from './components/newPatient/NewPatient';

function App() {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path='/' element = {<Login/>}/>
                    <Route exact path='/home' element = {<Home/>}/>
                    <Route exact path='/Register' element = {<Register/>}/>
                    <Route exact path='/PatientCard' element = {<Patient/>}/>
                    <Route exact path='/NewPatient' element = {<NewPatient/>}/>
                </Routes>
            </Fragment>
        </Router>
  );
}

export default App;
