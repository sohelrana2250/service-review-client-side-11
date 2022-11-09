import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Row, Button, Card, CardGroup, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic1 from '../../../asseat/new.jpg'
import Banner from '../Banner/Banner';
import useTitle from '../../../Hook/useTitle';

const Service = () => {

    const [services, setServices] = useState([]);
    useTitle('Services');

    useEffect(() => {

        fetch('http://localhost:5008/service').then((res) => res.json()).then((data) => {
            setServices(data);
        }).catch((error) => {
            console.error(error.message);
        })


    }, [])

    //console.log(services);
    return (
        <div className='container'>
            <Banner></Banner>

            <section className='m-3'>




                <CardGroup className='gap-4' >
                    <Card >
                        <Card.Img variant="top" src={pic1} />
                        <Card.Body>
                            <Card.Title>Dental Services Information</Card.Title>
                            <Card.Text>
                                Want a whiter smile? Your main options are at-home and in-office bleaching. At-home teeth whitening involves custom-made dental trays filled with hydrogen peroxide gel that you can use at home. For in-office bleaching, your dentist will combine hydrogen peroxide gel with a light source to speed up the whitening process.
                            </Card.Text>

                            <Card.Text>
                                A tooth extraction, or dental extraction, is the removal of a tooth from its socket in the bone. There are a number of reasons why tooth removal may be necessary. An extraction may be necessary if your tooth is so damaged that it can't be fixed with a dental restoration. In some cases, dentists extract teeth to prepare the patient's mouth for orthodontic treatment.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>12 Common Dental Services</Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>. Dental Bonding- Dental bonding is a technique used to correct imperfections with your teeth. </ListGroup.Item>
                                    <ListGroup.Item>
                                        ental Crowns- A dental crown is a dental prosthesis which replaces the visible part of a tooth.
                                    </ListGroup.Item>
                                    <ListGroup.Item>Bridgework- A dental bridge is a structure between two dental crowns to fill the gap between missing teeth. </ListGroup.Item>

                                    <ListGroup.Item>
                                        Cosmetic Fillings- Cosmetic fillings, or tooth- colored fillings, are made of composite resin and glass particles.
                                    </ListGroup.Item>
                                    <ListGroup.Item>Invisalign- Crooked smile? Invisalign is the best way to straighten your smile without interfering with your day-to-day life.</ListGroup.Item>
                                    <ListGroup.Item>Dental Veneers- Many people are discovering the benefits of veneers. Veneers are thin coverings that are placed over the front part of the teeth.</ListGroup.Item>
                                    <ListGroup.Item>Teeth Cleanings- You should visit the dentist every six months for teeth cleanings. Tartar is a hard buildup of plaque that forms on the teeth.</ListGroup.Item>
                                    <ListGroup.Item>Dentures- Have you lost most or all of your teeth? Dentures are removable appliances that can replace missing teeth.</ListGroup.Item>
                                    <ListGroup.Item>Root Canal Therapy- In the past, diseased teeth often had to be extracted. Today, they often can be saved through root canal therapy. </ListGroup.Item>
                                    <ListGroup.Item>Dental Sealants- Sealants are made of plastic and are applied to the chewing surfaces of the back teeth to prevent tooth decay.</ListGroup.Item>
                                    <ListGroup.Item>Teeth Whitening- Want a whiter smile? Your main options are at-home and in-office bleaching. </ListGroup.Item>
                                    <ListGroup.Item>Tooth Extractions- A tooth extraction, or dental extraction, is the removal of a tooth from its socket in the bone. </ListGroup.Item>


                                </ListGroup>


                            </Card.Text>
                        </Card.Body>

                    </Card>

                </CardGroup>






            </section>





            <h1 className='text-danger'>Services-Details</h1>





            <Row xs={12} lg={3} md={6} >

                {
                    services.map((v, index) => <ServiceCard key={index} service={v}></ServiceCard>)
                }

            </Row>

            <div>

                <Link to='/AllDetails'> <Button variant="outline-danger">All-Service-Details</Button></Link>
            </div>

        </div>
    );
};

export default Service;