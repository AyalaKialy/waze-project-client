
import React, { useEffect, useState } from 'react';
import '../css/map&.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import markersStore from '../stores/markersStore';
import mapStore from '../stores/mapStore';
import systemsStore from '../stores/systemsStore';
import { getSystemByUrlName } from '../api/system';
import { observer } from 'mobx-react';
import userStore from '../stores/userStore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(172, 172, 172)',
  ...theme.typography.body2,
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  }));

const SystemLocations = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let markers:any = [];

  useEffect(() => {
    callSystem();     
  }, [])

  const callSystem = async () => {
    const SYSTEM = await getSystemByUrlName(String(props.systemUrl));
    systemsStore.setSystem(SYSTEM);
    console.log(systemsStore.system._id);
    await markersStore.loudLocations(String(systemsStore.system._id));
    if(userStore.user){
    await userStore.setManager(String(userStore.user._id),String(systemsStore.system._id));
    console.log(userStore.manager.role);
    }
    }
    const [name,setName]= useState('');
    const [phone,setPhone]= useState('');
    const [email,setEmail]= useState('');
 const change = (lat: number, lng: number,name: string,phone: string,email: string,index: number) => {
      markersStore.markers.map(marker => { console.log(marker.name)});
      mapStore.currentMap.center = {  lat, lng };
      mapStore.currentMap.zoom = 13;
      markersStore.indexMarker = index;
      setName(name);
      setPhone(phone);
      setEmail(email);
      handleOpen();
      // handleClick();
    } 
  // const handleClick = (lat: number, lng: number,index: number) => {
  //   mapStore.currentMap.center = { lat: lat, lng: lng };
  //   mapStore.currentMap.zoom = 12;
  //   markersStore.indexMarker = index;
  // } 

    return (<>
        {markersStore.markers && markersStore.markers.map((m,index) => (
          <>
          <Item key={m._id} onClick={() => change(m.lat, m.lng,m.name,m.phone,m.email,index)} className="item">
            <h2 className='white'>{m.name}</h2>
            <h4 className='white'>{m.description}</h4>
          </Item>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {email+' '}
           {phone}
          </Typography>
        </Box>
      </Modal>
      {/*  */}
          </>
          ))}
    </>
  );
}
export default observer(SystemLocations);