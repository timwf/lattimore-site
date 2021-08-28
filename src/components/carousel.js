import React, {  useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import "../scss/components/carousel.scss"
import demo from "../images/demo2.mp4"
import demoTwo from "../images/demo4.mp4"
import imgOne from "../images/slide.png"
import imgTwo from "../images/slide-3.png"
import imgThree from "../images/slide-4.png"
import imgFour from "../images/slide-5.png"
import Slide from "../components/slide"
import {handleMouseHoverRight, handleMouseHoverExit, handleMouseHoverLeft } from '../utils/helpers.js'
SwiperCore.use([Autoplay, Navigation]);

const Carousel = ({ reverse, navClass, slideClicked, handleSlideClicked }) => {
  const [numSlides, setNumSlides] = useState(2.7)
  const [spaceBetween, setSpaceBetween] = useState(27)
  let right = "." + navClass + "-right"
  let left = "." + navClass + "-left"
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function initCarousel(){
    if (window.innerWidth < 768) {
      setNumSlides(1.15)
      setSpaceBetween(20) 
    }else if (window.innerWidth > 767 && window.innerWidth < 1180){
      setNumSlides(2.4)
      setSpaceBetween(16) 
    }else{
      setNumSlides(2.7)
      setSpaceBetween(27) 
    }
  }

  useEffect(() => {
    initCarousel()
    window.addEventListener("resize", initCarousel);
    return () => {
      window.removeEventListener("resize", initCarousel);
    };
  }, [])

  return (
    <div className="carousel" >
      <div className={"what-weve-done-carousel__left-arrow " + navClass + "-left"}
      onMouseEnter={e => handleMouseHoverLeft(e)} onMouseLeave={e =>handleMouseHoverExit(e)}
      >
      </div>
      <div className={"what-weve-done-carousel__right-arrow " + navClass + "-right"}
      onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}
      >
      </div>
      <Swiper
          spaceBetween={spaceBetween}
          navigation ={{ prevEl: left, nextEl: right }}
          autoplay={{ delay: 1250, disableOnInteraction: false, reverseDirection: reverse, pauseOnMouseEnter: true}} 
          slidesPerView={numSlides }   
          speed={750}
          loop={true}
          // onSlideChange={() => }
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
              <Slide img={imgTwo} video={demo} slideClicked={slideClicked} handleSlideClicked={handleSlideClicked}/>
          </SwiperSlide>
          <SwiperSlide>
              <Slide img={imgThree} video={demoTwo} slideClicked={slideClicked} handleSlideClicked={handleSlideClicked}/>
          </SwiperSlide>
          <SwiperSlide>
              <Slide img={imgFour} video={demo} slideClicked={slideClicked} handleSlideClicked={handleSlideClicked} />
          </SwiperSlide>
          <SwiperSlide>
              <Slide img={imgOne} video={demoTwo} slideClicked={slideClicked} handleSlideClicked={handleSlideClicked}/>
          </SwiperSlide>
          <SwiperSlide>
              <Slide img={imgTwo} video={demo} slideClicked={slideClicked} handleSlideClicked={handleSlideClicked}/>
          </SwiperSlide>
        </Swiper>
    </div> 
  )
}

export default Carousel
