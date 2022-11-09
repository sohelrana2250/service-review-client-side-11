import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Table } from 'react-bootstrap';
import ReviewCrad from '../ReviewCard/ReviewCrad';

const Review = () => {

    const { user } = useContext(AuthContext);

    const [review, setReview] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5008/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {

            setReview(data);

        }).catch((error) => {
            console.error(error.message);
        })



    }, [user?.email])


    //console.log(review);


    const handelDelete = (id) => {

        const process = window.confirm('Are You sure,You Want to Delete Information');
        if (process) {

            fetch(`http://localhost:5008/review/${id}`, {

                method: 'DELETE'
            }).then((res) => res.json()).then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Delete-Successfully');
                    const remining = review.filter((odr) => odr._id !== id);
                    setReview(remining);
                }

            }).catch((error) => {
                console.error(error.message);
            })

        }

    }

    return (
        <div className='m-3'>
            <h1>Total-Review :{review.length}</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>x</th>
                        <th>Picture</th>
                        <th>serviceName</th>
                        <th>Rating</th>
                        <th>Email Address</th>
                        <th>User Name</th>
                        <th>Text</th>
                        <th>Update</th>

                    </tr>
                </thead>
                <tbody>




                    {review.map((v, index) => <ReviewCrad key={index} review={v} handelDelete={handelDelete} ></ReviewCrad>)}


                </tbody>
            </Table>
        </div>
    );
};

export default Review;