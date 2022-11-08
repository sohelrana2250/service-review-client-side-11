import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Form, Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ReviewUpdate = () => {

    const { user } = useContext(AuthContext);

    const { _id, rating, text } = useLoaderData();

    const handelUpdate = (event) => {

        event.preventDefault();

        const element = event.target;
        const text = element.text.value;
        const rating = element.rating.value;

        const updateInfo = {
            _id,
            text, rating
        }

        console.log(updateInfo);

        fetch(`http://localhost:5008/updateReview/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateInfo),
        }).then((res) => res.json()).then((data) => {

            if (data.modifiedCount > 0) {
                alert('successfully - Update Database');
                console.log(data);
                element.reset();
            }

        }).catch((error) => console.log(error.message))

    }


    return (
        <div className='mt-3'>
            <div className='w-50 m-auto'>
                <Card className="text-center">
                    <Card.Header>

                        <spam className='text-danger mb-3'>{user?.displayName}</spam>
                        <Image className='icon m-3' src={user?.photoURL} alt="" />
                    </Card.Header>
                    <Card.Body>

                        <Form onSubmit={handelUpdate} className='m-5'>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Review Text Bar</Form.Label>
                                <Form.Control type="text" name='text' defaultValue={text} placeholder="Review Text Bar" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Reating</Form.Label>
                                <Form.Control type="number" name='rating' defaultValue={rating} placeholder="Rating Text Bar" required />
                            </Form.Group>




                            <Button variant="outline-danger" className='pl-3 fs-5' type="submit">
                                Update-Info
                            </Button>

                        </Form>



                    </Card.Body>

                </Card>


            </div>



        </div>
    );
};

export default ReviewUpdate;