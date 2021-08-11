import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
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


const Carousel = ({ reverse, navClass }) => {

  let right = "." + navClass + "-right"
  let left = "." + navClass + "-left"

  if (reverse) {
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
            spaceBetween={27}
            navigation ={{ prevEl: left, nextEl: right }}
            autoplay={{ delay: 1250, disableOnInteraction: false, reverseDirection: true, pauseOnMouseEnter: true}} 
            slidesPerView={2.7}   
            speed={750}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
                <Slide img={imgTwo} video={demo} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide img={imgThree} video={demoTwo} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide img={imgFour} video={demo} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide img={imgOne} video={demoTwo} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide img={imgTwo} video={demo} />
            </SwiperSlide>
          </Swiper>
      </div> 
    )
  }else{
    return(
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
            spaceBetween={27}
            navigation ={{ prevEl: left, nextEl: right }}
            autoplay={{ delay: 1250, disableOnInteraction: false, pauseOnMouseEnter: true}} 
            slidesPerView={2.7}   
            speed={750}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
                <Slide img={imgTwo} video={demoTwo} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide img={imgThree} video={demo} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide img={imgFour} video={demoTwo} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide img={imgOne} video={demo} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide img={imgTwo} video={demoTwo} />
            </SwiperSlide>
          </Swiper>
      </div> 
    )
  }

}

export default Carousel
