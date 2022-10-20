import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react';
import { logout } from '../firebase'
import userStore from '../stores/userStore';

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              href='/'>
              All Systems
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              href='/login'>
              login
            </Button>
              <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              href='/signup'>
              signup
            </Button>
              <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={logout}>
              Sign out
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
              <Avatar src= {userStore.potoUrl} />
              </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default observer(ResponsiveAppBar) ;       