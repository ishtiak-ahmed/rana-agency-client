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
        fetch('http://localhost:4753/services')
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
                        {
                            services.map((service, index) => <Service key={index} data={service}></Service>)
                        }
                    </div>
                    <button>Explore More</button>
                </div>
            </section>
            <section className="text-center py-5 bg-light">
                <Blog></Blog>
            </section>
            <section className='text-center py-5'>
                <h2>What our client says</h2>
                <div className="row">
                    {
                        reviews.map((review, index) => <Review key={index} data={review}></Review>)
                    }
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;