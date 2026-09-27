import React from 'react'
import heroImage from '../../assets/heroImage.jpg'

const HeroSection = () => {
  return (
    <div className="relative">
        <div>
            <img src={heroImage} alt="Hero" className="w-full  object-cover" />
        </div>

        <div className="absolute top-[30%] left-[50%]">
            <h1 className="text-5xl font-bold text-[red]">Discover Your Next Adventure</h1>
            <p className="text-center text-2xl mt-5 font-semibold">Shop Our Latest Arrival and Unleash Your Style</p>
        </div>
    </div>
  )
}

export default HeroSection