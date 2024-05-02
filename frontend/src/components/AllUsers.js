import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function AllUsers() {
    const[users,Setusers]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:3001/orguser/Allusers")
      .then(res=>Setusers(res.data))
    },[]);
    //id,email_id,first_name,last_name,dob,org_join_date
  return (
    <div>
        {console.log(users)}
       
       {users.map((e,i)=>{    
        return (
            <div> 
                <div className='Org' key={i}>
                <h2>{e.email_id}</h2>
                <h2>{e.first_name}</h2>
                <h2>{e.last_name}</h2>
                <h2>{e.dob}</h2>
                <h2>{e.org_join_date}</h2>
                </div>
            </div>
            
        )
       })}
    </div>
  )
}

