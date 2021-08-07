import React, { useState } from 'react';
import Layout from "../components/layout"
import "../scss/layout/what-we-do.scss"
import { accordionData } from '../utils/content';
import GreenArrow from "../images/green-arrow.svg"
import AccordianItem from "../components/accordian-item"



const WhatWeDo = ({ data, location }) => {

  return (
    <Layout location={location}  className="container">
      <div className="what-we-do">
        <h1 className="header-std">Services</h1>
          <div className="what-we-do__inner">
            

          
            <div className="what-we-do__left">
              <div className="what-we-do__left-wrap">
                
              {accordionData.map(({ title, tape, content }, key) => (         
                <AccordianItem title={title} tape={tape} content={content} id={key} />           
              ))}
              </div>
            </div>
            <div className="what-we-do__right" >   
            {accordionData.map(({ title, tape, content }, index) => (   
              <div className="what-we-do__right-wrap" data-id={index}>
                {content.map(({header, copy}) => (
                  <div className="what-we-do__item-content-right">
                    <div className="what-we-do__item-content-right-header">
                      <GreenArrow />
                      <h3 className="header-sub-reg">{header}</h3>
                    </div>
                    <p className="body" dangerouslySetInnerHTML={{__html: copy}}></p>
                  </div>
                ))}
              </div>              
            ))}
          </div>
        </div>
      </div> 
    </Layout>
  )
}

export default WhatWeDo