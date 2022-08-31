import React, { useEffect, useState } from 'react';
import {Location} from '../models/location.model';
import {System} from '../models/system.model';
import{ getSystemByManagerId, deleteSystem } from '../api/system';
import { useParams ,useNavigate} from 'react-router-dom';
import systemsStore from '../stores/systemsStore';
import markersStore from '../stores/markersStore';
import { deleteLocation } from '../api/location';

export default function Locations() {
    const navigate = useNavigate();
    const [locations, setLocations] = useState<Location[]>([]);
    const [system, setSystem] = useState<System>();
    const {systemUrl} = useParams();

    useEffect(() => {
        getSystem();
        getAll();
    }, [])

    const getSystem= async () => {
         try {
           await systemsStore.loudSystem(String(systemUrl));
            setSystem(systemsStore.currentSystem);
        } catch (err) {
            console.log(err)
        }
    }

    const getAll = async () => {
        try {
           await markersStore.loudLocations(String(system?._id));
            setLocations(markersStore.markers);
        } catch (err) {
            console.log(err)
        }
    };

    const dellLocation = async(locationId: any) => {
        const choice = window.confirm('Are you sure you want to delete this location?');
        if (!choice) return;
        await deleteLocation(locationId);
        console.log('deleteLocation');
        window.location.reload();
    }

    return (
        <div>
            <h1 className='pink'>Locations</h1>
            <div className='card-group'>
            {locations.length > 0 && locations.map(location =>
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