import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css'
import logo from '../../../logo.png'

const Navbar = () => {
    const [loggedinUser] = useContext(UserContext)
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container">
                <Link className='navbar-brand' to='/'><img height='60px' src={logo} alt="" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collaspe navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/about'>About</Link>

                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/contact'>Contact</Link>

                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/service'>Service</Link>

                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/dashboard'>Dashboard</Link>

                        </li>
                        <li className="nav-item">
                            {
                                loggedinUser.email ? <Link className='nav-link ms-auto' to='/dashboard'>{loggedinUser.displayName}</Link>
                                    : <Link className='button nav-link' to='login'>Login</Link>

                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;