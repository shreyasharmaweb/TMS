import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function System_User() {
    const [otp, setOtp] = useState("");
    

    // const handle = () => {
       
    // };

    return (
        <div className='m'>
            <div className='otp'>
                <h1>System User</h1>
                <input type='email' placeholder='Enter your email' />
                <input type='text' placeholder='Enter otp' value={otp} onChange={(e) => setOtp(e.target.value)}></input>
                <button>OTP</button>
                <NavLink to='/Orgs'>Submit</NavLink>
            </div>
        </div>
    );
}
