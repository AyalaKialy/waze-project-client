import React,{ useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import  mapStore from '../stores/mapStore';
import markersStore from '../stores/markersStore';
import { observer } from 'mobx-react';
import { config } from '../config/config';


const MapContainer = () => {
  const [map, setMap] = useState(null);
  const indexOfMarker = markersStore.indexMarker;
  console.log(indexOfMarker);
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  
  const apiIsLoaded = (map: any, maps:any) => {
    setMap(map);
      navigator?.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          console.log(lat,lng);
           mapStore.currentMap.center = { lat, lng }
           mapStore.currentMap.zoom = 16;
        }
    );
   };
    
  const calculateAndDisplayRoute = (
  directionsService: google.maps.DirectionsService,
  directionsRenderer: google.maps.DirectionsRenderer,
  ) => {
    if (markersStore.indexMarker === null || markersStore.marker.lat === 0 )
      return;
  directionsRenderer.setMap(map);
  directionsService
    .route({
      origin: new google.maps.LatLng(markersStore.marker.lat, markersStore.marker.lng),
      destination: new google.maps.LatLng(markersStore.markers[Number(indexOfMarker)].lat,markersStore.markers[Number(indexOfMarker)].lng),
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status) => {
      if (status === 'OK' && response) {
        directionsRenderer.setDirections(response);
      }
    })
      // .catch(() => alert('Directions request failed'));
  }
  calculateAndDisplayRoute(directionsService, directionsRenderer);

    return (
        <div style = {{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys = {{ key: config.key }}
          center = { mapStore.currentMap.center}
          zoom = { mapStore.currentMap.zoom }
           yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded = {({ map, maps }) => apiIsLoaded(map,maps)}
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

export default observer(MapContainer);

