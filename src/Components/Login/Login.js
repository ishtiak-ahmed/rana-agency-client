import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { googleLogin } from './Config/loginManager';
import logo from '../../logo.png'

const Login = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/dashboard" } };

    const handleLogin = () => {
        googleLogin()
            .then(res => {
                setLoggedinUser(res)
            })
            .then(data => {
                history.push(from)
            })
    }

    return (
        <div className='login'>
            <div className="logo text-center">
                <img src={logo} alt="" />
            </div>
            <div className='text-center'>
                <h2>Login with google {loggedinUser.displayName}</h2>
                <button className='btn btn-success' onClick={handleLogin}>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;