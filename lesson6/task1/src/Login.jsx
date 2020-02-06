import React from 'react';
import './index.scss';

const Login = props => {
    return (
      <button className="btn login" onClick={props.func}>Login</button>
    );
}
export default Login;