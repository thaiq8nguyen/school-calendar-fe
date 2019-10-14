import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
// import Calendar from './components/Calendar.js';
import RegisterForm from './components/RegisterForm.js';
import Footer from './components/footer.js';

import './App.css';

function App() {
  return (
    <div className="App">
        <Route exact path ='/' component={HomePage} />
        <Route path ='/plan-it' component={Calendar} />
        <Route path = '/register' component={RegisterForm} />
        <NavBar /> 
        <Footer />
    </div>
  );
}

export default App;
