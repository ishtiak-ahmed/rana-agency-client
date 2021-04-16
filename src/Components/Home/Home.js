import React from 'react';
import Blog from '../Blog/Blog';
import Project from '../Project/Project';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <section className="text-center bg-light py-5 project">
                <div className="container">
                    <h2>Our Ongoing Project</h2>
                    <div className="row">
                        <Project></Project>
                        <Project></Project>
                        <Project></Project>
                    </div>
                </div>
            </section>
            <section className='text-center py-5 services'>
                <div className="container">
                    <h2>Our Most Popular Services</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '2em' }}>
                        <Service></Service>
                        <Service></Service>
                        <Service></Service>
                    </div>
                    <button>Explore More</button>
                </div>
            </section>
            <section className="text-center py-5">
                <Blog></Blog>
            </section>
            <section className='text-center py-5'>
                <h2>What our client says</h2>
                <div className="row">
                    <Review></Review>
                    <Review></Review>
                    <Review></Review>
                    <Review></Review>
                </div>
            </section>
        </div>
    );
};

export default Home;