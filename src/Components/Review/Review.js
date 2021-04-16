import React from 'react';

const Review = () => {
    return (
        <div className='col-md-3'>
            <div className="profile row">
                <div className='col-4'>
                    <img src="" alt="" />
                </div>
                <div className='col-8'>
                    <h4>John Doe</h4>
                    <h6>Manager, Business Farm</h6>
                </div>
            </div>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsum deserunt neque distinctio, nesciunt dicta.</p>
            </div>
            <div className="rating">
                <h2>*****</h2>
            </div>
        </div>
    );
};

export default Review;