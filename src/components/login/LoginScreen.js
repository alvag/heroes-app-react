import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../../auth/AuthContext";
import {types} from "../../types/types";

const LoginScreen = () => {

    const history = useHistory();

    const lastPath = localStorage.getItem('lastPath') || '/';

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Max'
            }
        });
        history.replace(lastPath);
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default LoginScreen;
