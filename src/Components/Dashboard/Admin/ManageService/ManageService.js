import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const ManageService = () => {

    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://ranaagency.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='mainbody'>
            <table width='100%'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        service.map(serv => {
                            return (
                                <ServiceItem service={serv}></ServiceItem>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageService;