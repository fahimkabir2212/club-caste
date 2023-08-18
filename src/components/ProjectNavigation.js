import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';


export const ProjectNavigation = () => {
  return (
    <>
        <div className="sec-nav">
            <Link className='sec-nav-link' to='/projectdashboard'>Home</Link>
            <Link className='sec-nav-link' to='/tasklist'>Tasklist</Link>
            <Link className='sec-nav-link' to='/discussion' >Discussion</Link>
            <Link className='sec-nav-link'>Notification</Link>
        </div>
    </>
  )
}

