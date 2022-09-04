import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createSystem } from '../api/system';
import {System} from '../models/system.model';
import {  useNavigate, useParams } from 'react-router-dom';

import userStore, { UserStore } from '../stores/userStore';

import { observer } from 'mobx-react';

import systemsStore from '../stores/systemsStore';
import { createManager, getManagerByUserIdAndBySystemId } from '../api/manager';
import { Role } from "../models/manager.model";

 const CreateSystem = () => {

    const [topic,setTopic] =useState('');
    const [objectName,setObjectName] =useState('');
    const [description,setDescription] =useState('');
    const [urlName, setUrlName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const create = async () => {
        const system = {
          topic: topic,
          objectName: objectName,
          managerId:String(userStore.user._id),
          description: description,
          urlName:urlName,
          email:email,
          phone:phone
            }
            try{
              //create system
             const data1=await systemsStore.addSystem(system);
             //create manager
                const manager = {
                userId:String(userStore.user._id),
                systemId:String(data1?.data._id),
                active: true,
                display_name:String(userStore.user.lastName),
                role: Role.admin
            }
              await createManager(manager);
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

export default observer(CreateSystem);