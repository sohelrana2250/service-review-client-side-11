import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='w-50 m-auto'>
            <Form className='m-5'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <p className='text-danger'>Please Register Your Account Info <Link to='/register'>Register</Link></p> */}
                </Form.Group>
                <Button variant="outline-danger" className='pl-3 fs-5' type="submit">
                    Login
                </Button>

                <Form.Group className='mt-3'>
                    <><Button className='me-3 mt-3 fs-5' variant="outline-danger">  Login-With-Google</Button>
                    </>
                </Form.Group>

                {/* <Form.Text className='fs-3 text-success'> {login ? 'Successfuly-Login' : ''}</Form.Text> */}

                {/* <Form.Text className='text-danger fs-2'>{error}</Form.Text> */}
            </Form>


        </div>
    );
};

export default Login;