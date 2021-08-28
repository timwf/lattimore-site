import React, {  useEffect, useState } from 'react';
import GreenArrow from "../images/green-arrow.svg"
import {handleMouseHoverRight, handleMouseHoverExit } from '../utils/helpers.js'
import Plus from "../images/plus.svg"

const ScrollingQuote = ({ title, quote, tape }) => {

  function initScroller() {
    setTimeout(function(){ 
      let items = document.getElementsByClassName("scrolling-quotes__item");
      let windowWidth = window.innerWidth
      let itemsHidden = document.getElementsByClassName("scrolling-quotes__item-hidden");

 
      if (window.innerWidth < 1180) {

        for(var i = 0; i < items.length; i++){
          let scrollers = items[i].querySelectorAll(".js-scroller")[0]
          let text = scrollers.innerHTML
          scrollers.innerHTML += text += text 

          let hWidth = scrollers.offsetWidth 
          function runScroll(){
            scrollers.style.transition = `${hWidth/50}s`
            scrollers.style.transform = `translate(-${hWidth + "px"},0px)`   

            setTimeout(function(){ 
              scrollers.style.transition = `0s`
              scrollers.style.transform = `translate(0px,0px)` 
             }, hWidth * 40);
          }
          runScroll()
        }
      }
  
      for(var i = 0; i < items.length; i++){
        let leftSize = windowWidth -  items[i].querySelectorAll(".scrolling-quotes__item-left")[0].offsetWidth 
        if (windowWidth < 768) {
          itemsHidden[i].style.width = `${leftSize - 17}px`
        }else{
          itemsHidden[i].style.width = `${leftSize - 80}px`
        }        
      }
     }, 500);  
  }

  function reload(){
    window.location.reload()
  }

  useEffect(() => {
    initScroller()
    window.addEventListener("resize", reload);
    return () => {
      window.removeEventListener("resize", reload);
    };
  },[])


  function showHidden(e){
    e.currentTarget.classList.add('hidden')   

    for (var i = 0; i < e.currentTarget.childNodes.length; i++) {
      if (e.currentTarget.childNodes[i].className == "scrolling-quotes__item-hidden") {
        let hiddenHeight = e.currentTarget.childNodes[i].offsetHeight
        e.currentTarget.style.height = `${hiddenHeight}px`
        e.currentTarget.childNodes[i].classList.add('active');        
        break;
      }        
    }
  }

  function scroll(e, tape){
    let hWidth = e.target.offsetWidth 
    e.target.style.transition = `${hWidth/300}s`
    e.target.style.transform = `translate(-${hWidth + "px"},0px)`
    handleMouseHoverRight(e, tape)
  }

  function removeScroll(e){
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
        <div className="scrolling-quotes__item-right-inner" onClick={e => showHidden(e)}>  
          < h2 className="js-scroller" onMouseEnter={e => scroll(e, tape)} onMouseLeave={e => removeScroll(e)}> "{ quote }"  </h2>
          <div className="scrolling-quotes__item-hidden">
            <p>"{ quote }"</p>
            <h4 onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e => handleMouseHoverExit(e)}>Read More <span><Plus /></span></h4>
          </div>
        </div>  
      </div>  
    </div> 
  )
}

export default ScrollingQuote