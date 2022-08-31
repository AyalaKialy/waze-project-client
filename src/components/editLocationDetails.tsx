import React, { useEffect, useState } from 'react';
import { System } from '../models/system.model';
import{ getSystemByManagerId } from '../api/system';
import { useParams } from 'react-router-dom';
import { getSystemByUrlName ,updateSystem} from '../api/system';
import userStore from '../stores/userStore';
import { async } from '@firebase/util';
import Systems from '../components/systems';
import systemsStore, { SystemsStore } from '../stores/systemsStore';

export default function EditLocationDetails() {
    const {systemUrl} = useParams();
    const [system, setSystem] = useState<System>();

    const [topic,setTopic] =useState('');
    const [objectName,setObjectName] =useState('');
    const [description,setDescription] =useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

   useEffect(() => {
        getSystem();
    }, [])

    const getSystem = async () => {
        try {
           await systemsStore.loudSystem(String(systemUrl));
            setSystem(systemsStore.currentSystem);
             setTopic(systemsStore.currentSystem.topic);
              setObjectName(systemsStore.currentSystem.objectName);
               setDescription(systemsStore.currentSystem.description);
                setEmail(systemsStore.currentSystem.email);
                 setPhone(systemsStore.currentSystem.phone);
        } catch (err) {
            console.log(err)
        }
    };
       const update = async () => {
        const updatedSystem = {
          topic: topic,
          objectName: objectName,
          managerId:String(userStore.user._id),
          urlName:String(systemUrl),
          description: description,
          email:email,
          phone:phone
            }
            try{
             await updateSystem(String(system?._id), updatedSystem);
            }catch{
                console.log("failed to create system");
            }
        }

  return (
    <form className='auth-inner' onSubmit={update}>
      <h3>update system</h3>
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
                    value = {system?.urlName}
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