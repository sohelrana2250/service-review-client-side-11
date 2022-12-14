import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../Hook/useTitle';
import GoogleLogIn from '../../SocalMedia/GoogleLogIn';

const Login = () => {

    const { login } = useContext(AuthContext);
    const [Login, setLogain] = useState(false);
    const [error, setError] = useState(null);

    useTitle('Login');

    const location = useLocation();
    let navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const handelLoginSubmit = (event) => {

        event.preventDefault();
        const element = event.target;
        const email = element.email.value;
        const password = element.password.value;
        //console.log(email, password);
        login(email, password).then((result) => {

            const user = result.user;
            console.log(user);
            setLogain(true);
            setError('');
            element.reset();
            //get jwt

            const currentUser = {
                email: user.email
            }

            fetch('https://b6a11-service-review-server-side-two.vercel.app/jwt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(currentUser)
            }).then((res) => res.json()).then((data) => {
                console.log(data);
                localStorage.setItem('token', data.token);
                navigate(from, { replace: true });
            }).catch((error) => {
                console.error(error.message);
            })







        }).catch((error) => {
            setError(error.message);
        })

    }











    return (
        <div className='w-50 m-auto'>
            <Form onSubmit={handelLoginSubmit} className='m-5'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p className='text-danger'>Please Register then added a review <Link to='/register'>Register</Link></p>
                </Form.Group>
                <Button variant="outline-danger" className='pl-3 fs-5' type="submit">
                    Login
                </Button>

                <Form.Group className='mt-3'>
                    <GoogleLogIn></GoogleLogIn>

                </Form.Group>

                <Form.Text className='fs-3 text-success'> {Login ? 'Successfuly-Login' : ''}</Form.Text>

                <Form.Text className='text-danger fs-2'>{error}</Form.Text>
            </Form>


        </div>
    );
};

export default Login;