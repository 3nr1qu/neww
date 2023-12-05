import React from "react";
import Image1 from "../../../Assets/event1.png";
import ServiceBanner from "../../../Assets/servicebanner.png";
import Footer from "../partials/Footer";
import { Navber } from "../partials";
const Services = () => {
  return (
    <>
    <Navber/>
      <div className="w-full h-screen relative">
        <img
          className="top-0 left-0 w-full h-screen object-cover"
          src={ServiceBanner}
          alt="/"
        />
        <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
        <div className="absolute top-10 w-full h-full flex flex-col justify-center text-white">
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
            <h4 className="font-bold text-[#F0F8FF] text-3.5xl md:text-4xl lg:text-5xl drop-shadow-2xl">
              Our Services & Offers!
            </h4>

            <p className="max-w-[600px] drop-shadow-2xl py-2 text-lg md:text-xl lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut
              quis est, id consequuntur sequi ipsum vitae sit non
              exercitationem.
            </p>
            <div className="mt-10">
              <div className="mt-4">
                <button className="font-bold border border-1 text-slate-200 hover:bg-[#679641] cursor-pointer px-4 py-2 rounded-md">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image1}
            alt=""
            className="object-contain rounded-lg h-[100px] md:h-[651px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Services</span>
          <p className="font-bold text-gray text-[2rem]">BOOK AN APPOINTMENT</p>
          <button
            type="submit"
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="w-full h-screen p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image1}
            alt=""
            className="object-contain rounded-lg h-[100px] md:h-[651px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Services</span>
          <p className="font-bold text-gray text-[2rem]">ORDER ONLINE</p>
          <button
            type="submit"
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="w-full h-screen p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image1}
            alt=""
            className="object-contain rounded-lg h-[100px] md:h-[651px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Services</span>
          <p className="font-bold text-gray text-[2rem]">FOOD QUALITY</p>
          <button
            type="submit"
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="w-full h-screen p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image1}
            alt=""
            className="object-contain rounded-lg h-[100px] md:h-[651px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Services</span>
          <p className="font-bold text-gray text-[2rem]">SUPER TASTE</p>
          <button
            type="submit"
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="w-full h-screen p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image1}
            alt=""
            className="object-contain rounded-lg h-[100px] md:h-[651px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Services</span>
          <p className="font-bold text-gray text-[2rem]">PICTURESQUE SCENERY</p>
          <button
            type="submit"
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="w-full h-screen p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image1}
            alt=""
            className="object-contain rounded-lg h-[100px] md:h-[651px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Services</span>
          <p className="font-bold text-gray text-[2rem]">ONLINE REVIEWS</p>
          <button
            type="submit"
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Services;
