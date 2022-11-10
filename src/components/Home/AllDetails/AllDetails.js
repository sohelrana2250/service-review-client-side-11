import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useTitle from '../../../Hook/useTitle';
import AllDetailsCard from './AllDetailsCard';

const AllDetails = () => {

    const [alldetails, setAllDetails] = useState([]);
    useTitle('Details-Page')

    useEffect(() => {

        fetch('https://b6a11-service-review-server-side-two.vercel.app/serviceDetails').then((res) => res.json()).then((data) => {

            setAllDetails(data)
        }).catch((error) => {
            console.error(error.message);
        })

    }, [])

    console.log(alldetails);

    alldetails.sort((b, a) => a.price - b.price);


    return (
        <div>
            <h1>All-Deatils</h1>
            {
                <Row xs={12} lg={3} md={6} >
                    {
                        alldetails.map((v, index) => <AllDetailsCard key={index} service={v}></AllDetailsCard >)
                    }

                </Row>
            }
        </div>
    );
};

export default AllDetails;