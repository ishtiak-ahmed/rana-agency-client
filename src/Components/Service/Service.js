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
        <div className='card-item  col-md-4 col-sm-6 col-12'>
            {/* <img src={data.image} alt="" /> */}
            <div>
                <img className='w-100' height='300px' src={`data:image/png;base64,${data.image.img}`} alt="" />
            </div>
            <h3>{data.service}</h3>
            <p>{data.description}</p>
            <button className='btn btn-success' onClick={() => handleBook('hire bodyguard')}>Book Now</button>
        </div>
    );
};

export default Service;