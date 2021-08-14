
import "../scss/layout/what-weve-done.scss"
import "../scss/components/scrolling-quotes.scss"
import React, { useState } from 'react';
import Layout from "../components/layout"
import PageHeading from "../components/page-heading"
import ScrollingQuote from "../components/scrolling-item-quote"
import Carousel from "../components/carousel"
import demoTwo from "../images/demo2.mp4"
import Minus from "../images/minus.svg"
import {handleMouseHoverRight, handleMouseHoverExit, handleMouseHoverLeft } from '../utils/helpers.js'
import ArrowDown from "../images/arrow-down.svg"


const WhatWeveDone = ({ location }) => {
  const [slideClicked, setSlideClicked] = useState(demoTwo);

  const handleSlideClicked = (video) => {
    setSlideClicked(video)
  };

  return (
    <Layout location={location}  className="container">
      <PageHeading title="Here’s what we’ve been up to lately." />
      <div className="what-weve-done-carousel"> 
        <div className="carousel__lightbox">
          <div className="carousel__slide">
            <div className="carousel__lightbox-close"
                onMouseEnter={e => handleMouseHoverRight(e)}
                onMouseLeave={e =>handleMouseHoverExit(e)} >
              <Minus/>
            </div>      
            <div className="carousel__slide-header">   
              <div className="carousel__slide-header-dot"></div>       
              <div className="carousel__slide-header-dot"></div>   
              <div className="carousel__slide-header-dot"></div>            
            </div>
            <div className="carousel__slide-inner">
              <video loop  muted  className="carousel__lightbox-video-wrap">
                <source src={slideClicked} className="carousel__lightbox-video" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
              </video>  
            </div>
            <div className="carousel__lightbox-credits">
              <p className="body">Galvin Restaurants @&nbsp; 
              <a href="" 
                onMouseEnter={e => handleMouseHoverRight(e)}
                onMouseLeave={e =>handleMouseHoverExit(e)}
              >galvinrestaurants.com </a>
              </p>
              <p className="body">Design by&nbsp;
              <a href="" 
                onMouseEnter={e => handleMouseHoverRight(e)}
                onMouseLeave={e =>handleMouseHoverExit(e)}
              >Studio </a>
              </p>
     
            </div> 
          </div>       
        </div>  
        <div className="what-weve-done-carousel__inner">      
           <Carousel navClass="top" slideClicked={slideClicked} handleSlideClicked={handleSlideClicked}/>
           <Carousel reverse navClass="middle" slideClicked={slideClicked} handleSlideClicked={handleSlideClicked} />
           <Carousel navClass="bottom" slideClicked={slideClicked} handleSlideClicked={handleSlideClicked} />
        </div>
      </div>

      
      
      
      <div className="scrolling-quotes">
        <div className="scrolling-quotes__heading">                  
          <h2 className="header-std">But don’t take our word for it: check out why creative agencies like to work with us <span><ArrowDown /> </span></h2>
        </div>

        <div className="scrolling-quotes__quotes"  >                  

          <ScrollingQuote title="agency tk"  quote="Agency TK Quote stops scrolling. This is another options to see the full quote. This is a nice quote from Noise 13 saying how cool it is to work with us" tape="Agent TK Tape"/>
          <ScrollingQuote title="noise 13" quote="Noise 13 Quote stops scrolling. A short one" tape="Noise 13 Tape"/>
          <ScrollingQuote title="butter" quote="Butter Quote stops scrolling. This is another options to see the full quote. This is a nice quote from Noise 13 saying how cool it is to work with us" tape="Butter Tape"/>
          <ScrollingQuote title="edition" quote="Edition Quote stops scrolling. This is another options to see the full quote. This is a nice quote from Noise 13 saying how cool it is to work with us" tape="Edition Tape"/>
        </div>


        

      </div>

    </Layout>
  )
}

export default WhatWeveDone