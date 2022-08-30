import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignUpPage from './pages/signUp';
import AuthRoute from './components/autocomplete';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CreateSystem from './components/createSystem';
import Users from './components/users';
import Systems from './components/systems';
import SingleSystem from './components/system';
import { Wrapper } from '@googlemaps/react-wrapper';
import Marker from './components/marker';
import MapContainer from './components/map';
import NewMarker from './components/newMarker';
import EditSystemDetails from './pages/editSystemDetails';

 export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/HomePage/:uid" element={<HomePage />} />
                <Route path="/SignUp" element={<SignUpPage />} />
                <Route path="/CreateSystem/:userId" element={<CreateSystem />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/Systems/:userId" element={<Systems />} />
                <Route path="/MySystem/:systemUrl" element={<SingleSystem />} />
                <Route path="/MapContainer" element={<MapContainer />} />
                  <Route path="/NewMarker/:systemUrl" element={<NewMarker />} />
                <Route path="/EditSystemDetails/:systemUrl" element={<EditSystemDetails />} />
            </Routes>
        </BrowserRouter>
        
    );
};