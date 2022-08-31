import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import  mapStore from '../stores/mapStore';
import markersStore from '../stores/markersStore';
import { observer } from 'mobx-react';

 const MapContainer = () => {
    return (
        <div style = {{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys = {{ key: 'AIzaSyCbqPxgu_xAJ_hfku1xxaQpyejnGHKBmp4' }}
          center = { mapStore.currentMap.center}
          zoom = { mapStore.currentMap.zoom }>
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

export default observer(MapContainer);