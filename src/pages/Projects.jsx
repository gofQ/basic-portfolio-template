import React from 'react'
import ProjectItem from '../components/Project/ProjectItem'
import { projects } from '../data'

const Projects = () => {
  
  return (
      <div id="mt" className="mt-20">
        <p id='projectHeader' className='text-[1.953rem] pb-4'>My Projects</p>
        <div id='projectGrid' className="grid grid-cols-3 gap-10">
         {
          projects.map((item,index)=>{
            return(
              <ProjectItem key={index}  data={item} />
            )
          })
         }
        </div>
      </div>
  )
}

export default Projects