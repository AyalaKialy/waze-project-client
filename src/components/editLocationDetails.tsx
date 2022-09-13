import React, { useEffect, useState } from 'react';
import { System } from '../models/system.model';
import{ getSystemByManagerId } from '../api/system';
import { useParams } from 'react-router-dom';
import { getSystemByUrlName ,updateSystem} from '../api/system';
import userStore from '../stores/userStore';
import { async } from '@firebase/util';
import Systems from '../components/systems';
import systemsStore, { SystemsStore } from '../stores/systemsStore';
import { observer } from 'mobx-react';
import { getLocationsByLocationId, getLocationsBySystemId, updateLocation } from '../api/location';
import markersStore from '../stores/markersStore';

const EditLocationDetails=()=> {

    const {locationId} = useParams();

    const [managerId, setManagerId] = useState('');
    const [systemId, setSystemId] = useState('');
    const [description,setDescription] =useState('');
    const [name,setName] =useState('');
    const [notes,setNotes] =useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [lat,setLat]=useState<number>();
     const [lng,setLng]=useState<number>();

   useEffect(() => {
        getLocation();
    }, [])

    const getLocation = async () => {
        try {
          const data= await getLocationsByLocationId(String(locationId));
          setManagerId(data.managerId);
           setSystemId(data.systemId);
           setLat(data.lat);
           setLng(data.lng);
              setDescription(data.description);
               setName(data.name);
                setNotes(data.notes);
                setEmail(data.email);
                 setPhone(data.phone);
                console.log(lat,lng,name,phone);
        } catch (err) {
            console.log(err)
        }
    };
       const put = async () => {
        const updatedLocation = {
         managerId:managerId,
         systemId:systemId,
          lat:Number(lat), 
          lng:Number(lng),
          description: description,
          name:name,
          notes:notes,
          email:email,
          phone:phone
            }
            try{
             await updateLocation(String(locationId), updatedLocation);
            }catch{
                console.log("failed to update location");
            }
        }

  return (
    <form className='auth-inner' onSubmit={put}>
      <h3>update location</h3>
         <div className="mb-3">
        </div>
           <div className="mb-3">
          <label>description</label>
          <input
            type="text"
            className="form-control"
                    defaultValue = {description}
                    onChange={(e) => setDescription(e.target.value)}
          />
        </div>
            <div className="mb-3">
          <label>name</label>
          <input
            type="text"
            className="form-control"
                   defaultValue = {name}
                    onChange={(e) => setName(e.target.value)}
          />
        </div>
           <div className="mb-3">
          <label>notes</label>
          <input
            type="text"
            className="form-control"
                   defaultValue = {notes}
                    onChange={(e) => setNotes(e.target.value)}
          />
        </div>
          <div className="mb-3">
          <label>email</label>
          <input
            type="text"
            className="form-control"
                    defaultValue = {email}
                    onChange={(e) => setEmail(e.target.value)}
          />
        </div>
          <div className="mb-3">
          <label>phone</label>
          <input
            type="text"
            className="form-control"
                  defaultValue = {phone}
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
export default observer(EditLocationDetails);
