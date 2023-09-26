import React from "react";
import Image from "next/image";
import SignInButton from "./SignInButton";
import HeroImage from "@/public/Images/Hero.gif";

function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font sm:px-1 md:px-4 lg:px-20 sm:mt-2 md:mt-2 lg:mt-20">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-justify">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              EventEase
            </h1>
            <p className="mb-8 leading-relaxed flex ">
              Introducing EventEase: A cutting-edge project designed to
              revolutionize event management. Our innovative system allows you
              to effortlessly scan QR codes at multiple registered events,
              ensuring a seamless experience for organizers. From event creation
              to real-time insights, Eventease offers a comprehensive solution
              for event organizers. Join us in streamlining event operations,
              boosting efficiency, and unlocking valuable event data insights
              like never before.
            </p>

            <div className="flex justify-center">
              <a href="/profile">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Profile
                </button>
              </a>

              <p className=" ml-3  inline-flex ">
                <SignInButton />
              </p>
            </div>
          </div>
          <div className=" ">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
              <Image
                className=" object-cover object-center rounded"
                alt="hero"
                src={HeroImage}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
