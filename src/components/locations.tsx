import React, { useEffect, useState } from 'react';
import {System} from '../models/system.model';
import{ getSystemByManagerId, deleteSystem } from '../api/system';
import { useParams ,useNavigate} from 'react-router-dom';
import systemsStore from '../stores/systemsStore';

export default function Locations() {
    const navigate = useNavigate();
    const [systems, setSystems] = useState<System[]>([]);
    const {userId} = useParams();

    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        try {
           await systemsStore.loudsystems(String(userId));
            setSystems(systemsStore.systems);
        } catch (err) {
            console.log(err)
        }
    };
    const deleteASystem = async(systemId: any) => {
        const choice = window.confirm('Are you sure you want to delete this system?');
        if (!choice) return;
        await deleteSystem(systemId);
        window.location.reload();
    }

    return (
        <div>
            <h1 className='pink'>my activity systems</h1>
            <div className='card-group'>
            {systems.length > 0 && systems.map(system =>
                <div key={system._id} className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>{ system.topic}</h5>
                        <p className='card-text'>{system.description}</p>
                        <a onClick={() => navigate(`/MySystem/${system.urlName}`)} className='btn btn-primary'>for details</a>
                        <br />
                        <a onClick={() => deleteASystem(system._id)} className='btn btn-primary'>delete system</a>
                        <a onClick={() => navigate(`/EditSystemDetails/${system.urlName}`)} className='btn btn-primary'>edit details</a>
                    </div>
                </div>
                )}
                </div>
</div>
            )
                
}