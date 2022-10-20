import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import LoginPage from './components/login';
import SignUpPage from './components/signUp';
import AuthRoute from './components/autocomplete';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CreateSystem from './components/createSystem';
import Systems from './components/systems';
import SingleSystem from './components/system';
import { Wrapper } from '@googlemaps/react-wrapper';
import Marker from './components/marker';
import MapContainer from './components/map';
import NewMarker from './components/newMarker';
import EditSystemDetails from './components/editSystemDetails';
import { useObserver } from 'mobx-react-lite';
import Locations from './components/locations';
import EditLocationDetails from './components/editLocationDetails';
import Request from './components/request';
import Requests from './components/requests';
import Begin from './components/begin';

 export default function App() {

    return useObserver(() =>(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Begin/>}/>
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/Login/:systemId" element={<LoginPage />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/SignUp" element={<SignUpPage />} />
                <Route path="/CreateSystem/:userId" element={<CreateSystem />} />
                <Route path="/Systems/:userId" element={<Systems />} />
                <Route path="/MySystem/:systemUrl" element={<SingleSystem />} />
                <Route path="/MapContainer" element={<MapContainer />} />
                <Route path="/NewMarker/:systemUrl" element={<NewMarker />} />
                <Route path="/EditSystemDetails/:systemUrl" element={<EditSystemDetails />} />
                <Route path="/Locations/:systemUrl" element={<Locations />} />
                <Route path="/EditLocationDetails/:locationId" element={<EditLocationDetails />} />
                <Route path="/Request/:userId" element={<Request />} />
                <Route path="/Requests/:systemId" element={<Requests />} />
            </Routes>
        </BrowserRouter>
    )
    );
};