import React from 'react';
import {ProjectNavigation} from './ProjectNavigation' ;
import Chatt from './Chatt';
import {Sidebar} from './Sidebar' ;

export const Discussion = () => {
  return (
        <div className="project-dashboard-page vh-100">
        <Sidebar/>
        <ProjectNavigation/>
        <div className='discussion-panel' >
            <section className='chat-main'>
                <Chatt/>
            </section>
        </div>

        </div>
  )
}
