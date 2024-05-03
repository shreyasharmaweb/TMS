import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Userform = () => {
  const { key } = useParams();
  const navigate = useNavigate();
  const [org,Setorg]=useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [orgJoinDate, setOrgJoinDate] = useState('');

  //id,email_id,first_name,last_name,dob,org_join_date

  useEffect(() => {
    console.log('Key:', key);
    Setorg(key);
  }, [key]);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log(org);
    try {
      const response = await axios.post("http://localhost:3001/orguser/signup", {
        key,
        organisation:org, 
        email_id:email,
        first_name: firstName,
        last_name: lastName,
        dob,
        org_join_date: orgJoinDate
      });
      console.log("done", response);
      navigate('/');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='userFormContainer'>
      {/* <h2>Userform</h2> */}
      {/* <p>Key: {key}</p> */}
      <form className='userForm' onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>
        <div>
          <label>Organization Join Date:</label>
          <input type="date" value={orgJoinDate} onChange={(e) => setOrgJoinDate(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Userform;