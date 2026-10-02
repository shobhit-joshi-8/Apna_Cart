import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = ({ cart, handleItemIncrement, handleItemDecrement, handleRemove, getTotalAmount, finalAmount, applyPromoCode, promoCode, setPromoCode }) => {

   
    return (
        <div>
            <div className="w-[90%] mx-auto mt-20">
                <div className="container mx-auto mt-10">
                    <div className="flex flex-col lg:flex-row shadow-md my-10">
                        <div className="w-full lg:w-3/4 bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">
                                    Shopping Cart
                                </h1>

                                <h2 className="font-semibold text-2xl uppercase">
                                    {cart?.length} Items
                                </h2>
                            </div>

                            <div className="flex mt-10 mb-5">
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                                    Product Details
                                </h3>

                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                                    Quantity
                                </h3>

                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                                    Price
                                </h3>

                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                                    Total
                                </h3>
                            </div>

                            {cart?.map((item) => (
                                <div key={item.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <img
                                                className="h-24"
                                                src={item.thumbnail}
                                                alt=""
                                            />
                                        </div>

                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-sm">
                                                {item.title}    
                                            </span>

                                            <span className="text-red-500 text-xs">
                                                {item.category}
                                            </span>

                                            <a
                                                href="#"
                                                className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                                onClick={() => handleRemove(item.id)}
                                            >
                                                Remove
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex justify-center w-1/5">
                                        <button className="border px-2 py-1" onClick={() => handleItemDecrement(item.id)}>
                                            -
                                        </button>

                                        <button className="px-2">
                                            {item.quantity}
                                        </button>

                                        <button className="border px-2 py-1" onClick={() => handleItemIncrement(item.id)}>
                                            +
                                        </button>
                                    </div>

                                    <span className="text-center w-1/5 font-semibold text-sm">
                                        {item.price} Rs.
                                    </span>

                                    <span className="text-center w-1/5 font-semibold text-sm">
                                        {(item.price * item.quantity).toFixed(2)} Rs.
                                    </span>
                                </div>
                            ))}

                          
                            {/* Continue Shopping */}
                            <p className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer">
                                <Link to="/allProducts" className="flex items-center">
                                    <FaArrowLeft
                                        className="mr-2 text-indigo-600"
                                        size={16}
                                    />

                                    Continue Shopping
                                </Link>
                            </p>
                        </div>

                        {/* Order Summary */}
                        <div
                            id="summary"
                            className="w-full lg:w-1/4 px-8 py-10 bg-[#f6f6f6]"
                        >
                            <h1 className="font-semibold text-2xl border-b pb-8">
                                Order Summary
                            </h1>

                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">
                                    Items {cart?.length}
                                </span>

                                <span className="font-semibold text-sm">
                                    {getTotalAmount().toFixed(2)} Rs.
                                </span>
                            </div>

                            {/* Shipping */}
                            <div>
                                <label className="font-medium inline-block mb-3 text-sm uppercase">
                                    Shipping
                                </label>

                                <select className="block p-2 text-gray-600 w-full text-sm">
                                    <option>
                                        Standard shipping - 10.00 Rs
                                    </option>
                                </select>
                            </div>

                            {/* Promo Code */}
                            <div className="py-10">
                                <label
                                    htmlFor="promo"
                                    className="font-semibold inline-block mb-3 text-sm uppercase"
                                >
                                    Promo Code
                                </label>

                                <input
                                    type="text"
                                    id="promo"
                                    placeholder="Enter your code"
                                    className="p-2 text-sm w-full mb-5"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                />

                                <span>use DISCOUNT10</span>

                            </div>

                            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" onClick={applyPromoCode}>
                                Apply
                            </button>

                            {/* Total */}
                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>

                                    <span>{finalAmount().toFixed(2)} Rs.</span>
                                </div>

                                <button
                                    type="button"
                                    className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg"
                                >
                                    <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
                                        Checkout
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    position: "fixed",
                    zIndex: 9999,
                    inset: "16px",
                    pointerEvents: "none",
                }}
            ></div>
        </div>
    );
};

export default Cart;