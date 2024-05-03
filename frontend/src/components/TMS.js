import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function TMS() {
  const [names, setNames] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3001/orguser/Allusers")
      .then(res => setNames(res.data))
      .catch(err => console.log('error', err));
  }, []);

  const filteredUsers = names.filter(user => user.organisation === id);
  //type,key,summary,description,assignee,reporter,status,created_date,updated_date,due_date
  return (
    <div>
      <h1>Ticket</h1>
      <div>
        <select>
          <option>Task</option>
          <option>Story</option>
          <option>Bug</option>
        </select>
      </div>
      <div>
        <input type="text" placeholder="Description" />
        <input type="text" placeholder='Summary' />
      </div>
      <div>
        <h1>Assignee</h1>
        <select>
          {filteredUsers && filteredUsers.length > 0 ? (
            filteredUsers.map((user, i) => (
              <option key={i}>{user.first_name}</option>
            ))
          ) : (
            <option>No users found</option>
          )}
        </select>
      </div>
      <div>
        <h1>Reporter</h1>
        <select>
          {filteredUsers && filteredUsers.length > 0 ? (
            filteredUsers.map((user, i) => (
              <option key={i}>{user.first_name}</option>
            ))
          ) : (
            <option>No users found</option>
          )}
        </select>
      </div>
      <div>  
             <label>Created Date  </label>
             <input type='date'/>
      </div>
      <div>  
             <label>Updated Date  </label>
             <input type='date'/>
      </div>
      <div>  
             <label>Due Date  </label>
             <input type='date'/>
      </div>
      <div>
        <select>
          <option>Completed</option>
          <option>Pending</option>
          <option>Incomplete</option>
        </select>
      </div>
    </div>
  );
}
