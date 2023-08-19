import React from 'react';
import {ProjectNavigation} from './ProjectNavigation' ;
import {Sidebar} from './Sidebar' ;


export const ProjectDashboard = () => {
  return (
    <>
        <div className="project-dashboard-page vh-100">
            <Sidebar/>
            <ProjectNavigation/>
            <div className='project-overview' >
                Project Overview
            </div>
        
      </div>
    </>
  )
}
