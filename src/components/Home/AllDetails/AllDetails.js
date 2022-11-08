import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllDetailsCard from './AllDetailsCard';

const AllDetails = () => {

    const [alldetails, setAllDetails] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5008/serviceDetails').then((res) => res.json()).then((data) => {

            setAllDetails(data)
        }).catch((error) => {
            console.error(error.message);
        })

    }, [])

    console.log(alldetails);



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