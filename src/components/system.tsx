import React,{ useEffect, useState } from 'react';
import { System } from '../models/system.model';
import { useNavigate, useParams} from "react-router-dom";
import MapContainer from './map'
import systemsStore from '../stores/systemsStore';
import '../css/map&.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SystemLocations from './systemLocations';
import Autocomplete from './autocomplete';
import { observer } from 'mobx-react';
import markersStore from '../stores/markersStore';
import { Location } from '../models/location.model';
import userStore from '../stores/userStore';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
    margin: theme.spacing(0.5),

  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SingleSystem = () => {
  const navigate = useNavigate();
  const { systemUrl } = useParams();
  const system = systemsStore.system;

 const showLocations = () => {
    navigate(`/Locations/${systemUrl}`);
  }

  const showRequests=()=>{
     navigate(`/Requests/${system._id}`);
  }
  const findClosestPlaces = () => {
    const from = new google.maps.LatLng(markersStore.marker.lat, markersStore.marker.lng);
    const service = new google.maps.DistanceMatrixService();
   service.getDistanceMatrix(
   {
    origins: [from],
    destinations: markersStore.markers.map(marker => new google.maps.LatLng(marker.lat, marker.lng)) ,
    travelMode: google.maps.TravelMode.DRIVING
  }, callback);

    function callback(response: any, status: any) {
  if (status == 'OK') {
    const origins = response.originAddresses;
        let smallestDest1: number = Infinity;
        let smallest1: number;
        let smallestDest2: number = Infinity;
        let smallest2: number;
        let smallestDest3: number = Infinity;
        let smallest3: number;

    origins.map((origin: any, i: number) => { 
          let results = response.rows[i].elements;
      results.map((element: any, j: number) => { 
        if (element.duration.value < smallestDest1) {
            smallestDest3 = smallestDest2;
            smallest3 = smallest2;
            smallestDest2 = smallestDest1;
            smallest2 = smallest1;
            smallestDest1 = element.duration.value;
            smallest1 = j;
          } 
        else if (element.duration.value < smallestDest2) {
            smallestDest3 = smallestDest2;
            smallest3 = smallest2;
            smallestDest2 = element.duration.value;
            smallest2 = j;
          } 
        else if (element.duration.value < smallestDest3) {
            smallestDest3 = element.duration.value;
            smallest3 = j;
            } 
        });

      let newArray: any[] = [];
      if(smallest1 != null){
        newArray.push(markersStore.markers[smallest1]);
      }
      if(smallest2 != null){
         newArray.push(markersStore.markers[smallest2]);
      }
       if(smallest3 != null){
         newArray.push(markersStore.markers[smallest3]);
      }
      markersStore.markers = newArray;
      console.log(smallest1);
      markersStore.indexMarker = 0;
      });
    }
}
  }
  const canselSorting = () => {
    markersStore.indexMarker=null;
    markersStore.loudLocations(String(system._id));
  }

  const createReq=() => {
    //השאלה כאן ביצירת בקשה לאיזה לוגין מועבר קודם ומה ישמר גלובלי
      navigate('/Request')
  }
  return (   
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* <Grid item xs={12}>
          <h1 className='pink'>{system?.topic}</h1>
        </Grid> */}
        <Grid item xs={6}>
          <Item className="item"><MapContainer/></Item>
        </Grid>
        <Grid item xs={3}>
          <SystemLocations systemUrl={systemUrl} />
        </Grid>
        <Grid item xs={3}>
          <Item className="item"><Autocomplete />
            <button className='btn' onClick={findClosestPlaces}>Find Closest Locations</button>
            <button className='btn' onClick={canselSorting}>Cancel Sorting</button>
          {(userStore.manager && userStore.manager.role ==='0') ?
          <>
          <button className='btn' onClick={showLocations}>all locations</button>
          <button className='btn' onClick={showRequests}>all requests</button>
          </>: <button className='btn' onClick={createReq}>Request</button>}
          </Item>
          </Grid>
      </Grid>
    </Box>
  );
}

export default observer(SingleSystem);