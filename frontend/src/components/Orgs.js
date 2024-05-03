import React,{useEffect, useState} from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';
import OrgNew from './OrgNew';
import axios from 'axios';
import '../css/Org.css';
export default function Orgs() {

  const[data,Setdata]=useState([]);
  
  const navigate=useNavigate();
  
  
  useEffect(()=>{
    axios.get('http://localhost:3001/org/Allorg')
    .then(res=>Setdata(res.data))
    .catch(err=>console.log('error',err));    
  },[data])


  
  // const organizationsData = [
  //   {
  //     "org_name": "Organization A",
  //     "org_id": "org_a_id",
  //     "users": [
  //       {
  //         "user_id": "user_a1_id",
  //         "name": "User A1"
  //       },
  //       {
  //         "user_id": "user_a2_id",
  //         "name": "User A2"
  //       }
  //     ]
  //   },
  //   {
  //     "org_name": "Organization B",
  //     "org_id": "org_b_id",
  //     "users": [
  //       {
  //         "user_id": "user_b1_id",
  //         "name": "User B1"
  //       },
  //       {
  //         "user_id": "user_b2_id",
  //         "name": "User B2"
  //       }
  //     ]
  //   }
  // ];
  
  const deletee=async (key)=>{
    // console.log("J")
    try {
      const res = await fetch(`http://127.0.0.1:3001/org/delete/${key}`, {
        method: "DELETE"
        
      })
      
      // console.log(res)
    } catch (error) {  

    } 
    
  }

  const Add = (name) => {
    navigate(`/UserOrg/${name}`, { state: { orgName: name } });
  }
  

  return (
    <>
    <h1>Organisations</h1>
    <div className='usermain' >
      
        <div className='Orge'>
          <h1>Adding more Organisations </h1>
        <NavLink className='nav' to='/Orgnew'>ADD</NavLink>
        </div>
      {data.map((e,i) => (
        <div className='Org'>
        <li key={i}>
          <h2>{e.name}</h2>
          <h2>{e.org_name}</h2>
          <ul>
          
          </ul>
          <button onClick={()=>deletee(e._id)}>Deactivate</button>
          <br/>
          <button onClick={() => Add(e.name)}>Users</button>
          {/* <span>{e.name}</span> */}
        </li>
        </div>
      ))}
    </div>
    </>
  );
}
