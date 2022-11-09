import React from 'react';
import { Form, Button } from 'react-bootstrap';
const AddServices = () => {

    const handelAddService = (event) => {
        event.preventDefault();

        const element = event.target;
        const title = element.title.value;
        const price = parseFloat(element.price.value);
        const ratings = parseFloat(element.ratings.value);
        const img = element.img.value;
        const discription = element.discription.value;


        const insertServices = {
            title, price, ratings, img, discription
        }

        fetch('http://localhost:5008/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(insertServices)

        }).then((res) => res.json()).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error.message);
        })











    }



    return (
        <div className='w-50 m-auto'>

            <Form onSubmit={handelAddService} className='m-5'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Services--Title</Form.Label>
                    <Form.Control type="text" name='title' placeholder="Services--Title" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Service-Pricees</Form.Label>
                    <Form.Control type="text" name='price' placeholder="Service-Pricees" required />
                </Form.Group>





                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Services-Retings</Form.Label>
                    <Form.Control type="text" name='ratings' placeholder="Services-Retings" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Services-Image-URL</Form.Label>
                    <Form.Control type="text" name='img' placeholder="Services-Image-URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Services-Decription</Form.Label>
                    <Form.Control type="text" name='discription' placeholder="Services-Decription" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add-Services
                </Button>


            </Form>

        </div>
    );
};

export default AddServices;