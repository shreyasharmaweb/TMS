import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/form.css'
import { useParams } from 'react-router-dom';
export default function UserOrg(props) {
  const [dataf, setDataf] = useState([]);
  const {id} = useParams();
  console.log(id);
  useEffect(() => {
    axios.get('http://localhost:3001/orguser/Allusers')
      .then(res => setDataf(res.data))
      .catch(err => console.log('error', err));
  }, []); 
  
  const filteredUsers = dataf.filter(user => user.organisation === id);
  console.log(filteredUsers);
  console.log(props.orgName);
  console.log('orgName prop:', props);
  return (
    <>
    <h1>Users for Organization: {props.orgName}</h1>
    <div className='usermain' >
      
      <ul>
        {
          filteredUsers && filteredUsers.length > 0 ? (
            filteredUsers.map((user, i) => (
              <div className='Orgee'>
              <h2 key={i}>{user.first_name}</h2>
              <h2>{user.last_name}</h2>
          <label>DOB:</label>    <h2>{user.dob}</h2>
             <label>Joining date:</label> <h2>{user. org_join_date}</h2>
              {/* <li>{user.}</li> */}
              </div>
            ))
          ) : (
            <li>No users found</li>
          )
        }
      </ul>
    </div>
    </>
  );
}
