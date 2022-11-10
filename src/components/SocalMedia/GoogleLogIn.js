import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const GoogleLogIn = () => {

    const { GoogleLogin } = useContext(AuthContext);
    const [login, setLogin] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    let navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const handelGoogleLogIn = () => {

        GoogleLogin().then((result) => {

            const user = result.user;
            console.log(user);
            setLogin(true);
            setError('');

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
        <div>



            <Form>
                <><Button onClick={handelGoogleLogIn} className='me-3 mt-3 fs-5' variant="outline-danger">  Login-With-Google</Button>
                </>
                <Form.Text className='fs-3 text-success'> {login ? 'Successfuly-Login' : ''}</Form.Text>

                <Form.Text className='text-danger fs-2'>{error}</Form.Text>
            </Form>

        </div>
    );
};

export default GoogleLogIn;