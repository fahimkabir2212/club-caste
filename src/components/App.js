import React from 'react';
import './App.css';
import {Register} from './Register';
import {Login} from './Login';
import Dashboard from './Dashboard';
import { AuthProvider } from '../Context/AuthContext';
import { Container } from 'react-bootstrap';
import ProtectedRoute from './PrivateRoute'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ClubdDashboard} from './ClubdDashboard' ;
import {ProjectDashboard} from './ProjectDashboard' ;
import {Discussion} from './Discussion' ;
import {Tasklist} from './Tasklist';




function App() {
  return (
    <AuthProvider>
      <div id='comps' style={ {minHeight: "100vh"} }>
      
      <div className="w-100 vh-100" >
        <Router>
          <AuthProvider>
              <Routes>
                <Route path='/' exact  element = {<ProtectedRoute><Dashboard/></ProtectedRoute>} />
                <Route path="/signup" element = {<Register/>} />
                <Route path="/login" element = {<Login/>} />
                <Route path="/clubdashboard" element = {<ProtectedRoute><ClubdDashboard/></ProtectedRoute>} />
                <Route path="/projectdashboard" element = {<ProtectedRoute><ProjectDashboard/></ProtectedRoute>} />
                <Route path="/discussion" element = {<ProtectedRoute><Discussion/></ProtectedRoute>} />
                <Route path="/tasklist" element = {<ProtectedRoute><Tasklist/></ProtectedRoute>} />
              </Routes>
            </AuthProvider>
        </Router>
      </div>

        
      </div>
      
    </AuthProvider>
    
  );
}

export default App;
