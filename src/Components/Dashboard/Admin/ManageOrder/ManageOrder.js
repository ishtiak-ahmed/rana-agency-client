import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';

const ManageOrder = () => {
    const [loggedinUser] = useContext(UserContext)
    const [orderList, setOrderList] = useState([])
    useEffect(() => {
        const user = { email: loggedinUser.email }
        fetch('https://ranaagency.herokuapp.com/orderList', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setOrderList(data)
            })
    }, [])
    return (
        <div className='mainbody'>
            <table width='100%'>
                <thead>
                    <tr>
                        <td>Service</td>
                        <td>Order by</td>
                        <td>Book For</td>
                        <td>Order Time</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList.map(order => {
                            return (
                                <tr>

                                    <td>{order.booking.service}</td>
                                    <td>{order.booking.email}</td>
                                    <td>{order.booking.date}</td>
                                    <td>{order.orderTime}</td>
                                    <td>{order.booking.status}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrder;