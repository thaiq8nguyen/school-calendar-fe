import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/logincomp'; 
import {BrowserRouter as Router , Route} from 'react-router-dom'
import {Admin} from './components/DummyAdminDashboard'
import privateRoute from './routes/privateRoute.js'


function App() {
  return ( 
    <Router>
    <div className="App">
    <privateRoute exact path = "/admin" component ={Admin}/>  
    <Route exact path = "/login" component = {Login}/> 
    </div> 
    </Router>
  );
}

export default App;
