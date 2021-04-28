import React from 'react';
import salman from '../../../images/salman.jpg'

const Banner = () => {
    return (
        <div className='banner bg-dark text-white'>
            <div className="row">
                <div className="col-md-5 col-sm-12 header-info">
                    <h1>Rana Agency</h1>
                    <h3>Private Investigation and Security Firm.</h3>
                    <p class="fs-5">The Trusted and Reliable Security Service for you.</p>
                    <button className="btn btn-primary">Explore Service</button>
                </div>
                <div className="col-md-7 col-sm-12">
                    <img className="w-100" src={salman} alt="" />
                </div>
            </div>
            {/* <Carousel></Carousel> */}
        </div>

    );
};

export default Banner;