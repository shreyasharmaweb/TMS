import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function System_User() {
    const [otp, setOtp] = useState("");
    const [email,setemail]=useState("");
    const[flag,setflag]=useState(false);
    
//"http://localhost:3001/sys/signup"
   const handlechange= async()=>{
        
            let dataSend={
                email:email
            }
            // console.log(dataSend);
         try{
            const response = await fetch("http://localhost:3001/sys/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(
                    dataSend
                )
            })
            //   console.log("send");
         }catch{
             
         }
   }
  
    const handleotp= async()=>{
        
        let dataSend={
            email:email,
            otp:otp
        }
        console.log(dataSend);
     try{
        const response = await fetch("http://localhost:3001/sys/otp",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                dataSend
            )
        })
          alert("new user is created");
          setflag(true);
          console.log("send");
     }catch{
         
     }

    }


    return (
        <div className='m'>
            <div className='otp'>
                <h1>System User</h1>
                <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                
                <button onClick={handlechange} >OTP</button>
                <input type='text' placeholder='Enter otp' value={otp} onChange={(e) => setOtp(e.target.value)}/>
                <button onClick={handleotp} >Check</button>
                {flag && 
                <div>

                    <NavLink to='/Orgs'>View Organisations</NavLink>
                    <NavLink to='/Allusers'>View Users</NavLink>
                </div>
                }
            </div>
        </div>
    );
}
