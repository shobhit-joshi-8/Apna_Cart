import React from 'react'
import heroImage from '../../assets/heroImage.jpg'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="relative ">
      <div>
        <img
          src={heroImage}
          alt=""
          className="w-full object-cover object-center"
        />
      </div>

      <div
        className="absolute top-[20%] sm:top-[30%] w-full text-end right-3"
        style={{ opacity: 1, transform: "none" }}
      >
        <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-500">
          Discover Your
        </h1>

        <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-500">
          Next Adventure!
        </h1>

        <p className="text-[10px] lg:text-2xl mt-2 lg:mt-5 font-semibold">
          Shop Our Latest Arrival
        </p>

        <Link to="/allproducts">
          <button className="cursor-pointer flex ml-auto mt-2 md:mt-3 text-[11px] sm:text-[18px] text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection