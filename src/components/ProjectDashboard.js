import React from 'react';
import {ProjectNavigation} from './ProjectNavigation' ;
import {Sidebar} from './Sidebar' ;
import Texts from './Texts';
import TaskPanel from './TaskPanel' ;



export const ProjectDashboard = () => {
  return (
    <>
        <div className="project-dashboard-page vh-100">
            <Sidebar/>
            <ProjectNavigation/>
            
            <div className='project-overview' >
                <div className='schedule-board'>
                    <div className="overlay">
                    <h2 className='pro-heading board-heading'>Scientific View</h2>
                    <p className='board-paragraph'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='task-board'>
                  <h2 className='board-heading abc'>About Solar Aqua</h2> 
                  <p className='abc'>Our project, SolarAqua, aims to develop a sustainable, solar-powered water purification system to provide clean and safe drinking water in areas lacking access to electricity and clean water sources. Using solar collectors and simple purification techniques, we'll demonstrate the system's efficiency in removing contaminants from water, comparing it with traditional methods. We anticipate that SolarAqua will be an economical, environmentally friendly solution to mitigate waterborne diseases and improve public health, contributing to a healthier world through solar energy.</p>
                  <h2 className='board-heading'>Objective</h2> 
                  <p>The primary objective of this project is to design and build a solar-powered water purification system capable of providing clean and safe drinking water from contaminated sources. </p>
                  <h2 className='board-heading'>Expected Results</h2> 
                  <p>We anticipate that our solar-powered water purification system will be a cost-effective and sustainable solution for providing clean drinking water in areas with limited access to electricity and clean water sources. We expect to demonstrate that this system can significantly reduce waterborne diseases and improve overall public health.</p>
                </div>
                <div className='msg-board'>
                    <h2 className='board-heading'>Message Board</h2>
                    <Texts/>  
                </div>
                
            </div>
        
      </div>
    </>
  )
}
