import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Form, Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ServiceDetails = () => {

    const data = useLoaderData();

    const { user } = useContext(AuthContext);

    const { _id, title, img, ratings, price, discription } = data;

    const handelReviewSubmit = (event) => {

        event.preventDefault();
        const element = event.target;
        const text = element.text.value;
        const rating = element.rating.value;
        const email = user?.email || 'unregister user';
        const userName = user?.displayName || 'unRegister-User';
        const userPhoto = user?.photoURL || 'unRegister-User';


        const reviewInfo = {

            ReviewId: _id,
            serviceName: title,
            text,
            rating,
            email,
            userName,
            userPhoto

        }

        console.log(reviewInfo);

        fetch('http://localhost:5008/review', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewInfo),
        }).then((res) => res.json()).then((data) => {

            if (data.acknowledged) {
                element.reset();
                alert('Review Successfully done');
            }
        }).catch((error) => {
            console.log(error.message);
        })




    }

    return (
        <div className='container'>
            <h1>Service Details</h1>
            {
                <Col className='m-3' >
                    <Card>
                        <Card.Img variant="top" src={img} style={{ height: '400px' }} className=" rounded img-fluid mx-auto d-block bg-dark" />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text className='d-flex justify-content-between  fs-3 m-3 mt-3 '>

                                <Card.Text >
                                    prices:$ {price}
                                </Card.Text >
                                <Card.Text >
                                    Ratings:{ratings}
                                </Card.Text >

                            </Card.Text>
                            <Card.Text>
                                {discription}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

            }

            <div>
                <h1>{title}</h1>
                <div className='w-50 m-auto'>
                    <Card className="text-center">
                        <Card.Header>

                            <spam className='text-danger mb-3'>{user?.displayName}</spam>
                            <Image className='icon m-3' src={user?.photoURL} alt="" />
                        </Card.Header>
                        <Card.Body>

                            <Form onSubmit={handelReviewSubmit} className='m-5'>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Review Text Bar</Form.Label>
                                    <Form.Control type="text" name='text' placeholder="Review Text Bar" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Reating</Form.Label>
                                    <Form.Control type="number" name='rating' placeholder="Rating Text Bar" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email Address -ReadOnly </Form.Label>
                                    <Form.Control type="email" name='email' defaultValue={user?.email} readOnly placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                                </Form.Group>
                                <Button variant="outline-danger" className='pl-3 fs-5' type="submit">
                                    Review Added
                                </Button>

                            </Form>



                        </Card.Body>

                    </Card>


                </div>

            </div>


        </div>
    );
};

export default ServiceDetails;