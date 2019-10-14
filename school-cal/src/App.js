import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import RegisterForm from './components/RegisterForm.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';

import './App.css';

function App() {
  return (
    <div className="App">
        <Route exact path ='/' component={HomePage} />
        <Route path = '/register' component={RegisterForm} />
        <NavBar /> 
        <Footer />
    </div>
  );
}

export default App;
