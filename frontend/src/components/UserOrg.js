import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/form.css'
export default function UserOrg(props) {
  const [dataf, setDataf] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/orguser/Allusers')
      .then(res => setDataf(res.data))
      .catch(err => console.log('error', err));
  }, []); 
  
  const filteredUsers = dataf.filter(user => user.id === props.orgName);
  console.log('orgName prop:', props.orgName);
  return (
    <div>
      <h2>Users for Organization: {props.orgName}</h2>
      <ul>
        {
          filteredUsers && filteredUsers.length > 0 ? (
            filteredUsers.map((user, i) => (
              <li key={i}>{user.first_name}</li>
            ))
          ) : (
            <li>No users found</li>
          )
        }
      </ul>
    </div>
  );
}
