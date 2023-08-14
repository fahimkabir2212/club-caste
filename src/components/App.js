import React from 'react';
import './App.css';
import {Register} from './Register';
import {Login} from './Login';
import Dashboard from './Dashboard';
import { AuthProvider } from '../Context/AuthContext';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <AuthProvider>
      <Container className='d-flex align-items-center justify-content-center'
      style={ {minHeight: "100vh"} }>
      
      <div className="w-100" style={ {maxWidth: "400px"} }>
        <Router>
          <AuthProvider>
              <Routes>
                <Route exact path="/" element = {<Dashboard/>} />
                <Route path="/signup" element = {<Register/>} />
                <Route path="/login" element = {<Login/>} />
              </Routes>
            </AuthProvider>
        </Router>
      </div>

        
      </Container>
      
    </AuthProvider>
    
  );
}

export default App;
