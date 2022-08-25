import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createSystem } from '../api/system';
import {System} from '../models/system.model';
import {  useNavigate, useParams } from 'react-router-dom';

export default function CreateSystem() {

    const navigate = useNavigate();
    const {userId} = useParams();

    const [topic,setTopic] =useState('');
    const [objectName,setObjectName] =useState('');
    const [description,setDescription] =useState('');
    const [urlName, setUrlName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const create = async () => {
      debugger;
        const system = {
          topic: topic,
          objectName: objectName,
          managerId:String(userId),
          description: description,
          urlName:urlName,
          email:email,
          phone:phone
            }
            try{
           debugger;
          const res= await createSystem(system);
           console.log(system);
              console.log(res);
            }catch{
                console.log("failed to create system");
            }
        }

  return (
    <form className='auth-inner' onSubmit={create}>
      <h3>create new system</h3>
         <div className="mb-3">
          <label>topic</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter topic"
                    onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>objectName</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter objectName"
                    onChange={(e) => setObjectName(e.target.value)}
          />
        </div>
           <div className="mb-3">
          <label>description</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter description"
                    onChange={(e) => setDescription(e.target.value)}
          />
        </div>
            <div className="mb-3">
          <label>urlName</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter urlName"
                    onChange={(e) => setUrlName(e.target.value)}
          />
        </div>
          <div className="mb-3">
          <label>email</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
          />
        </div>
          <div className="mb-3">
          <label>phone</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter phone"
                    onChange={(e) => setPhone(e.target.value)}
          />
        </div>
          <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
            </div>
    </form>
  );
}
