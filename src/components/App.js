import React from 'react';
import './App.css';
import {Register} from './Register';
import { AuthProvider } from '../Context/AuthContext';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <AuthProvider>
      <Container className='d-flex align-items-center justify-content-center'
      style={ {minHeight: "100vh"} }>
      
      <div className="w-100" style={ {maxWidth: "400px"} }>
        <Router>
          
        </Router>
        <Register/>
      </div>

        
      </Container>
      
    </AuthProvider>
    
  );
}

export default App;
