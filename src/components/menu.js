import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import "../scss/components/menu.scss"
import {handleMouseHoverRight, handleMouseHoverExit, handleMouseHoverLeft } from '../utils/helpers.js'
import Minus from "../images/minus.svg"
import Plus from "../images/plus.svg"


import AniLink from "gatsby-plugin-transition-link/AniLink"

const Menu = () => {

  function closeMenu(){
    var menu = document.getElementsByClassName('menu')  
    menu[0].classList.remove('active')
  }


  return (
    <div className={"menu"}>

      <div className="menu__header">

        <AniLink  bg="#f1f1f1" duration={1} to="/"  >
          <div className="menu__logo" onClick={e => closeMenu(e)} onMouseEnter={e => handleMouseHoverLeft(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>
          <h1>Lattimore</h1>
          <h1>Friends</h1>
          <Plus />
          </div>


        </AniLink>


        <div className="menu__close"
          onMouseEnter={e => handleMouseHoverRight(e)}
          onMouseLeave={e =>handleMouseHoverExit(e)}
          onClick={e => closeMenu(e)}
          tabIndex={0} 
          role="button"
          onKeyDown={e => closeMenu(e)}
        >
        <Minus />
        </div>
      </div>



       <div className="menu__inner">
        <div className="menu__left">
          <StaticImage
            className="bio-avatar"
            layout="constrained"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/home-image.png"   
            placeholder="blurred"    
            quality={65}
            style={{  height: "auto", paddingBottom: "2px" }}
            imgStyle={{ height: "auto", border: "solid black" }}
            alt="home-image"
          />
          <p className="body">We’re happy to be as white-labelled as you need.</p>
        
        </div>
        <div className="menu__right">
          <div className="menu__right-top">
            <AniLink 
              cover bg="#f1f1f1" duration={1} 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}              
              activeClassName="active"
              className="menu-font" to="/what-we-do"><span> WHAT WE DO</span></AniLink>
            <AniLink 
              cover bg="#f1f1f1" duration={1}
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}     
              activeClassName="active"   
              className="menu-font" to="/what-weve-done"><span>WHAT WE’VE DONE</span> </AniLink >
            <AniLink 
            cover bg="#f1f1f1" duration={1}
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}
              activeClassName="active"
              className="menu-font" to="/insights"><span>WHAT WE THINK</span></AniLink >
            <AniLink 
            cover bg="#f1f1f1" duration={1}
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}
              activeClassName="active"
              className="menu-font" to="/who-we-are"><span>WHO WE ARE</span></AniLink >
          </div>

          <div className="menu__right-bottom">
            <AniLink 
              cover bg="#f1f1f1" duration={1} 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}
              activeClassName="active"
              className="menu-font" to="/contact"><span>CONTACT</span></AniLink>
            <AniLink 
                  cover bg="#f1f1f1" duration={1} 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}  
              activeClassName="active"      
              className="menu-font" to="/terms"><span>LEGAL</span></AniLink>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Menu
