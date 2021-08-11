import React from 'react';
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import "../scss/components/carousel.scss"


SwiperCore.use([Autoplay, Navigation]);


const Slide = ({ img, video }) => {


  const videoMouseOver = (e) => {
    if (e.target.play()) {
      e.target.play()
    }
  }

  const videoMouseOut = (e) => {
    if (e.target.play()) {
      e.target.pause()
      e.target.currentTime = 0;
    }
  }

  return (
    <div className="carousel__slide">
      <div className="carousel__slide-header">   
        <div className="carousel__slide-header-dot"></div>       
        <div className="carousel__slide-header-dot"></div>   
        <div className="carousel__slide-header-dot"></div>            
      </div>
      <div className="carousel__slide-inner">
      <video loop  muted
        // onMouseOver={event => event.target.play()}
        onMouseOver={e => videoMouseOver(e)} 
        onMouseOut={e => videoMouseOut(e)} 
      
      >
          <source src={video} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
      <img src={img}></img>

      {/* <StaticImage      
        formats={["AUTO", "WEBP", "AVIF"]}
        src={img}    
        quality={95}
        style={{ height: "100%", width: "100%" }}
        alt=""
      />                      */}
      </div>
    </div> 

  )
}

export default Slide
