import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ReviewCard.css'
const ReviewCrad = ({ review, handelDelete }) => {

    const { _id, ReviewId, serviceName, text, rating, email, userName, userPhoto } = review;

    const [dentalService, setDentalService] = useState({})

    useEffect(() => {

        fetch(`http://localhost:5008/serviceDetails/${ReviewId}`).then((res) => res.json()).then((data) => {

            setDentalService(data);
        }).catch((error) => {
            console.error(error.message);
        })


    }, [ReviewId])

    console.log(dentalService);


    return (
        <tr>
            <th><Button onClick={() => handelDelete(_id)} variant="outline-danger">X</Button></th>
            <td>    <img src={userPhoto} className='icon' alt="" /></td>
            <td>{serviceName}</td>
            <td>{rating}</td>
            <td>{email}</td>
            <td>{userName}</td>
            <td>{text}</td>
            <th> <Link to={`/reviewUpdate/${_id}`}><Button variant="outline-danger">Update</Button></Link>  </th>
        </tr>
    );
};

export default ReviewCrad;