import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../../asseat/new.jpg';
import pic2 from '../../../asseat/pic1.jpg';
import pic3 from '../../../asseat/pic2.jfif';


const Banner = () => {
    return (
        <div className='m-3'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Dental Veneers</h3>
                        <p>Dental Veneers- Many people are discovering the benefits of veneers. Veneers are thin coverings that are placed over the front part of the teeth.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Root Canal Therapy</h3>
                        <p>Root Canal Therapy- In the past, diseased teeth often had to be extracted. Today, they often can be saved through root canal therapy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3> Dental Veneers</h3>
                        <p>
                            Dental Veneers- Many people are discovering the benefits of veneers. Veneers are thin coverings that are placed over the front part of the teeth.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;