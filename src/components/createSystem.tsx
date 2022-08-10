import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { create } from 'domain';
import { createSystem } from '../api/system';
import {System} from '../models/system.model';

export default function CreateSystem() {

    const [topic,setTopic] =useState('');
    const [objectName,setObjectName] =useState('');
    const [description,setDescription] =useState('');
    const [urlName, setUrlName] = useState('');//????
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const create = async () => {
        // e.preventDefault();
        const system={
          topic: topic,
          objectName: objectName,
          managerId:"62f25a4210ea639da632b916" ,
          description: description,
          urlName:"perfectShoes",
          email:email,
          phone:phone
            }
        }
        try {
        //   const ans= await createSystem(system);
        //     console.log(ans);
            // navigate('/');
        } catch (err) {
            console.log(err);
        }

  return (
    <form className='auth-inner' onSubmit={create}
    //   component="form"
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    >
      <h3>create new system</h3>
      {/* <TextField id="outlined-basic" label="topic" variant="outlined"  className="mb-3"/>
      <TextField id="outlined-basic" label="objectName" variant="outlined" className="mb-3" /> */}
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
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
