import React, { useState } from 'react';
import '../css/marker.css';
import Autocomplete from './autocomplete';
import {IMarker} from '../stores/markers.store';
import GoogleMapReact from 'google-map-react';
import { Marker } from 'google-maps-react';
import axios from 'axios';

const NewMarker = (props: any) => {

    const [name,setName] =useState('');
    const [description,setDescription] =useState('');
    const [phone, setPhone] = useState('');
    const [lat,setLat]= useState(0);
    const [lng,setLng]= useState(0);

    const create = async () => {
        // <Marker position={{ lat: lat, lng: lng }} />
        //key={i}
        const IMarker = {
          name:name,
          description: description,
          phone:phone,
          lat:lat,
          lng:lng,
        }
        try{
        debugger;
        //יצירה עם פונקצית יצירה ממרקר סטור
        //   const res= await addMarker(system);
        //    console.log(system);
        //       console.log(res);
        }catch{
                console.log("failed in create marker");
            }
        }

// const myLatLng = { lat: 31.0461, lng: 34.8516 };
//     const mapConfig: google.maps.MapOptions = {
//       center: {
//         lat,
//         lng
//       },
//       disableDefaultUI: true,
//       minZoom: 8,
//       zoom: 11
//     };
// const map = new google.maps.Map(mapConfig);
//     document.getElementById("map") as HTMLElement,
//     {
//       zoom: 4,
//       center: myLatLng,
//     }

//    new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: "Hello World!",
//   });

// const { color, name, id } = props;
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

  export default NewMarker;