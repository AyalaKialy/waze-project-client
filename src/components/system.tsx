import React, { useEffect, useState } from 'react';
import { System } from '../models/system.model';
import{ getSystemByManagerId } from '../api/system';
import { useParams } from 'react-router-dom';
import { async } from '@firebase/util';
import { getSystemByUrlName ,updateSystem,deleteSystem} from '../api/system';

export default function SingleSystem() {
    const {systemUrl}=useParams();
    const [system,setSystem] = useState<System>();

    useEffect(() => {
        getSystem();
    },[]);

    const getSystem=async()=>{
        try {
            const SYSTEM=await getSystemByUrlName(String(systemUrl));
            setSystem(SYSTEM);
        }catch{
            console.log("getSystem failed");
    }
    }
     

    return (
        //הצגה של סיסטם חדש פלוס הפעולות האפשריות שלו,עריכה ומחיקה
        <div>
            <h1>{system?.topic}</h1>
            {/* <button type="button" onClick={()=>updateSystem()}></button> */}
            {/* <button type="button" onClick={()=>deleteSystem()}></button> */}
        </div> 
    )
}