import React,{ useEffect, useState } from 'react';
import { System } from '../models/system.model';
import { useNavigate, useParams} from "react-router-dom";
import { getSystemByUrlName} from '../api/system';
import MapContainer from './map'
import systemsStore from '../stores/systemsStore';
import '../css/map&.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SystemLocations from './systemLocations';
import Autocomplete from './autocomplete';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
    margin: theme.spacing(0.5),

  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SingleSystem() {
  const navigate = useNavigate();
  const { systemUrl } = useParams();
  const system = systemsStore.system;

  const createNewMarker = () => {
    navigate(`/newMarker/${systemUrl}`);
  }
 const showLocations = () => {
    navigate(`/Locations/${systemUrl}`);
  }

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 className='pink'>{system?.topic}</h1>
        </Grid>
        <Grid item xs={5}>
          <Item className="item"><MapContainer></MapContainer></Item>
        </Grid>
        <Grid item xs={4}>
          <SystemLocations systemUrl={systemUrl} />
        </Grid>
        <Grid item xs={3}>
          <Item className="item"><Autocomplete></Autocomplete>
            <button onClick={createNewMarker}>Create New Marker</button>
          <button onClick={showLocations}>all locations</button>
          </Item>
          </Grid>
      </Grid>
    </Box>
  );
}