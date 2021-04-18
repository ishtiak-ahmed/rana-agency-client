import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { BookContext } from '../../App';
import './Service.css'

const Service = ({ data }) => {
    const [service, setService] = useContext(BookContext)
    const history = useHistory()
    const handleBook = (e) => {
        setService(e)
        history.push('/dashboard')
    }
    return (
        <div className='service-item mycard'>
            {/* <img src={data.image} alt="" /> */}
            <img height='200px' width="250px" src={`data:image/png;base64,${data.image.img}`} alt="" />
            <h3>{data.service}</h3>
            <p>{data.description}</p>
            <button className='btn btn-success' onClick={() => handleBook('hire bodyguard')}>Book Now</button>
        </div>
    );
};

export default Service;