import React, { useEffect, useState } from 'react';
import {System} from '../models/system.model';
import{ getSystemByManagerId } from '../api/system';
import { Link, useParams ,useNavigate} from 'react-router-dom';

export default function Systems() {
    const navigate = useNavigate();
    const [systems, setSystems] = useState<System[]>([]);
    const {userId}=useParams();

    useEffect(() => {
        console.log(userId);
        getAll();
    }, [])
     

    const getAll = async () => {
        try {
            const res = await getSystemByManagerId(String(userId));
            setSystems(res);
            console.log(res);
        } catch (err) {
            console.log(err)
        }
    };

    //map מה קורה אם יש רק אוביקט אחד במערך-לא בטוח שמצליח לעבור עם 
    return (
        <div>
            {systems.length>0 && systems.map(system =>
                <div key={system.urlName}>
                <button type="button" 
                onClick={()=>navigate(`/MySystem/${system.urlName}`)}>
                {system.urlName}</button>
                </div>
            )}
           
        </div> 
    )
}