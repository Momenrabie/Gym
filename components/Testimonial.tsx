"use client"
import Image from "next/image"
import { FaQuoteLeft } from "react-icons/fa6"


import { Swiper,SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import 'swiper/css'
import 'swiper/css/pagination'
import  img1 from "@/public/assets/assets/img/testimonial/lucy.jpg"
import  img2 from "@/public/assets/assets/img/testimonial/michael.jpg"
import  img3 from "@/public/assets/assets/img/testimonial/maria.jpg"



const testimonialData=[
  {
    img:img1,
    message:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, sequi!',
    name:'Lucy Anthony' 
    },
    {
      img:img2,
      message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, sequi!',
      name:'Michael Smith' 
      },
      {
        img:img3,
        message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, sequi!',
        name:'Maria Garcia' 
        },
        {
          img:img1,
          message:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, sequi!',
          name:'Lucy Anthony' 
          },
          {
            img:img2,
            message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, sequi!',
            name:'Michael Smith' 
            },
            {
              img:img3,
              message:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, sequi!',
              name:'Maria Garcia' 
              },
]

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

const Testimonial = () => {
  return (
    <section className='py-12 xl:py-28' id='testimonial'>
      <div className="container mx-auto">
        <motion.h2
        variants={fadeIn('up',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false , amount:0.2}}
        className="h2 text-center">Our Testimonial</motion.h2>
         <motion.div
         variants={fadeIn('up',0.6)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false , amount:0.2}}
         >
          <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable:true
          }}
          breakpoints={{
            768:{
              slidesPerView:2,
              spaceBetween:30,
            },
            1024:{
              slidesPerView:3,
              spaceBetween:30,
            }
          }}
          className="h-[320px]">
            {testimonialData.map((person,index)=>{
              return <SwiperSlide key={index} className="h-full">
                <div className="flex flex-col justify-center items-center gap-6
                text-center h-full">
                  <Image src={person.img} width={90} height={90} alt=""
                  className="rounded-full border-w border-accent"/>
                  <div className="flex flex-col justify-center items-center">
                    <FaQuoteLeft className="text-2xl text-gray-300"/>
                    <p className="max-w-[380px] mb-4">{person.message}</p>
                    <span className="text-2xl text-accent">{person.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
         </motion.div>
      </div>
      
      </section>
  )
}

export default Testimonial