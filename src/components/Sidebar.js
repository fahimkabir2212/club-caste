import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Calendar} from './Calendar' ;
import dashboardIcon from '../icons/dashboardIcon.png';
import browseIcon from '../icons/browswCommunity.png';
import appLogo from '../icons/appLogo.png';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='logo'>
            <img className='app-logo' src={appLogo} alt="Dashboard Icon"/>
            <h2 className='app-name'>Club Caste</h2>
        </div>
        <div className='greeting'>
            <p className='greeting-text'>Hello,</p>
            <h3 className='greeting-user'>Comrade</h3>
        </div>
        <div className='navigation-sidebar'>

            <Link className='navigation-sidebar-links' rel="stylesheet" to="/">
                <img className='navbar-icon' src={dashboardIcon} alt="Dashboard Icon"/> 
                <p className='nav-bar-text'>Dashboard</p>
            </Link>
            <Link className='navigation-sidebar-links' rel="stylesheet" to="/">
                <img className='navbar-icon' src={browseIcon} alt="Dashboard Icon"/> 
                <p className='nav-bar-text'>Explore Clubs</p> 
            </Link>
        </div> 
    </div>
  )
}
