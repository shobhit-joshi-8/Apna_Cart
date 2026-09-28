import React from 'react'
import Layout from '../../components/layout/Layout'
import loginimage from '../../assets/login_page_image.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Layout>
            <div>
                <div className="relative">
                    <img
                        src={loginimage}
                        alt="Login image"
                        className="object-cover w-full object-center h-50 mt-5"
                    />

                    <div className="w-full h-50 bg-black absolute top-0 left-0 opacity-[.4]"></div>

                    <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
                        Login
                    </h2>
                </div>

                <div className="container px-5 py-14 mx-auto flex">
                    <div className="mx-auto bg-red-500 rounded-lg p-8 flex flex-col mt-8 md:mt-0 shadow-md text-white w-[500px]">
                        <h2 className="text-white text-4xl mb-5 font-medium title-font">
                            Login
                        </h2>

                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm">
                                Email
                            </label>

                            <input
                                autoComplete="off"
                                type="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                value=""
                            />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm">
                                Password
                            </label>

                            <input
                                autoComplete="off"
                                type="password"
                                name="password"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                value=""
                            />
                        </div>

                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Login
                        </button>

                        <p className="text-xs text-white mt-5">
                            Don't have an account?
                            <Link to="/Signup" className="cursor-pointer hover:text-blue-300">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login