import '../css/map&.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import markersStore from '../stores/markersStore';
import mapStore from '../stores/mapStore';
export default function SystemLocations() {

  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(172, 172, 172)',
  ...theme.typography.body2,
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  }));
    
    const changeCenter = (lat: number, lng: number) => {
      mapStore.currentMap.center = { lat: lat, lng: lng };
    } 

// const from = new google.maps.LatLng(46.5610058, 26.9098054);
// const fromName = 'Bacau';
// const dest = new google.maps.LatLng(44.391403, 26.1157184);
// const destName = 'Bucuresti';

// const service = new google.maps.DistanceMatrixService();
// service.getDistanceMatrix(
//   {
//     origins: [from, fromName],
//     destinations: [dest, destName],
//     travelMode: 'DRIVING'
//   }, callback);

// function callback(response:any, status:any) {
//     if (status == 'OK') {
//         const origins = response.originAddresses;
//         const destinations = response.destinationAddresses;

//         for (var i = 0; i < origins.length; i++) {
//             var results = response.rows[i].elements;
//             console.log(results);
//             for (var j = 0; j < results.length; j++) {
//                 var element = results[j];
//                 var distance = element.distance.text;
//                 var duration = element.duration.text;
//                 var from = origins[i];
//                 var to = destinations[j];
//             }
//         }
//     }
// }
    return (<>
        {markersStore.markers.map(m => (
          <Item onClick={() => { changeCenter(m.lat, m.lng) }} className="item">
                <h2 className='white'>{m.name}</h2>
                <h4 className='white'>{m.description }</h4>
          </Item>
          ))}
    </>
   
  );
}