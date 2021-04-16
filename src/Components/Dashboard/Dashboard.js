import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Admin from './Admin/Admin';
import UserDashboard from './UserDashboard/UserDashboard';
import './Dashboard.css'
const Dashboard = () => {
    const [loggedinUser] = useContext(UserContext)
    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '0 5vw' }}>
                <img src="" alt="logo" />
                <h3>Title</h3>
                <h4>{loggedinUser.displayName}</h4>
            </nav>
            {
                loggedinUser.email === 'ishtiak1606@gmail.com' ? <Admin></Admin> : <UserDashboard></UserDashboard>
            }
        </div>
    );
};

export default Dashboard;