import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import userStore from '../stores/userStore';
import { observer } from 'mobx-react';

const ImageAvatars=()=> {
    
    const url=userStore.potoUrl;
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={url} />
    </Stack>
  );
}

export default observer(ImageAvatars);