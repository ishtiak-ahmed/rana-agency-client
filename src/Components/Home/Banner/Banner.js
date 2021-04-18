import React from 'react';
import detective from '../../../images/detective.jpg'
import bodyguard from '../../../images/bodyguard.jpg'
import salman from '../../../images/salman.jpg'
import Carousel from './Carousel';

const Banner = () => {
    return (
        <div className='banner bg-dark text-white'>
            <div className="container row h-100">
                <div className="col-md-6 col-sm-12 px-5 mt-5">
                    <h1>Rana Agency</h1>
                    <h3>Private Investigation and Security Firm.</h3>
                    <p class="fs-5">The Trusted and Reliable Security Service for you.</p>
                    <button className="btn btn-primary">Explore Service</button>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="w-100" src={salman} alt="" />
                </div>
            </div>
            {/* <Carousel></Carousel> */}
        </div>

    );
};

export default Banner;