import React, { useEffect, useState } from 'react';
import {System} from '../models/system.model';
import{ getSystemByManagerId, deleteSystem } from '../api/system';
import { useParams ,useNavigate} from 'react-router-dom';
import systemsStore from '../stores/systemsStore';
import { observer } from 'mobx-react';
import NavBar from './navBar';
import { getLocationsBySystemId } from '../api/location';
import userStore from '../stores/userStore';

const Systems = () => {
    const navigate = useNavigate();
    const [systems, setSystems] = useState<System[]>([]);
    const {userId} = useParams();
    // const USERID=userStore.user._id;

    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        try {
            //home אולי את זה כבר לעשות בדף 
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
        const choice = window.confirm('Are you sure you want to delete this system?');
        if (!choice) return;
        //delete system
        await deleteSystem(systemId);
        //set 
        await userStore.setNumSystems(String(userId));
        window.location.reload();
        }
    }

    return (
        <div>
            {/* <NavBar/> */}
            {/* <h1 className='pink'>my activity systems</h1> */}
            <div className='card-group'>
            {systems&& systems.map(system =>
                <div key={system._id} className='card'>
                    <div className='card-body'>
                        <div ><img width={300} height={300} src={system.systemUrl}/></div>
                        <h5 className='card-title'>{ system.topic}</h5>
                        <p className='card-text'>{system.description}</p>
                        <a onClick={() => navigate(`/MySystem/${system.urlName}`)} className='btn btn-primary'>for details</a>
                        <br />
                        {/* לבדוק שאא למחוק רק אם כשאין מרקרים */}
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
