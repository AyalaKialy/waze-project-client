import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
// import { mapStore } from './map.store';

const MapContainer = (props: any) => {
    const [center, setCenter] = useState({lat: 31.0461, lng: 34.8516 });
    const [zoom, setZoom] = useState(7);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
 {/* <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAcibzCa3ilUV5eZNEQpjqLmWzdm35tymw' }}
          center={{ lat: MapStore.currentMap.center.lat, lng: MapStore.currentMap.center.lng }}
          zoom={MapStore.currentMap.zoom}
          options={getMapOptions}
        ></GoogleMapReact> */}

        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCbqPxgu_xAJ_hfku1xxaQpyejnGHKBmp4' }}
          center={center}
          zoom={zoom}
        >
          <Marker
            lat={31.0461}
            lng={34.8516}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
}
export default MapContainer;