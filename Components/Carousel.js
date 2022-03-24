import React, { useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

//import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Autoplay, } from "swiper"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Autoplay,])

export default function Carousel({images, text}) {

  return (
   
  <Swiper
  navigation={{
    prevEl: '.prev',
    nextEl: '.next',
  }}
   className="flex justify-center items-center relative text-white text-2xl font-semibold min-h-[26rem] w-full">
       <div className="prev absolute top-1/2 left-8 z-10">
          <span className="text-base">previous</span> 
       </div>
       <div className="next absolute top-1/2 right-8 z-10">
          <span  className="text-base">next</span> 
       </div>
       <div className="absolute w-full bg-black py-4 z-10 top-0 px-4">
      {text}
       </div>
       {
           images.map((image, i)=>
            (<SwiperSlide key={i} className={`${image} bg-cover bg-bottom min-h-[24rem] `}>

            </SwiperSlide>)
           )
       }
  </Swiper>

  )
}
