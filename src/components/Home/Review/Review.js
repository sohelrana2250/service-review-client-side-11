import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Table } from 'react-bootstrap';
import ReviewCrad from '../ReviewCard/ReviewCrad';

const Review = () => {

    const { user, logOut } = useContext(AuthContext);

    const [review, setReview] = useState([]);

    useEffect(() => {

        fetch(`https://b6a11-service-review-server-side-two.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            if (res.status === 401 || res.status === 403) {
                logOut();
            }
            return res.json()
        }).then((data) => {

            setReview(data);

        }).catch((error) => {
            console.error(error.message);
        })



    }, [user?.email, logOut])


    //console.log(review);


    const handelDelete = (id) => {

        const process = window.confirm('Are You sure,You Want to Delete Information');
        if (process) {

            fetch(`https://b6a11-service-review-server-side-two.vercel.app/review/${id}`, {

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