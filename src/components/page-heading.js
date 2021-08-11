import React from 'react';
import "../scss/components/page-heading.scss"


const PageHeading = ({ title }) => {
  return (
    <div className="page-heading">         
        <h1 className="header-std">{ title }</h1>
    </div> 
  )
}

export default PageHeading
