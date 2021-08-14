import React from 'react';
import GreenArrow from "../images/green-arrow.svg"
import {handleMouseHoverRight, handleMouseHoverExit } from '../utils/helpers.js'

const ScrollingQuote = ({ title, quote, tape }) => {

  function scroll(e, tape){
    console.log('scroll it');
    console.log(e);
    console.log();
    let hWidth = e.target.offsetWidth 
    e.target.style.transition = `${hWidth/300}s`
    e.target.style.transform = `translate(-${hWidth + "px"},0px)`
    handleMouseHoverRight(e, tape)
  }

  function removeScroll(e){
    console.log('scroll it stop!');
    e.target.style.transition = `0s`
    e.target.style.transform = `translate(0px,0px)`
    handleMouseHoverExit(e)
  }


  return (
    <div className="scrolling-quotes__item">     
      <div className="scrolling-quotes__item-left">         
        <h2 className="header-upper-large">{ title }</h2>
        <GreenArrow />
      </div>    
      <div className="scrolling-quotes__item-right">  

      <div className="scrolling-quotes__item-right-inner">  
        < h2 
          onMouseEnter={e => scroll(e, tape)}
          onMouseLeave={e => removeScroll(e)}
        
        > "{ quote }"  </h2>
      </div>  

       

      </div>  
    </div> 
  )
}

export default ScrollingQuote