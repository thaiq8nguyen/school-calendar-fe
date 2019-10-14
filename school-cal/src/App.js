import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import RegisterForm from './components/RegisterForm.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';

import './App.css';
import Login from './components/logincomp';

function App() {
  return (
    <div className="App">
        <Login />
        <Route exact path ='/' component={HomePage} />
        <Route path = '/register' component={RegisterForm} />
        <NavBar /> 
        <Footer />
    </div>
  );
}

export default App;
