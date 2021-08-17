
import "../scss/layout/what-weve-done.scss"
import "../scss/components/scrolling-quotes.scss"
import "../scss/components/project-list.scss"
import React, { useState, useEffect } from 'react';
import Layout from "../components/layout"
import PageHeading from "../components/page-heading"
import ScrollingQuote from "../components/scrolling-item-quote"
import ProjectListItem from "../components/project-list-item"
import Carousel from "../components/carousel"
import demoTwo from "../images/demo2.mp4"
import Minus from "../images/minus.svg"
import {handleMouseHoverRight, handleMouseHoverExit, handleMouseHoverLeft } from '../utils/helpers.js'
import ArrowDown from "../images/arrow-down.svg"
import { projectListItems } from '../utils/content';
import { StaticImage } from "gatsby-plugin-image"



const WhatWeveDone = ({ location }) => {
  const [slideClicked, setSlideClicked] = useState(demoTwo);

  useEffect(() => {    
    let cursor  = document.getElementsByClassName('mouse-cursor')  
    console.log('check');

    for (var i = 0; i < document.getElementsByClassName('js-move-image').length ; i++) {
      console.log('checking');
      cursor[0].append(document.getElementsByClassName('js-move-image')[i])              
    }  
  },[]);


  function projectListOver(e, index){
    // let cursor  = document.getElementsByClassName('mouse-cursor')  

    // console.log(index);

    // for (var i = 0; i < document.getElementsByClassName('js-move-image').length ; i++) {

    //   // if (document.getElementsByClassName('js-move-image')[i].childNodes[i].getAttribute("data-id") == index) {
    //   //   document.getElementsByClassName('js-move-image')[i].style.opacity = 1
    //   // }else{
    //   //   document.getElementsByClassName('js-move-image')[i].style.opacity = 0
    //   // }

     
    // } 
  }

  function projectListOut(e, index){
    // let cursor  = document.getElementsByClassName('mouse-cursor')  
    // console.log(index);
  }



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

        <div className="scrolling-quotes__quotes">  
          <ScrollingQuote title="agency tk"  quote="Agency TK Quote stops scrolling. This is another options to see the full quote. This is a nice quote from Noise 13 saying how cool it is to work with us" tape="Agent TK Tape"/>
          <ScrollingQuote title="noise 13" quote="Noise 13 Quote stops scrolling. A short one" tape="Noise 13 Tape"/>
          <ScrollingQuote title="butter" quote="Butter Quote stops scrolling. This is another options to see the full quote. This is a nice quote from Noise 13 saying how cool it is to work with us" tape="Butter Tape"/>
          <ScrollingQuote title="edition" quote="Edition Quote stops scrolling. This is another options to see the full quote. This is a nice quote from Noise 13 saying how cool it is to work with us" tape="Edition Tape"/>
        </div>
      </div>

      <div className="project-list" >
        <div className="project-list__heading">                  
          <h2 className="header-std">We also have a list of more cool projects we’ve worked on <span><ArrowDown /> </span></h2>
        </div>

        <div className="project-list__wrap" onMouseOut={e => projectListOut(e) } >  
          <div className="project-list__inner">
            {projectListItems.map(({client, project, img}, index) => ( 
              <div  onMouseOver={e => projectListOver(e, index)}        >    

        {img ? (
              
              <StaticImage      
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/slide-3.png"    
              quality={95}
              className="js-move-image"
              data-id={index}
              style={{ position: "absolute",  width: "150px", display: "none" }}
              // imgStyle={{ border: "solid black" }}
              alt="Profile picture"
            />    
              ) : (
                <StaticImage      
                formats={["AUTO", "WEBP", "AVIF"]}
                src="../images/slide-4.png"    
                quality={95}
                style={{ position: "absolute",  width: "150px", display: "none" }}
                className="js-move-image"
                alt="Profile picture"
              />    
              )}


              <ProjectListItem  client={client} project={project} img={img} />  
              </div>  
            ))}            
          </div>
        </div>

        <div className="project-list__footer">                  
          <h2 className="header-std">Still not convinced? Check out our <a                 onMouseEnter={e => handleMouseHoverRight(e)}
                onMouseLeave={e =>handleMouseHoverExit(e)}>blog</a> or <a                onMouseEnter={e => handleMouseHoverRight(e)}
                onMouseLeave={e =>handleMouseHoverExit(e)}>contact</a> us for a chat! </h2>
        </div>


      </div>




    </Layout>
  )
}

export default WhatWeveDone