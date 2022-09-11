import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import systemsStore from '../stores/systemsStore';
import { System } from '../models/system.model';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import AutoCompleteSystem from './autoCompleteSystem';
import Grid from '@mui/material/Grid';
// import requestStore from '../store/request';
import userStore from '../stores/userStore';

const Begin=() => {

    const navigate = useNavigate();

    async function getAllSystems() {
        try {
            await systemsStore.setAllSystems();
        } catch (error) { console.log(error); }
    }

    useEffect(() => {
        getAllSystems();
    }, [])

    const addSystem = () => {
        if (!userStore.user) {
            console.log('if not');
            navigate('/login')
        }
        else {
            console.log('if yes');
               navigate('/login')
            // navigate('/systems')
        }
    }

    return (
        <div id="allBusiness" >
            <Typography sx={{ textAlign: 'center' }} variant="h4" gutterBottom>
                {/* search for system do you want */}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Stack padding={3} direction="row" spacing={5} sx={{ '& .MuiCard-root': { m: 3 }, flexWrap: 'wrap' }} >
                        {systemsStore.AllSystems && systemsStore.AllSystems.map((system: System) =>
                            <Card key={system._id}>
                                <CardMedia
                                    component="img"
                                    alt="system"
                                    height="140"
                                    image={system.systemUrl}
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div">
                                        {system.topic}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {system.objectName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {system.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" onClick={() => {
                                        navigate(`/MySystem/${system.urlName}`)
                                    }}
                                    >see the places of this system</Button>
                                </CardActions>
                            </Card>)}
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Grid item xs={6} md={8} sx={{ marginTop: '20%' }}>
                        <AutoCompleteSystem />
                    </Grid>
                    <Grid sx={{ marginTop: '20%', marginLeft: '15%' }} item xs={8} md={6}>
                        <Button sx={{
                            width: '100%', height: '20vh',border: '1px solid #1C8EF9; '
                        }}
                            variant="outlined" onClick={addSystem}>
                            add system
                        </Button>
                    </Grid>
                </Grid>
            </Grid>


        </div>
    );
}

export default observer(Begin);