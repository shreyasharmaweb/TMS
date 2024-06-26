import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/tms.css'
import { useParams } from 'react-router-dom';
import{ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function TMS() {
  const [names, setNames] = useState([]);
  const { id } = useParams();
  const{name}=useParams();
  // type:String,
  // key:String,
  // summary:String,
  // description:String,
  // assignee:String,
  // reporter:String,
  // status:String,
  // created_date:Date,
  // updated_date:Date,
  // due_date:Date,
  const[states,Setstates]=useState({
      
      type:"",
      summary:"",
      description:"",
      assignee:"",  
      reporter:"",
      status:"",
      created_date:"",
      updated_date:"",
      due_date:""
  });
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    Setstates(prev=>({...prev, [name]: value }));
  };

  useEffect(() => {
    axios.get("http://localhost:3001/orguser/Allusers")
      .then(res => setNames(res.data))
      .catch(err => console.log('error', err));
  }, []);
  
  const filteredUsers = names.filter(user => user.organisation === id);
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:3001/tms/addticket", states);
      console.log("done", response);
      toast.success("Ticket Generated");
      // alert("Ticket");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (<>
   <h1 className='tmsHeader'>Ticket Generate</h1>
    <div className='tmsForm'>
      <form onSubmit={handleSubmit}  >
     
      <div className='task'>
        <h1 className='ty'>Type</h1>
        <select className='tmsSelector' name='type' value={states.type} onChange={handleChange}>
          <option>Task</option>
          <option>Story</option>
          <option>Bug</option>
        </select>
      </div>
      <div className='tmstext'>
        <div>
        <h1>Description</h1>
        <input type="text" className='text' name='description' value={states.description}   onChange={ handleChange} />
        </div>
        <div>
        <h1>Summary</h1>
        <input type="text" className='text' name='summary' value={states.summary}  onChange={ handleChange} />
        </div>
      </div>
      <div className='assign' >
        <h1>Assignee</h1>
        <select name='assignee' value={states.assignee} onChange={handleChange}>
          {filteredUsers && filteredUsers.length > 0 ? (
            filteredUsers.map((user, i) => (
              <option key={i} >{user.first_name}</option>
            ))
          ) : (
            <option>No users found</option>
          )}
        </select>
      </div>
      <div className='reporter'>
        <h1>Reporter</h1>
        <select name='reporter' value={states.reporter} onChange={handleChange}>
          <option>{name}</option>
        </select>
      </div>
      <div className='created'>  
             <label>Created Date  </label>
             <input type='date' name='created_date' value={states.created_date} onChange={ handleChange}/>
      </div>
      <div className='updated'>  
             <label>Updated Date  </label>
             <input type='date' name='updated_date' value={states.updated_date} onChange={ handleChange}/>
      </div>
      <div className='due'>  
             <label>Due Date</label>
             <input type='date' name='due_date' value={states.due_date} onChange={ handleChange}/>
      </div>
      <div className='status'>
        <h1>Status</h1>
        <select name='status' value={states.status} onChange={handleChange}>
          <option >Completed</option>
          <option>Pending</option>
          <option>Incomplete</option>
        </select>
      </div>
      <div >
      <button className='btn' type="submit">Submit</button>
      </div>
      </form>
    </div>
    <ToastContainer position="top-right" />

    </>
  );
}