
import "../scss/layout/what-weve-done.scss"
import * as React from 'react'
import Layout from "../components/layout"
import PageHeading from "../components/page-heading"
import Carousel from "../components/carousel"


const WhatWeveDone = ({ location }) => {
  return (
    <Layout location={location}  className="container">
      <PageHeading title="Here’s what we’ve been up to lately." />
      <div className="what-weve-done-carousel">   
        <div className="what-weve-done-carousel__inner">      
           <Carousel navClass="top" />
           <Carousel reverse navClass="middle" />
           <Carousel navClass="bottom" />
        </div>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default WhatWeveDone