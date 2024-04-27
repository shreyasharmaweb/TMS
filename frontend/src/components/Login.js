import React from 'react';
import '../css/Login.css';
import { NavLink } from 'react-router-dom';

export default function Login(props) {
  const bg = props.color;
  const fontColor = props.fontColor;
  const user = props.user;
  const userLink = `/${user}`;

  return (
    <div className='box' style={{ backgroundColor: bg }}>
      <div className='inner1' style={{ color: fontColor }}>
        <h1>{props.user}</h1>
        <h4>{props.tagline}</h4>
      </div>
      <div className='inner2'>
      <NavLink to={userLink}>Login</NavLink>
       
        <p style={{ color: fontColor }}>Didn't have an account?<NavLink style={{ color: 'blue' }} to={user}>Signup</NavLink></p>
      </div>
    </div>
  );
}
