
import { useEffect, useState } from 'react';
import '../css/map&.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import markersStore from '../stores/markersStore';
import mapStore from '../stores/mapStore';
import { getSystemByUrlName } from '../api/system';
import { observer } from 'mobx-react';
import systemsStore from '../stores/systemsStore';

  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(172, 172, 172)',
  ...theme.typography.body2,
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  }));

const SystemLocations = (props: any) => {
  

  useEffect(() => {
    callSystem();        
  }, [])

  const callSystem = async () => {
    const SYSTEM = await getSystemByUrlName(String(props.systemUrl));
    await systemsStore.setSystem(SYSTEM);
    await markersStore.loudLocations(String(systemsStore.system._id));
    }

  const handleClick = (lat: number, lng: number,index: number) => {
    mapStore.currentMap.center = { lat: lat, lng: lng };
    mapStore.currentMap.zoom = 12;
    markersStore.indexMarker = index;
  } 

    return (<>
      { markersStore.markers  && markersStore.markers.map((m,i) => (
          <Item key={m._id} onClick={() => { handleClick(m.lat, m.lng,i) }} className="item">
                <h2 className='white'>{m.name}</h2>
                <h4 className='white'>{m.description }</h4>
          </Item>
      ))}
    </>
   
  );
}
export default observer (SystemLocations);