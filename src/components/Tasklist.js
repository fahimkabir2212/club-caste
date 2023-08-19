import React from 'react'
import {ProjectNavigation} from './ProjectNavigation' ;
import {Sidebar} from './Sidebar' ;
import TaskPanel from './TaskPanel' ;

export const Tasklist = () => {
  return (
    <div className="project-dashboard-page vh-100">
        <Sidebar/>
        <ProjectNavigation/>
        <TaskPanel/>
        </div>
  )
}
