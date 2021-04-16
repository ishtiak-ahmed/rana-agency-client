import React from 'react';
import detective from '../../../images/detective.jpg'
import bodyguard from '../../../images/bodyguard.jpg'
import Carousel from './Carousel';

const Banner = () => {
    return (
        <div className='row bg-dark text-white'>
            <div className="col-md-5 offset-md-1">
                <h1>Rana Agency</h1>
                <h3>The Trusted and Reliable Security Service for you.</h3>
            </div>
            <div className="col-md-6">
                <img className="w-75" src={bodyguard} alt="" />
            </div>
            {/* <Carousel></Carousel> */}
        </div>

    );
};

export default Banner;