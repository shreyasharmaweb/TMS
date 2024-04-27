import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function OrgNew() {
  const [neworg, setNeworg] = useState({
    org_name: "",
    name: ""
  });

  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNeworg(prev=>({...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:3001/org/signup", neworg);
      console.log("done", response);
      navigate('/Orgs');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className='m'>
        <div className='otp'>
          <h1>New Organisation</h1>
          <form onSubmit={handleSubmit}> 
            <input type='text' placeholder='Enter your key name' name='org_name' value={neworg.org_name} onChange={handleChange} />
            <input type='text' placeholder='Enter name' name='name' value={neworg.name} onChange={handleChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
