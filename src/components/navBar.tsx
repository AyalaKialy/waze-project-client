import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navBar.css";
import Navbar from 'react-bootstrap/Navbar';
import logo from'../img/logo.png';
import { Link } from 'react-router-dom';
import { logout } from '../firebase';
import { observer } from 'mobx-react';
import userStore from '../stores/userStore';
import ImageAvatars from './profil';

const MyNavbar = () => {

  return (
    <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js">
        {/* <img width={100} height={100} src={userStore.potoUrl}/> */}
        <ImageAvatars></ImageAvatars>
        <Navbar.Brand href="#home">
        <img alt="" src={logo} width="50" height="50" className="d-inline-block align-top"/>{' '}
       </Navbar.Brand>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link to='/' className="nav-item nav-link">All Systems</Link>
            <Link to="/login" className="nav-item nav-link">login</Link>
            <Link to="/SignUp" className="nav-item nav-link">Sign up</Link>  
            <button  onClick={logout}>Sign out</button>
          </div>
          </div>
      </nav>     
  );
}

export default observer(MyNavbar);