import React from 'react'
import { FaShippingFast } from 'react-icons/fa'

const Service = () => {
  return (
    <div className="container mx-auto px-5 flex py-11 gap-10 items-center justify-center flex-wrap">
        <div className="border bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-55 hover:scale-110 transition-transform transition-duration-500" >
            <FaShippingFast />
            <p>Free Shipping</p>
        </div>

        <div className="border bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-55 hover:scale-110 transition-transform transition-duration-500">
            <FaShippingFast />
            <p>Authentic Product</p>
        </div>

        <div className="border bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-55 hover:scale-110 transition-transform transition-duration-500">
            <FaShippingFast />
            <p>Easy Returns</p>
        </div>


        <div className="border bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-55 hover:scale-110 transition-transform transition-duration-500">
            <FaShippingFast />
            <p>Secure Payment</p>
        </div>

    </div>
  )
}

export default Service