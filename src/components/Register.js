import React, {useRef, useState} from 'react'
import { useAuth } from '../Context/AuthContext';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';



export const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError ('Passwords do not match');
        }

        try{
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate('/');
        }catch{
            setError('Failed to create an acocunt');
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
                        <h2 className="mb-4">Signup</h2>
                        {error && <Alert variant='danger'> {error} </Alert>}
                        <form onSubmit={handleSubmit}>
                            <Form.Group className='mt-3'>
                                <Form.Label className='form-label'>Email</Form.Label>
                                <Form.Control type='email' ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id='password' className='mt-3'>
                                <Form.Label className='form-label'>Password</Form.Label>
                                <Form.Control type='password' ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group id='password-confirm' className='mt-3'>
                                <Form.Label className='form-label'>Confirm Password</Form.Label>
                                <Form.Control type='password' ref={passwordConfirmRef} required />
                            </Form.Group>
                            <Button disabled={loading} type='submit' className='w-100 mt-4  btn-dark'>Sign up</Button>
                        </form>
                    </Card.Body>
                    <div className="txt-form w-100 mt-2 mb-4">
                        Already Have an account? <Link className='linking' to="/login" >Login</Link>
                    </div>
                </Card>
            </div>

        </div>
        
        
    </>
  )
}
