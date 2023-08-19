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
                <div className='msg-board'>
                    <h2 className='board-heading'>Message Board</h2>
                    <Texts/>  
                </div>
                <div className='task-board'>
                  <h2 className='board-heading'>Task List</h2> 
                  <TaskPanel/>
                </div>
                <div className='schedule-board'>
                    <h2 className='board-heading'>Schedule</h2>
                </div>
            </div>
        
      </div>
    </>
  )
}
