import React, { useEffect, useState } from 'react';
import { System } from '../models/system.model';
import{ getSystemByManagerId } from '../api/system';
import { useParams } from 'react-router-dom';
import { getSystemByUrlName ,updateSystem} from '../api/system';

export default function EditSystemDetails() {
    const {systemUrl} = useParams();
    const [system, setSystem] = useState<System>();
    const {userId} = useParams();
    const [topic,setTopic] =useState('');
    const [objectName,setObjectName] =useState('');
    const [description,setDescription] =useState('');
    const [urlName, setUrlName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        getSystem();
    },[]);

    const getSystem = async() => {
        try {
            const system = await getSystemByUrlName(String(systemUrl));
            setSystem(system);
        }catch{
            console.log("getSystem failed");
    }
    }
       const create = async () => {
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
              await updateSystem(String(userId), system);
              debugger
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
                    type="text"
                    className="form-control"
                     defaultValue = {system?.topic}
                    onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>objectName</label>
          <input
            type="text"
            className="form-control"
                     defaultValue = {system?.objectName}
                    onChange={(e) => setObjectName(e.target.value)}
          />
        </div>
           <div className="mb-3">
          <label>description</label>
          <input
            type="text"
            className="form-control"
                    defaultValue = {system?.description}
                    onChange={(e) => setDescription(e.target.value)}
          />
        </div>
            <div className="mb-3">
          <label>urlName</label>
          <input
            type="text"
            className="form-control"
                    defaultValue = {system?.urlName}
                    onChange={(e) => setUrlName(e.target.value)}
          />
        </div>
          <div className="mb-3">
          <label>email</label>
          <input
            type="text"
            className="form-control"
                    defaultValue = {system?.email}
                    onChange={(e) => setEmail(e.target.value)}
          />
        </div>
          <div className="mb-3">
          <label>phone</label>
          <input
            type="text"
            className="form-control"
                  defaultValue = {system?.phone}
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