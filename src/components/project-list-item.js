import React, {  useEffect } from 'react';


const ProjectListItem = ({ client, project, img }) => {


  return (
    <div className="project-list__item">  
      <p>{client}</p>
      <p>{project}</p>
    </div> 
  )
}

export default ProjectListItem