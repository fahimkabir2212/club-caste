import React from 'react'
import {ProjectNavigation} from './ProjectNavigation' ;

export const Tasklist = () => {
  return (
    <div className="project-dashboard-page vh-100">
        <div className='sidebar'>Sidebar</div>
        <ProjectNavigation/>
        <div className='discussion-panel' >
            <section className='chat-main'>
                
            </section>
        </div>

        </div>
  )
}
