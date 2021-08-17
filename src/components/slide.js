import React from 'react';
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import "../scss/components/carousel.scss"
import { disableScroll, enableScroll } from '../utils/helpers.js'
SwiperCore.use([Autoplay, Navigation]);

const Slide = ({ img, video, handleSlideClicked }) => {

  function slideClick(e, video){
    handleSlideClicked(video)
    let lightbox = document.getElementsByClassName('carousel__lightbox')  
    let lightvideo = document.getElementsByClassName('carousel__lightbox-video')  
    let lightvideoWrap = document.getElementsByClassName('carousel__lightbox-video-wrap')  
    lightbox[0].classList.add('active')
    lightvideo[0].src = video;
    lightvideoWrap[0].play()
    disableScroll() 

    lightbox[0].addEventListener('click', function (event) { 
      lightbox[0].classList.remove('active') 
      lightvideoWrap[0].pause()
      lightvideoWrap[0].currentTime = 0
      enableScroll()
    }, false);    
  }


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
    <div className="carousel__slide" onClick={e => slideClick(e, video)} >
      <div className="carousel__slide-header">   
        <div className="carousel__slide-header-dot"></div>       
        <div className="carousel__slide-header-dot"></div>   
        <div className="carousel__slide-header-dot"></div>            
      </div>
      <div className="carousel__slide-inner">
        <video loop  muted poster={img}
          onMouseOver={e => videoMouseOver(e)} 
          onMouseOut={e => videoMouseOut(e)}>
          <source src={video} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
        <img src={img}></img>
      </div>
    </div> 
  )
}

export default Slide
