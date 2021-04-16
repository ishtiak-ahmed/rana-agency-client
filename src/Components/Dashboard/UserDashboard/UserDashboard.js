import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const UserDashboard = () => {
    const [loggedinUser] = useContext(UserContext)
    return (
        <main>
            <div className="sidebar">
                <li><h4>Book</h4></li>
                <li><h4>Order List</h4></li>
                <li><h4>Add Review</h4></li>
            </div>
        </main>
    );
};

export default UserDashboard;