import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { delay, motion } from "framer-motion"

const Testimonial = () => {
  return (
    <motion.div 
    initial={{opacity:0.3, y:100}}
    transition={{duration:2}}
    whileInView={{opacity:1,y: 0}}
    viewport={{once:true}}
    
    className='flex flex-col items-center justify-center my-20 py-12'>

<h1 className='text-3xl sm:text-4xl font-semibond'>Customer Testimonials</h1>

<p className='text-gray-500 mb-12'>What Our Users Are Saying</p>

<div className='flex flex-wrap gap-6'>
    {testimonialsData.map((tesimonail, index)=>(
        <div key={index} 
        className='bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer 
        hover:scale-[1.02] transition-all'>
            <div className='flex flex-col items-center '>
                <img src={tesimonail.image} alt="" className='rounded-full w-14' />
                <h2 className='text-xl font-semibold mt-3'>{tesimonail.name}</h2>
                <p className='text-gray-500 mb-4'>{tesimonail.role}</p>
                <div className='flex mb-4'>
                    {Array(tesimonail.stars).fill().map((item,index)=>(
                        <img key={index} src={assets.rating_star} />
                    ))}
                    </div>
                    <p className='text-center text-sm text-gray-600'>{tesimonail.text}</p>
                </div>
            </div>
    ))}
</div>
      
    </motion.div>
  )
}

export default Testimonial
