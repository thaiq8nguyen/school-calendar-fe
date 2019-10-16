import React from 'react';
import fireapp from "../../firebase/index.js";

import Navbar from "../../components/Navbar";


import AdminDashBoard from './AdminDashboard';

const Index = () => {
    return (
      <div className = "Index-container">  
        <Navbar />
        <AdminDashBoard 
          
        />
      </div>
    );
};

export default Index; 