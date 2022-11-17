import React, { useEffect, useState } from 'react';
import {System} from '../models/system.model';
import{ getSystemByManagerId, deleteSystem } from '../api/system';
import { useParams ,useNavigate} from 'react-router-dom';
import systemsStore from '../stores/systemsStore';
import { observer } from 'mobx-react';
import NavBar from './navBar';
import { getLocationsBySystemId } from '../api/location';
import userStore from '../stores/userStore';
import Swal from 'sweetalert2';

const Systems = () => {
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
        const data=await getLocationsBySystemId(systemId);
        if(data.length > 0) {
            window.confirm('You cannot delete this system because it still has locations!');
        }else{
        // Swal.fire("you want to delete?", "You clicked the button!", "question");
        const choice = window.confirm('Are you sure you want to delete this system?');
        if (!choice) return;
        //delete system
        await deleteSystem(systemId);
        Swal.fire("deleted!", "You clicked the button!", "success");
        //set 
        await userStore.setNumSystems(String(userId));
        window.location.reload();
        }
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className='card-group'>
            {systems&& systems.map(system =>
                <div key={system._id} className='card'>
                    <div className='card-body'>
                        <div ><img width={250} height={250} src={system.systemUrl}/></div>
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

export default observer(Systems);
