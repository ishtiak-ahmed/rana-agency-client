import React from 'react';
import sefldefence from '../../images/selfdefence.jpg'
const Blog = () => {
    return (
        <div className='row'>
            <div className="col-md-5">
                <img className='w-100' src={sefldefence} alt="" />
            </div>
            <div className="col-md-7 px-5 text-start">
                <h2>10 Self Defence Technique We all should know.</h2>
                <p style={{ fontSize: '1.1em', lineHeight: '1.5em' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta autem, odit commodi reiciendis hic ipsa? Dolores velit laudantium labore aperiam quis. Voluptatum, porro numquam commodi, culpa aliquam doloremque tempore earum, facilis ex incidunt dicta? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quam exercitationem fuga. Repellat magni dolores aliquam architecto dolor fugiat numquam nemo, illo, commodi molestias quidem, maiores perferendis iste. Fuga, modi? Similique ab placeat dicta provident, odio nesciunt. Iusto mollitia impedit molestiae commodi rerum, distinctio accusantium.</p>
                <button className='btn btn-primary'>Read More</button>
            </div>
        </div>
    );
};

export default Blog;