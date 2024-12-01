import React from 'react'
import { IoTrophyOutline } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { GiCargoShip } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { GrSupport } from "react-icons/gr";

function ContactUS() {
  return (
    <div>
      <div className="relative">
        <img
          className="h-60 w-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1k2~TI16jFkGQLu1hF6zQaqAEqLkM3RKvTzXNQj5UqhnvHscTHf6GDmGoXWpZzl4JMbzFpXs3ko8v-e-YGmNjoNamMKFBehhdv7Q2njuPu1YZnAp6e6bR4inQ~N0drYhkEnzHsdPoc3T2tvkoIfZs1cZ~r2mjdDh~ElcH~OwwLVmu7JukfTfoOkJdhn9X0RMMg0v36R6-DYy988H9z84fPkhVyFi1uCyZiK8g7dLPilqt1t3im8IzPyfTbCf8NUPCQE1nKe-EZ1SWkWdFMl~iYPkrjv2pj~YMKVWfI0FMX~dELlL2NEUjpWnn3xh9veXbX1fSiVQiVLbaqNBrqYNA__"
          alt="Cart Image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white bg-opacity-50">
          <img
            className="h-10 w-10"
            src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hKnHcKE5Lsm6d2ptkIrFTsXl5CDDRDCTdEU5xdqmFImz0-sCLxyoqPhICQ8Oxefj~FrXi8llAFo-u4yDPUXQe72Ubf1AUxxC8q8HZfywaWMrMuc3TgaAzxjPSiFEP92NAnSDfgcWorcLC~jE4deZJGwOmnUU-2BLEGOehDWjZROZBA4-iARULPUGeOg4yeuDv3QmIQjY68ifPHBp7maePBiMHihaadPI~7d7QmB6yaXaNoiCe~ur4Z4q4SWHQt9mW8Pn3l-Tb38K~KhIeirqDum3UZ6dPLRblfza-VkLkB~3GwX32LXYuIAmBPoYdj7lSDjnuvqAkxCi2IVomV2zpQ__" alt="" />
          <h1 className="text-3xl font-semibold">Contact</h1>
          <h1 className="text-sm text-black">Home › Contact</h1>
        </div>
      </div>
      <h1 className="text-black text-3xl pt-10 text-center mb-1 font-bold title-font">
        Get In Touch With Us
      </h1>
      <p className="text-center mb-1 items-center title-font">
        For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <section className="bg-white body-font">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Address Section */}
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-start justify-start relative">
            <div className="relative m-10 p-10 py-6 rounded shadow-md flex flex-col justify-start">
              <div className="flex items-center mb-4">
                <span className='font-bold text-2xl pr-2 text-black'><IoLocationSharp /></span>
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font text-2xl font-bold text-black">Address</h2>
                  <p className="mt-1 mb-7 text-black">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <span className='font-bold text-2xl pr-2 text-black'><FaPhoneAlt /></span>
                <div className="lg:w-1/2 px-6 mt-8 lg:mt-0">
                  <h2 className="title-font text-2xl font-bold text-black">Phone</h2>
                  <p className="leading-relaxed mb-10">Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className='font-bold text-2xl pr-2 text-black'><MdAccessTimeFilled /></span>
                <div className="lg:w-1/2 px-6 mt-8 lg:mt-0">
                  <h2 className="title-font text-1xl text-black font-bold">Working Time</h2>
                  <p className="text-black leading-relaxed">Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-10 rounded-lg shadow-md">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-black font-bold">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder='Your Name'
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-black font-bold">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='example@domain.com'
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="subject" className="leading-7 text-sm text-black font-bold">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder='This is optional'
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-black font-bold">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder='Hi! I’d like to ask about...'
                className="w-full bg-white rounded border border-gray-300  h-32  text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-amber-700 border-0 py-2 px-6   rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </section>

      <section className="text-gray-600 cartTotal body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
  
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        High Quality
        </h2>
        <p className="leading-relaxed">Crafted from top materials</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        Warranty Protection
        </h2>
        <p className="leading-relaxed">Over 2 years</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        Free Shipping
        </h2>
        <p className="leading-relaxed">Order over $150</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        24 / 7 Support
        </h2>
        <p className="leading-relaxed">Dedicated support</p>
      </div>
    </div>
  </div>
</section>


    </div>



  )
}

export default ContactUS;