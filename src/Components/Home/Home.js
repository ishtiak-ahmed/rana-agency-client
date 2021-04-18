import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Project from '../Project/Project';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Header from './Header/Header';

const Home = () => {
    const [reviews, setReviews] = useState([])
    const [services, setServices] = useState([])

    // Load Services From Server
    useEffect(() => {
        fetch('https://ranaagency.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // Load Revicew form Servers
    useEffect(() => {
        fetch('https://ranaagency.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div>
            <Header></Header>
            <section className="text-center bg-light py-5 project">
                <div className="container">
                    <h2 className='highlights'>Our Ongoing Project</h2>
                    <div className="row gx-5">
                        <Project key='1'></Project>
                        <Project key='2'></Project>
                        <Project key='3'></Project>
                    </div>
                </div>
            </section>
            <section className='text-center py-5 services'>
                <h2 className='highlights'>Our Most Popular Services</h2>
                <div className="container">
                    <div className='row gx-5'>
                        {
                            services.map((service, index) => <Service key={index} data={service}></Service>)
                        }
                    </div>
                    <button className='btn btn-primary mt-5'>Explore More</button>
                </div>
            </section>
            <section className="text-center py-5 bg-light">
                <div className="container">
                    <Blog></Blog>
                </div>
            </section>
            <section className='text-center py-5'>
                <div className="container">
                    <h2 className='highlights'>What our client says</h2>
                    <div className="row gx-5">
                        {
                            reviews.map((review, index) => <Review key={index} data={review}></Review>)
                        }
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;