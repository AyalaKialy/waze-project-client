import React, { useEffect, useState } from 'react';
import '../css/marker.css';
import Autocomplete from './autocomplete';
import markersStore from '../stores/markersStore'
import systemsStore from '../stores/systemsStore';
import { useNavigate, useParams } from "react-router-dom";
import { observer } from 'mobx-react';

const NewMarker = () => {
  const marker = markersStore.marker;
  const navigate = useNavigate();
  const { systemUrl } = useParams();
  
  const create = async () => {
    try {
         const newMarker = {
           managerId: systemsStore.system.managerId,
           systemId: String(systemsStore.system._id),
           lat: marker.lat,
           lng: marker.lng,
           description: marker.description,
           name: marker.name,
           notes: marker.notes,
           email: 'rgr@gmail.com',
           phone: marker.phone
            }
         await markersStore.addMarker(newMarker);
        alert('the marker was added to the store ');
        navigate(`/MySystem/${systemUrl}`);

        }catch{
                console.log("failed in create marker");
            }
        }

    return (
      <form className='auth-inner' onSubmit={create}>
      <h3>create new marker</h3>
         <div className="mb-3">
          <label>name</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter name"
                    onChange={(e) => marker.name  = e.target.value}
          />
        </div>
           <div className="mb-3">
          <label>description</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter description"
                    onChange={(e) => marker.description = e.target.value}
          />
        </div>
          <div className="mb-3">
          <label>phone</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter phone"
                    onChange={(e) => marker.phone = e.target.value}
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
};
  
export default observer(NewMarker);
