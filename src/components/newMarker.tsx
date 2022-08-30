import React, { useState } from 'react';
import '../css/marker.css';
import Autocomplete from './autocomplete';
// import {IMarker} from '../stores/markersStore';
import GoogleMapReact from 'google-map-react';
import { Marker } from 'google-maps-react';
import axios from 'axios';

export default function NewMarker() {

    const [name,setName] =useState('');
    const [description,setDescription] =useState('');
    const [phone, setPhone] = useState('');
    const [lat,setLat]= useState(0);
    const [lng,setLng]= useState(0);

    const create = async () => {
        const IMarker = {
          name:name,
          description: description,
          phone:phone,
          lat:lat,
          lng:lng,
        }
        try{
     
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
          <label>phone</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter phone"
                    onChange={(e) => setPhone(e.target.value)}
          />
        </div>
         <div className="mb-3">
          <label>location</label>
        <Autocomplete></Autocomplete>
        </div>
          <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
            </div>
    </form>
    );
  };
