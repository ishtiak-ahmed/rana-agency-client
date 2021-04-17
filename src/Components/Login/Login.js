import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { googleLogin } from './Config/loginManager';
import logo from '../../logo.png'

const Login = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

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
        <div style={{ display: 'grid', justifyContent: 'center' }}>
            <img src={logo} alt="" />
            <div>

                <h2>Login with google {loggedinUser.displayName}</h2>
                <button onClick={handleLogin}>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;