import React, { useEffect } from 'react';
import Layout from "../components/layout"
import Plus from "../images/plus.svg"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { TweenLite } from "gsap";

import {handleMouseHoverRight, handleMouseHoverExit, handleMouseHoverLeft } from '../utils/helpers.js'

import "../scss/layout/home.scss"

const Home = ({ data, location } ) => {

  // const html = document.querySelector('html')

  useEffect(() => {
    // html.style.overflow = 'hidden'

    setTimeout(function(){ 
      let animateUp = document.getElementsByClassName('animateUp')  
      let animateLeft = document.getElementsByClassName('animateLeft') 
      let animateDown = document.getElementsByClassName('animateDown') 
      let animateRight = document.getElementsByClassName('animateRight')   
      TweenLite.to(animateUp, 0.4, {x: 0, y: 0, opacity: 1})
      TweenLite.to(animateLeft, 0.4, {x: 0, y: 0, opacity: 1})
      TweenLite.to(animateDown, 0.4, {x: 0, y: 0, opacity: 1})
      TweenLite.to(animateRight, 0.4, {x: 0, y: 0, opacity: 1})
      // html.style.overflow = 'auto'
    }, 300); 
  }, [])

  //open menu
  function openMenu(){
    var menu = document.getElementsByClassName('menu')  
    menu[0].classList.add('active')
  }

  return (
    <Layout location={location}  className="container">
    <div className="container home">
      <div className="home__header" >

        <Link to="/" className="menu__logo" onClick={e => openMenu(e)} onMouseEnter={e => handleMouseHoverLeft(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>
          <h1 >Lattimore</h1>
          <h1 >Friends</h1>
          <Plus /> 
        </Link> 
        
        <Plus 
          className="home-plus-left"
          onMouseEnter={e => handleMouseHoverLeft(e)}
          onMouseLeave={e =>handleMouseHoverExit(e)}
          onClick={e => openMenu()}          
        />
        <Plus 
          className="home-plus-right"
          onMouseEnter={e => handleMouseHoverRight(e)}
          onMouseLeave={e =>handleMouseHoverExit(e)}
          onClick={e => openMenu()}          
        />
      </div>

      <div className="home__inner">
      <div className="animateUp">
        <h2 className="home__lattimore">Lattimore</h2>
        </div>        
        <h2 className="animateLeft">Friends</h2>      
        <StaticImage      
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/home-hero.png"    
          quality={95}
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ border: "solid black" }}
          alt="Profile picture"
        />        
        <h2 className="animateRight">the agencies'</h2>
        <div className="animateDown">
          <h2 className="home__web-agency">web agency</h2>
        </div>        
      </div>
      <h3>the agencies' web agancy</h3>
    </div>
    </Layout>
  )
}

export default Home

