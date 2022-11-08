import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateProfileInfo } = useContext(AuthContext);
    const [Register, setRegister] = useState(false);
    const [error, setError] = useState(null);

    const handelRegisterSubmit = (event) => {


        event.preventDefault();
        const element = event.target;
        const name = element.name.value;
        const PhotoURL = element.photoURL.value;
        const email = element.email.value;
        const password = element.password.value;
        console.log(name, PhotoURL);
        console.log(email, password);

        createUser(email, password).then((result) => {

            const user = result.user;
            console.log(user);
            handelUpdateProfileInfo(name, PhotoURL);
            setRegister(true);
            setError('')
            element.reset();
        }).catch((error) => {
            setError(error.message);
        })

    }


    const handelUpdateProfileInfo = (name, PhotoURL) => {

        const profile = {
            displayName: name,
            photoURL: PhotoURL
        }

        updateProfileInfo(profile).then(() => {

        }).catch((error) => {
            console.log(error.message);
        });


    }
    return (
        <div className='w-50 m-auto'>

            <Form onSubmit={handelRegisterSubmit} className='m-5'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Your Full-Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder=" Your Full-Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Photo-URL Link</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo-URL" required />
                </Form.Group>





                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p>If Your Account Exist Please  <Link to='/login'>Login</Link></p>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>

                <Form.Text className='fs-3 text-success'> {Register ? 'Successfuly-Register' : ''}</Form.Text>
                <Form.Text className='text-danger fs-2'>{error}</Form.Text>
            </Form>

        </div>
    );
};

export default Register;