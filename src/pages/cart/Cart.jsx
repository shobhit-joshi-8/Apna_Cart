import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <Layout>
            <div className="w-[90%] mx-auto mt-[80px]">
                <div className="container mx-auto mt-10">
                    <div className="flex flex-col lg:flex-row shadow-md my-10">
                        <div className="w-full lg:w-3/4 bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">
                                    Shopping Cart
                                </h1>

                                <h2 className="font-semibold text-2xl uppercase">
                                    3 Items
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

                            {/* Product 1 */}
                            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <img
                                            className="h-24"
                                            src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
                                            alt=""
                                        />
                                    </div>

                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">
                                            Essence Mascara Lash Princess
                                        </span>

                                        <span className="text-red-500 text-xs">
                                            beauty
                                        </span>

                                        <a
                                            href="#"
                                            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                        >
                                            Remove
                                        </a>
                                    </div>
                                </div>

                                <div className="flex justify-center w-1/5">
                                    <button className="border px-2 py-1">
                                        -
                                    </button>

                                    <button className="px-2">
                                        1
                                    </button>

                                    <button className="border px-2 py-1">
                                        +
                                    </button>
                                </div>

                                <span className="text-center w-1/5 font-semibold text-sm">
                                    9.99 Rs.
                                </span>

                                <span className="text-center w-1/5 font-semibold text-sm">
                                    9.99 Rs.
                                </span>
                            </div>

                            {/* Product 2 */}
                            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <img
                                            className="h-24"
                                            src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
                                            alt=""
                                        />
                                    </div>

                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">
                                            Eyeshadow Palette with Mirror
                                        </span>

                                        <span className="text-red-500 text-xs">
                                            beauty
                                        </span>

                                        <a
                                            href="#"
                                            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                        >
                                            Remove
                                        </a>
                                    </div>
                                </div>

                                <div className="flex justify-center w-1/5">
                                    <button className="border px-2 py-1">
                                        -
                                    </button>

                                    <button className="px-2">
                                        1
                                    </button>

                                    <button className="border px-2 py-1">
                                        +
                                    </button>
                                </div>

                                <span className="text-center w-1/5 font-semibold text-sm">
                                    19.99 Rs.
                                </span>

                                <span className="text-center w-1/5 font-semibold text-sm">
                                    19.99 Rs.
                                </span>
                            </div>

                            {/* Product 3 */}
                            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <img
                                            className="h-24"
                                            src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
                                            alt=""
                                        />
                                    </div>

                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">
                                            Annibale Colombo Bed
                                        </span>

                                        <span className="text-red-500 text-xs">
                                            furniture
                                        </span>

                                        <a
                                            href="#"
                                            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                        >
                                            Remove
                                        </a>
                                    </div>
                                </div>

                                <div className="flex justify-center w-1/5">
                                    <button className="border px-2 py-1">
                                        -
                                    </button>

                                    <button className="px-2">
                                        2
                                    </button>

                                    <button className="border px-2 py-1">
                                        +
                                    </button>
                                </div>

                                <span className="text-center w-1/5 font-semibold text-sm">
                                    1899.99 Rs.
                                </span>

                                <span className="text-center w-1/5 font-semibold text-sm">
                                    3799.98 Rs.
                                </span>
                            </div>

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
                                    Items 0
                                </span>

                                <span className="font-semibold text-sm">
                                    3829.96
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
                                    className="p-2 text-sm w-full"
                                    value=""
                                    readOnly
                                />

                                <span>use DISCOUNT10</span>

                                <hr />
                            </div>

                            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                                Apply
                            </button>

                            {/* Total */}
                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>

                                    <span>3839.96</span>
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
        </Layout>
    );
};

export default Cart;