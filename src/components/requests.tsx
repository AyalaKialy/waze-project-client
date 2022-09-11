import React, { useEffect, useState } from 'react';
import {Request} from '../models/request.model';
import{ getSystemByManagerId, deleteSystem } from '../api/system';
import { useParams ,useNavigate} from 'react-router-dom';
import systemsStore from '../stores/systemsStore';
import { observer } from 'mobx-react';
import NavBar from './navBar';
import { getLocationsBySystemId } from '../api/location';
import userStore from '../stores/userStore';
import requestStore from '../stores/requestStore';

const Requests = () => {
    //כאן גם בלחיצה אז שינוי סטטוס בקשה למאושר.
    //וגם יצירת לוקישן חדש לפי הנתונים בבקשה 
    const navigate = useNavigate();
    const [requests, setRequests] = useState<Request[]>([]);
    const {systemId} = useParams();

    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        try {
         await requestStore.getRequests(String(systemId));
            setRequests(requestStore.requests);
        } catch (err) {
            console.log(err)
        }
    };
    // const deleteASystem = async(systemId: any) => {
    //     const data=await getLocationsBySystemId(systemId);
    //     if(data.length > 0) {
    //         window.confirm('You cannot delete this system because it still has locations!');
    //     }else{
    //     const choice = window.confirm('Are you sure you want to delete this system?');
    //     if (!choice) return;
    //     //delete system
    //     await deleteSystem(systemId);
    //     //set 
    //     await userStore.setNumSystems(String(userId));
    //     window.location.reload();
    //     }
    // }

    return (
        <div>
            <div className='card-group'>
            {requests&& requests.map(request =>
                <div key={request._id} className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>{ request.lastName}</h5>
                        {/* <a onClick={() => navigate(`/MySystem/${system.urlName}`)} className='btn btn-primary'>for details</a>
                        <br /> */}
                        {/* <a onClick={() => deleteASystem(system._id)} className='btn btn-primary'>delete system</a> */}
                    </div>
                </div>
                )}
                </div>
</div>
            )
                
}

export default observer(Requests);
