import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const AllDetailsCard = ({ service }) => {
    const { _id, title, img, ratings, price, discription } = service;
    return (
        <div>
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
                            {discription.slice(0, 100) + '...'}
                        </Card.Text>


                    </Card.Body>

                    <Link to={`/allDeatis/${_id}`}> <Button variant="outline-danger">Details</Button></Link>
                </Card>
            </Col>



        </div>
    );
};

export default AllDetailsCard;