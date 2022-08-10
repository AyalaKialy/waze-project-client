import React, { useEffect, useState } from 'react';
import {System} from '../models/system.model';
import{ getSystemByManagerId } from '../api/system';


export default function Systems() {

    const [systems, setSystems] = useState<System[]>([]);

    useEffect(() => {
        getAll();
    }, [])
     // <button><Link to={`/${}`}></Link></button>

    const getAll = async () => {
        try {
            const res = await getSystemByManagerId("62f25a4210ea639da632b916");
            setSystems(res);
            console.log(res);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <>
            {systems && systems.map(system =>
                <div key={system._id}>{system.topic}</div>
            )}
        </> 
    )
}
