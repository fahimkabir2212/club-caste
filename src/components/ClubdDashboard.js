import React, {useRef, useState} from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import {Sidebar} from './Sidebar' ;



export const ClubdDashboard = () => {
  const [loading, setLoading] = useState(false);
  return (
      <>
      <div className="club-dashboard-page vh-100">
        <Sidebar/>
        <div className='club-hero heroheader'>
          <div className="overlay">
              <h2 className='hero-title'>Discover existing clubs or create your own</h2>
              <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className='featured-club-section' >
            <h2 className='featured-title'>Recent Projects </h2>
            <div className='community-cards'>
              <div className='club-card'>
                  <div className='card-image-project'>
                      <div className="overlay">

                      </div>
                  </div>
                  <div className='card-info'>
                    <h3>Solar Aqua</h3>
                    <p>Lorem ipsum dolor sit amet ame, consectetur adipiscing elit</p>
                  </div>
                  <div className="card-nav">
                  <Link className='linking' to="/projectdashboard" >Learn more</Link>
                  {/* <Button disabled={loading} type='submit' className='w-50 btn-dark'>Visit</Button> */}
                  </div>
              </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

