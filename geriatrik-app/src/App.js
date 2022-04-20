import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {Fragment} from 'react';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/pages/Home';

function App() {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path='/' element = {<Home/>}/>
                    <Route exact path='/login' element = {<Login/>}/>
                    <Route exact path='/Register' element = {<Register/>}/>
                </Routes>
            </Fragment>
            {/*<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            </div>*/}
        </Router>
        
  );
}

export default App;
