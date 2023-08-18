import React from 'react';
import {ProjectNavigation} from './ProjectNavigation' ;

export const Discussion = () => {
  return (
        <div className="project-dashboard-page vh-100">
        <div className='sidebar'>Sidebar</div>
        <ProjectNavigation/>
        <div className='discussion-panel' >
            Discussion Panel
        </div>

        </div>
  )
}
