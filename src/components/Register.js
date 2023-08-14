import React, {useRef, useState} from 'react'
import { useAuth } from '../Context/AuthContext';
import { Form, Button, Card, Alert } from 'react-bootstrap';



export const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== emailRef.current.value){
            return setError ('Passwords do not match');
        }

        try{
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
        }catch{
            setError('Failed to create an acocunt');
        }
        setLoading(false);

        
    }

  return (

    <>
        <div>
            <Card>
                <Card.Body>
                    <h2 id='email' className="text-center mb-4">Sign Up</h2>
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
                        <Form.Group id='password-confirm' className='mt-3'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} type='submit' className='w-100 mt-4  btn-dark'>Sign up</Button>
                    </form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already Have an account? Log In
            </div>
        </div>
        
    </>
  )
}
