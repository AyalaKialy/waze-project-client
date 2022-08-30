import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import  mapStore from '../stores/mapStore';
import markersStore from '../stores/markersStore';
import { color } from '@mui/system';

export default function MapContainer() {
    // const [center, setCenter] = useState({lat: 31.0461, lng: 34.8516 });
    // const [zoom, setZoom] = useState(7);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
               {/* options={getMapOptions} */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCbqPxgu_xAJ_hfku1xxaQpyejnGHKBmp4' }}
          center={{ lat: mapStore.currentMap.center.lat, lng: mapStore.currentMap.center.lng }}
          zoom={mapStore.currentMap.zoom}
        >
          {markersStore.markers.map(m => (
            <Marker
              lat={m.lat}
              lng={m.lng}
              name={m.name}
              description={m.description}
              phone={m.phone}
              color='#dc5835'
            />
          ))}
        </GoogleMapReact>
      </div>
    );
}
