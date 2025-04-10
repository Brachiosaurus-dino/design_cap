import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
              <div className=" text-center " >

                <img className="  rounded-md scale-100 transition-all duration-300 object-cover object-position-[50%_50%] " src="/caps_images/hop.jpg" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold font-roboto">
                    Discover Unique Cap Styles


                </div>
                <div className="mt-40 absolute inset-0 flex items-center justify-center text-white font-light  text-2xl font-roboto">
                    Discover our premium selection of bespoke caps designed for both fashion and function,
                    <br />
                    crafted to reflect your individualit
                </div>

                <div className="absolute top-0 left-0 text-start mt-10">

                    <div className="container mx-auto fixed ">


                        <nav className="bg-stone-300 fixed z-10 top-10 left-70 right-70  rounded-4xl  dark:border-gray-600">
                            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                                <a href="#" className="flex p-0 items-start justify-start space-x-3 rtl:space-x-reverse">
                                    <img src="/caps_images/9ed5e315-af6c-47d2-8f0f-ca7d3f12e044.png" className="h-20" alt="Flowbite Logo" />
                                   
                                    <span className="self-center font-bold text-2xl drop-shadow-sm whitespace-nowrap font-roboto dark:text-black">Topperz</span>
                                    
                                </a>
                                <div className="flex md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                                    <div className="justify-start hidden  md:flex md:w-auto " id="navbar-sticky">
                                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    ">
                                            <li>
                                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm font-roboto hover:bg-gray-100 md:hover:bg-transparent  md:p-0   dark:hover:text-white md:dark:hover:bg-transparent   hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Login</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-3 font-roboto text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Registration</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                        <span className="sr-only">Open main menu</span>
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
                                        <li>
                                            <Link to="/">
                                            <span href="#" className="block py-2 px-3  font-light font-roboto  md:p-0  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" aria-current="page">Home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-3  font-light font-roboto  md:p-0  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">About</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-3  font-light font-roboto  md:p-0  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Services</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-3  font-light font-roboto  md:p-0  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>



                    </div>


                </div>





            </div>
        </div>
    )
}

export default Navbar

