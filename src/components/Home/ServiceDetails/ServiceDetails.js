import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const ServiceDetails = () => {

    const data = useLoaderData();

    const { title, img, ratings, price, discription } = data;

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


        </div>
    );
};

export default ServiceDetails;