import React from 'react'
import Footer from "../partials/Footer";
import Image from "../../../Assets/bg2.png";
import { Navber } from '../partials';
const AboutUs = () => {
  return (
    <div>
      <Navber/>
    <div className="w-full h-screen relative">
      <div className="w-full h-screen flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 relative flex flex-col mt-16">
          <img
            src={Image}
            alt=""
            className="object-contain p-5 md:p-20 h-[300px] md:h-[651px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 bg-white flex flex-col p-5 md:p-20  mt-16">
          <h1 className="text-center text-xl md:text-2xl p-2 md:p-5">
            ABOUT US
          </h1>
          <p className="text-sm md:text-base">
            Welcome to Nanay Estrella's Restaurant in Bohol, where culinary
            excellence meets a warm and charming ambiance.
          </p>
          <p className="my-2 md:my-3 text-sm md:text-base">
            This establishment takes great pride in providing a hospitable
            dining experience, offering an array of delicious dishes presented
            beautifully to tantalize your taste buds and delight your senses.
            Whether you're here with your family, loved ones, or friends, our
            restaurant is the perfect destination for a memorable outing.
          </p>
          <p className="text-sm md:text-base">
            Highly recommended by locals and visitors alike, we invite you to
            savor our delectable offerings and bask in the inviting atmosphere
            that Nanay Estrella's has become renowned for.
          </p>
          <div className="mt-3 md:mt-4">
            <button
              type="submit"
              className="mb-6 md:mb-10 bg-[#C07936] w-28 md:w-36 h-10 md:h-12 hover:bg-[#679641] cursor-pointer m-auto text-white text-xs md:text-sm font-medium text-center py-1 rounded-full mt-3 md:mt-4"
            >
              Explore Our Story
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default AboutUs