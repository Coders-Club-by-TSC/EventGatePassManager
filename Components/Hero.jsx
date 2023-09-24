import React from 'react'

function Hero() {
  return (
    <div>
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
    </div>
  )
}

export default Hero
