import React from 'react'
import Login from './Login'
import '../css/Login_main.css';
export default function Login_main() {
  return (
   
    <div className='mainn'>
      <Login user="System_User" tagline="Maintaining whole TMS"  color="white" fontcolor="#9A639F"/>
      <Login user="Organitional_user" tagline="User of a organization" color="#9A639F" fontcolor="white"/>
    </div>
    
  )
}
