import React, { useEffect, useState } from 'react';
import {Location} from '../models/location.model';
import {System} from '../models/system.model';
import{ getSystemByManagerId, deleteSystem, getSystemByUrlName } from '../api/system';
import { useParams ,useNavigate} from 'react-router-dom';
import systemsStore from '../stores/systemsStore';
import markersStore from '../stores/markersStore';
import { deleteLocation } from '../api/location';
import { observer } from 'mobx-react';

const Locations=()=> {
    const navigate = useNavigate();
    const {systemUrl} = useParams();
    console.log(systemUrl);
    const locations=markersStore.markers;

    const dellLocation = async(locationId: any) => {
        const choice = window.confirm('Are you sure you want to delete this location?');
        if (!choice) return;
        await deleteLocation(locationId);
        console.log('deleteLocation');
        window.location.reload();

    }
             const createNewMarker = () => {
    navigate(`/newMarker/${systemUrl}`);
  }

    return (
        <div>
            <h1 className='pink'>Locations</h1>
             <button onClick={createNewMarker}>Create New Marker</button>
            <div className='card-group'>
            {locations && locations.map(location =>
                <div key={location._id} className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>{ location.name}</h5>
                        <p className='card-text'>{location.description}</p>
                         <a onClick={() => dellLocation(String(location._id))} className='btn btn-primary'>delete location</a>
                        <a onClick={() => navigate(`/EditLocationDetails/${location._id}`)} className='btn btn-primary'>edit details</a>
                    </div>
                </div>
                )}
                </div>
</div>
            )
                
}

export default observer(Locations);
