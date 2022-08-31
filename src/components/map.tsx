import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import  mapStore from '../stores/mapStore';
import markersStore from '../stores/markersStore';
import { color } from '@mui/system';

export default function MapContainer() {

    const apiIsLoaded = (map:any, maps:any) => {
      navigator?.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          const pos = { lat, lng };
          console.log(pos);
          mapStore.setCenter(pos.lat,pos.lng);
          mapStore.setZoom(12);
        }
      );
    };

    return (
        <div style = {{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys = {{ key: 'AIzaSyCbqPxgu_xAJ_hfku1xxaQpyejnGHKBmp4' }}
          center = { mapStore.currentMap.center}
          zoom = { mapStore.currentMap.zoom }
          //  yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
>

          {markersStore.markers.map(m => (
            <Marker
              lat = {m.lat}
              lng = {m.lng}
              name = {m.name}
              description = {m.description}
              phone = {m.phone}
              color = '#DC5835'
            />
            ))} 
        </GoogleMapReact>
      </div>
    );
}