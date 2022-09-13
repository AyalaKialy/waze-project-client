import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createSystem } from '../api/system';
import {System} from '../models/system.model';
import {  useNavigate, useParams } from 'react-router-dom';
import userStore from '../stores/userStore';
import { observer } from 'mobx-react';
import systemsStore from '../stores/systemsStore';
import { createManager, getManagerByUserIdAndBySystemId } from '../api/manager';
import { Role } from "../models/manager.model";
import { createLocation } from '../api/location';
import { Status } from '../models/request.model';
import markersStore from '../stores/markersStore';
import { createRequest } from '../api/request';
import Autocomplete from './autocomplete';

 const Request = () => {
    const {userId}= useParams();
     const marker = markersStore.marker;
     console.log(systemsStore.system);
    //  console.log(systemsStore.system._id);
     const system=systemsStore.system;

     useEffect(() => { 
         console.log(system._id);
     },[]);

    const [firstName,setFirstName] =useState('');
    const [lastName,setLastName] =useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [display_name, setDisplay_name] = useState('');
    const [notes, setNotes] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const create = async () => {
        debugger;
        const request = {
        userId:String(userId),
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone,
        systemId: String(system._id),
        display_name:display_name,
        status:Status.sent,
        notes:notes,
        name:name,
        description:description,
        lat:marker.lat,
        lng:marker.lng,
            }
            try{
                debugger;
                 await createRequest(request);
            }catch{
                console.log("failed to createRequest");
            }
        }

  return (
    <form className='auth-inner' onSubmit={create}>
      <h3>create new request</h3>
         <div className="mb-3">
          <label>firstName</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter firstName"
                    onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>lastName</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter lastName"
                    onChange={(e) => setLastName(e.target.value)}
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
          <div className="mb-3">
          <label> display_name</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter  display_name"
                    onChange={(e) => setDisplay_name(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>notes</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter notes"
                    onChange={(e) => setNotes(e.target.value)}
          />
        </div>
          <div className="mb-3">
          <label>name</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
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
          <label>location</label>
        <Autocomplete />
        </div>
          <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
            </div>
    </form>
  );
}

export default observer(Request);