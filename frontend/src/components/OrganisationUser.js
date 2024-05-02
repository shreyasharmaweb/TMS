import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
// import Userform from "./Userform";

export default function OrganisationUser() {
  const [org, setOrg] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/org/Allorg')
      .then(res => setOrg(res.data))
      .catch(err => console.log(err));
  }, []);
  
  const handleUser = (key) => {
    navigate(`/userform/${key}`);
  }

  return (
    
    <div>
        <h1>Select Any Organisation</h1>
      {org.map((e, i) => (
        <div className='Org' key={i}>
          <h2>{e.name}</h2>
          <button onClick={()=>handleUser(e.name)}>{e.org_name}</button>
        </div>
      ))}
    </div>
  );
}
