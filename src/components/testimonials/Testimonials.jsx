import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../image/avatar1.jpg"
import AVTR2 from "../../image/avatar2.jpg"
import AVTR3 from "../../image/avatar3.jpg"
import AVTR4 from "../../image/avatar4.jpg"


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Inna Boiko",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non illo magni hic, repudiandae labore corrupti esse aspernatur nulla ab aut rerum possimus numquam, quam, dolore vero id ullam rem!"
  },
  {
    avatar: AVTR2,
    name: "Inna Boiko",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non illo magni hic, repudiandae labore corrupti esse aspernatur nulla ab aut rerum possimus numquam, quam, dolore vero id ullam rem!"
  },
  {
    avatar: AVTR3,
    name: "Inna Boiko",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non illo magni hic, repudiandae labore corrupti esse aspernatur nulla ab aut rerum possimus numquam, quam, dolore vero id ullam rem!"
  },
  {
    avatar: AVTR4,
    name: "Inna Boiko",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non illo magni hic, repudiandae labore corrupti esse aspernatur nulla ab aut rerum possimus numquam, quam, dolore vero id ullam rem!"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
       // install Swiper modules
       modules={[ Pagination ]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="Avatar" />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials