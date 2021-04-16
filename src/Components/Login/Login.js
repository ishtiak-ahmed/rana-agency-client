import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { googleLogin } from './Config/loginManager';

const Login = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {
        console.log('loging with google.')
        googleLogin()
            .then(res => {
                setLoggedinUser(res)
            })
            .then(data => {
                history.push(from)
            })
    }

    return (
        <div>
            <h2>Login with google {loggedinUser.displayName}</h2>
            <button onClick={handleLogin}>Login With Google</button>
        </div>
    );
};

export default Login;