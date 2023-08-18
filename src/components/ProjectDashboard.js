import React from 'react';
import {ProjectNavigation} from './ProjectNavigation' ;


export const ProjectDashboard = () => {
  return (
    <>
        <div className="project-dashboard-page vh-100">
            <div className='sidebar'>Sidebar</div>
            <ProjectNavigation/>
            <div className='project-overview' >
                Project Overview
            </div>
        
      </div>
    </>
  )
}
