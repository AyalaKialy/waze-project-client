import React, { useEffect, useState } from 'react';
import { System } from '../models/system.model';
import{ getSystemByManagerId } from '../api/system';
import { Link, useNavigate ,useParams} from "react-router-dom";
import { async } from '@firebase/util';
import { getSystemByUrlName ,updateSystem,deleteSystem} from '../api/system';
import MapContainer from './map';
import AutoComplete from './autocomplete';
import Marker from './marker';
import '../css/map&.css';
import NewMarker from './newMarker';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Autocomplete from './autocomplete';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SingleSystem() {
    const navigate = useNavigate();
    const {systemUrl}=useParams();
    const [system,setSystem] = useState<System>();

    useEffect(() => {
        getSystem();
    },[]);

    const getSystem = async()=>{
        try {
            const SYSTEM = await getSystemByUrlName(String(systemUrl));
            setSystem(SYSTEM);
        }catch{
            console.log("getSystem failed");
    }
}

const createNewMarker=()=>{
 navigate('/NewMarker');
}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item className="item"><h1>{system?.topic}</h1></Item>
        </Grid>
        <Grid item xs={7}>
          <Item className="item"><MapContainer></MapContainer></Item>
        </Grid>
        <Grid item xs={5}>
          <Item className="item"><Autocomplete></Autocomplete>
          <button onClick={createNewMarker}>Create New Marker</button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}