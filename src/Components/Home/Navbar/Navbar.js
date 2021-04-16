import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css'

const Navbar = () => {
    const [loggedinUser] = useContext(UserContext)
    return (
        <nav>
            <Link to='/'><img src="" alt="" />Rana Agency</Link>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/service'>Service</Link>
            <Link to='/dashboard'>Dashboard</Link>
            {
                loggedinUser.email ? <Link to='/dashboard'>{loggedinUser.displayName}</Link>
                    : <Link className='button' to='login'>Login</Link>

            }
        </nav>
    );
};

export default Navbar;