 "use client"
import React from 'react'
import SignInbutton from './SignInButton';
import { useState } from 'react';

const Navbar = () => {
    const[isclick, setisclick]= useState(false);
    const toggleNavbar=() =>{
        setisclick(!isclick)
    }
  return (
    <>
    <nav className=" bg-black padding 0 ">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-16 ">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-white">
                            EventEase
                        </a>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="ml-4 flex items-center space-x-4">
                        
                        <a href="/" className=" text-white hover:bg-white hover:text-black rounded-lg p-2">
                            Home
                        </a>
                        <a href="/" className=" text-white hover:bg-white hover:text-black rounded-lg p-2">
                            EventList
                        </a>
                        
                        <a href="/" className=" text-white hover:bg-white hover:text-black rounded-lg p-2">
                            AddEvent
                        </a>
                        <p  className="   block ">
                            <SignInbutton/>
                        </p>
                    </div>
                </div>
                <div className="md:hidden flex item-center">
                    <button className="inline-flex item-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
                        {isclick ? (
                        <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                            />

                        </svg>

                        ):(
                            <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                                <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M4 6h16M4 12h16m-7 6h7"
                                 />

                            </svg>
                           
                        )}

                    </button>
                </div>
            </div>
        </div>
        {isclick && (
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/" className=" text-white block hover:bg-white hover:text-black rounded-lg p-2">
                            Home
                        </a>
                        <a href="/" className=" text-white block hover:bg-white hover:text-black rounded-lg p-2">
                            EventList
                        </a>
                        
                        <a href="/" className=" text-white block hover:bg-white hover:text-black rounded-lg p-2">
                            AddEvent
                        </a>
                        <p  className="   block ">
                            <SignInbutton/>
                        </p>
                </div>
            </div>

        )}

        
    </nav>




   
    </>
  )
}

export default Navbar
