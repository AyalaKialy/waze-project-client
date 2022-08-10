import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignUpPage from './pages/signUp';
import AuthRoute from './components/AuthRoute';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CreateSystem from './components/createSystem';
import Users from './components/users';
import Systems from './components/systems';

export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthRoute><HomePage /></AuthRoute>}/>
                <Route path="/HomePage:managerEmail" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/CreateSystem" element={<CreateSystem />} />
                <Route path="/Users" element={<Users />} />
                 <Route path="/Systems" element={<Systems />} />
                {/* <Route path=":systemId" element={<System />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
