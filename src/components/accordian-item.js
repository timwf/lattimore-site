import React, { useState, useEffect } from 'react';
import ArrowDown from "../images/arrow-down.svg"
import {handleMouseHoverRight, handleMouseHoverExit } from '../utils/helpers.js'
import GreenArrow from "../images/green-arrow.svg"


const AccordianItem = ({ title, tape, content, id }) => {
  const [isActive, setIsActive] = useState(false);

  function desktopUpdate(id, e){ 
    let items = document.getElementsByClassName("what-we-do__right-wrap");

    for(var i = 0; i < items.length; i++)
    {
      let itemId = parseInt(items[i].getAttribute('data-id'))


      if(id === itemId){

        if (items[i].classList.contains('active')) {
          items[i].classList.remove("active")
          setTimeout(function(){ 
            items[i].classList.add("active")
           }, 200);          
          return;
        }

        items[i].classList.add("active")        

        if (window.innerWidth > 1024) {
          window.scroll({top: 0, left: 0, behavior: 'smooth'});
          console.log('bigggger1');
        }     
   
      }  
      else{
        items[i].classList.remove("active")
      }   
    }
  }

  useEffect(() => {    
    setTimeout(function(){ 
      let items = document.getElementsByClassName("what-we-do__right-wrap");
      items[0].classList.add("active")
     }, 200);
  },[]);

  return (
    <div className="what-we-do__item" data-id={id}>
      <div 
        className={isActive ? 'what-we-do__item-header active-acc' : 'what-we-do__item-header'}    
        onClick={(event) => { setIsActive(!isActive); desktopUpdate(id, event);}}
        onMouseEnter={e => handleMouseHoverRight(e, tape)}
        onMouseLeave={e =>handleMouseHoverExit(e)}        
        >
        <h2 className="header-sub">{title}</h2>
        <ArrowDown />
      </div>
    <div className={isActive ? 'what-we-do__item-content-wrap active-acc' : 'what-we-do__item-content-wrap'}>
      {content.map(({header, copy}) => (
        <div className="what-we-do__item-content">
          <div className="what-we-do__item-content-header">
           <GreenArrow /> 
            <h3 className="header-sub-reg">{header}</h3>
          </div>
          <p className="body" dangerouslySetInnerHTML={{__html: copy}}></p>
        </div>
      ))}
    </div>
  </div> 
  )
}

export default AccordianItem
