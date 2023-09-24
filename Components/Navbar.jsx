"use client"
import React from 'react'
import SignInbutton from './SignInButton';
import { useState } from 'react';
import Image from 'next/image';
import HeroImage from "@/public/Images/Hero.gif"

const Navbar = () => {
    const [isclick, setisclick] = useState(false);
    const toggleNavbar = () => {
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

                                <a href="/profile" className=" text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    Profile
                                </a>

                                <a href="/create" className=" text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    Create
                                </a>
                                <p >
                                    <SignInbutton />
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

                                ) : (
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

                            <a href="/profile" className=" text-white block hover:bg-white hover:text-black rounded-lg p-2">
                                Profile
                            </a>

                            <a href="/create" className=" text-white block hover:bg-white hover:text-black rounded-lg p-2">
                                Create
                            </a>
                            <p className="   block ">
                                <SignInbutton />
                            </p>
                        </div>
                    </div>

                )}


            </nav>

          

<section className="text-gray-600 body-font px-20 mt-20">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">EventEase
      
      </h1>
      <p className="mb-8 leading-relaxed  ">Introducing 'EventEase': A cutting-edge project designed to revolutionize event management. Our innovative system allows you to effortlessly scan QR codes at multiple registered events, ensuring a seamless experience for  organizers. From event creation to real-time insights, Eventease offers a comprehensive solution for event organizers. Join us in streamlining event operations, boosting efficiency, and unlocking valuable event data insights like never before.</p>

      <div className="flex justify-center">
      <a href="/profile">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Profile</button>
        
        </a>
       
         <p className=" ml-3  inline-flex " > 
             <SignInbutton />  
        {/* <button  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"> <SignInbutton /> </button>
        </a> */}
        </p> 
      </div>
      
    </div>
    <div className=" ">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image className="object-cover object-center rounded" alt="hero"  src={HeroImage} />
    </div>
    </div>
  </div>
</section>


        </>
    )
}

export default Navbar


// h-48 w-96  object-center rounded