import React, { useEffect, useState } from 'react';
import { System } from '../models/system.model';
import{ getSystemByManagerId } from '../api/system';
import { useParams } from 'react-router-dom';
import { getSystemByUrlName ,updateSystem} from '../api/system';
import  userStore  from '../stores/userStore';
import { observer } from 'mobx-react';
import systemsStore from '../stores/systemsStore';

const EditSystemDetails = () => {
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
         const data= await getSystemByUrlName(String(systemUrl));
            setSystem(data);
             setTopic(data.topic);
              setObjectName(data.objectName);
               setDescription(data.description);
                setEmail(data.email);
                 setPhone(data.phone);
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
            // getSystem();
            //   
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

export default observer(EditSystemDetails);