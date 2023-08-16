import React, {useRef, useState} from 'react'
import './App.css';
import { useAuth } from '../Context/AuthContext';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';




export const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

async function handleSubmit(e){
        e.preventDefault();

        try {
            setError("")
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/');
          } catch {
            setError("Failed to log in");
          }
        setLoading(false);

        
    }

  return (

    <>
        <div className='login-page d-flex'>
            <div className='img vh-100'>
                <div class="overlay"></div>
            </div>  
            <div className='login-form'>
                <Card>
                    <Card.Body>
                        <h2 id='email' className="text-center mb-4">LOG IN</h2>
                        {error && <Alert variant='danger'> {error} </Alert>}
                        <form onSubmit={handleSubmit}>
                            <Form.Group className='mt-3'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id='password' className='mt-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' ref={passwordRef} required />
                            </Form.Group>
                            <Button disabled={loading} type='submit' className='w-100 mt-4  btn-dark'>Log In</Button>
                        </form>
                    </Card.Body>
                    <div className="w-100 text-center mt-2 mb-4">
                        Don't an account? <Link to="/signup" >Sign Up</Link>
                    </div>
                </Card>
            </div>
        </div>
        
    </>
  )
}
