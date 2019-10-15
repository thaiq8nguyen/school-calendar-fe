import React from 'react';
import AppRouter from "./AppRouter";
import './App.css';
import Login from './components/Login/index'; 
import { BrowserRouter as Router , Route } from 'react-router-dom'
import DummyAdminDashboard from './components/DummyAdminDashboard'
// import privateRoute from './routes/privateRoute.js'


function App() {
  return ( 
    <Router>
    <div className="App">
      {/* private route */}
    <Route exact path = "/admin" component ={DummyAdminDashboard}/>  
    <Route exact path = "/login" component = {Login}/> 
    </div> 
    <AppRouter />
    </Router>
  );
}

export default App;
