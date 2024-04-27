import React,{useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import OrgNew from './OrgNew';
import axios from 'axios';
export default function Orgs() {

  const[data,Setdata]=useState([]);


  useEffect(()=>{
    axios.get('http://localhost:3001/org/Allorg')
    .then(res=>Setdata(res.data))
    .catch(err=>console.log('error',err));
  },[])


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

  return (
    <div >
        <NavLink to='/Orgnew'>ADD</NavLink>

      {data.map((e,i) => (
        <div className='Org'>
        <li key={i}>
          <h2>{e.name}</h2>
          <h2>{e.org_name}</h2>
          <ul>
            {/* {e.users.map((user) => (
              <li key={user.user_id}>{user.name}</li>
            ))} */}
          </ul>
          <button>Deactivate</button>
        </li>
        </div>
      ))}
    </div>
  );
}
