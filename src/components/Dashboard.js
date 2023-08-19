import React, {useRef, useState} from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {Sidebar} from './Sidebar' ;
import {SearchBox} from './SearchBox' ;
import './App.css';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="dashboard-page vh-100">
        <Sidebar/>
        <SearchBox/>
        <div className='heroheader'>
          <div className="overlay">
              <h2 className='hero-title'>Discover existing clubs or create your own</h2>
              <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className='featured-club-section' >
            <h2 className='featured-title'>Featured clubs </h2>
            <div className='community-cards'>
              <div className='club-card'>
                  <div className='card-image'>
                      Image
                  </div>
                  <div className='card-info'>
                    <h3>Atom alliance</h3>
                    <p>Lorem ipsum dolor sit amet ame, consectetur adipiscing elit</p>
                  </div>
                  <div className="card-nav">
                  <Link className='linking' to="/clubdashboard" >Visit club</Link>
                  {/* <Button disabled={loading} type='submit' className='w-50 btn-dark'>Visit</Button> */}
                  </div>
              </div>
              
            </div>
        </div>
        
      </div>
    </>
  )
}
