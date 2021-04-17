import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { BookContext } from '../../App';

const Service = ({ data }) => {
    const [service, setService] = useContext(BookContext)
    const history = useHistory()
    const handleBook = (e) => {
        setService(e)
        history.push('/dashboard')
    }
    return (
        <div className='service-item'>
            <img src={data.image} alt="" />
            <h3>{data.service}</h3>
            <h3>$57</h3>
            <p>{data.description}</p>
            <button onClick={() => handleBook('hire bodyguard')}>Book Now</button>
        </div>
    );
};

export default Service;