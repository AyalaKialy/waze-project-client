import React, { useEffect, useState } from 'react';
import {Request, Status} from '../models/request.model';
import{ getSystemByManagerId, deleteSystem } from '../api/system';
import { useParams ,useNavigate} from 'react-router-dom';
import systemsStore from '../stores/systemsStore';
import { observer } from 'mobx-react';
import NavBar from './navBar';
import { getLocationsBySystemId } from '../api/location';
import userStore from '../stores/userStore';
import requestStore from '../stores/requestStore';
import '../css/requests.css';
import usePlacesAutocomplete,{ getGeocode,getLatLng,} from 'use-places-autocomplete';
import { Role } from '../models/manager.model';
import { createManager } from '../api/manager';
import markersStore from '../stores/markersStore';
import { updateRequest, updateStatus } from '../api/request';

const Requests = () => {
    const navigate = useNavigate();
    const [requests, setRequests] = useState<Request[]>([]);
    const {systemId} = useParams();
    const [address,setAddress]=useState('');

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

    const requestUpdate=async(req: Request)=>{
        console.log("--status--");
        await updateStatus(String(req._id));
    }

    const managerNew=async(req:Request)=>{
           console.log("--manager--");
        try{
            const manager = {
                userId:String(req.userId),
                systemId:String(systemId),
                active: true,
                display_name:String(req.display_name),
                role: Role.manager
            }
           const data= await createManager(manager);
           return data;
        }catch(err){
                console.log(err);
            } 
    }
    const locationNew=async(req:Request,managerId:string)=>{
           console.log("--location--");
        try {
           const marker = {
           managerId:String(managerId),
           systemId: String(systemId),
           lat: req.lat,
           lng: req.lng,
           description: req.description,
           name: req.name,
           notes: '',
           email: req.email,
           phone: req.phone,
            }
        console.log(marker);
        await markersStore.addMarker(marker);
        alert('the marker was added to the store');
        // navigate(`/MySystem/${systemUrl}`);
        }catch(err){
                console.log(err);
            }
    }

    const approve=async(req: Request)=>{
        debugger;
        //status
        await requestUpdate(req);
        //manager
       const data= await managerNew(req);
        //location
        await locationNew(req,data._id);
        //mail to user that ok
        
    }

//      const getLocationNameByLatLng = async() => {
//     debugger
//   await  Geocode.setApiKey('AIzaSyBub3Ojwq9cNp4jhvTEkbrE21An_U8Cv5k');
//   await  Geocode.enableDebug();
//     await Geocode.fromLatLng(lat.toString(), lng.toString()).then(
//       async (response: any) => {
//         debugger;
//          const address =await response.results[0].formatted_address;
        
//         requestStore.currentRequestAddressesName = address;
//         console.log(address);
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }

    return (
        <div>
            <h3>sent</h3>
            <div className='card-group'>
            {requests&& requests.filter(req => req.status==0).map(request =>
                <div key={request._id} className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>{ request.firstName} {request.lastName}</h5>
                        <h4 className='card-title'>{ request.phone}</h4>
                             <button className='btn' onClick={()=> approve(request)}>approve</button>
                             {/* <button className='btn' onClick={showRequests}>all requests</button> */}

                        {/* <a onClick={() => navigate(`/MySystem/${system.urlName}`)} className='btn btn-primary'>for details</a>
                        <br /> */}
                        {/* <a onClick={() => deleteASystem(system._id)} className='btn btn-primary'>delete system</a> */}
                    </div>
                </div>
                )}
                </div>
                    <h3>approve</h3>
                 <div className='card-group'>
                {requests&& requests.filter(req => req.status==2).map(request =>
                <div key={request._id} className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>{ request.firstName} {request.lastName}</h5>
                    </div>
                </div>
                )}
                </div>
</div>
            )
                
}

export default observer(Requests);
