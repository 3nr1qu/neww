import React from "react";
import Image1 from "../../../Assets/event1.png";
import Image2 from "../../../Assets/event2.png";
import Image3 from "../../../Assets/event3.png";
import Image4 from "../../../Assets/event4.png";
import EventBanner from "../../../Assets/eventbanner.png";
import Footer from "../partials/Footer";
import { Navber } from "../partials";
const Event = () => {
  return (
    <>
    <Navber/>
      <div className="w-full h-screen relative">
        <img
          className="top-0 left-0 w-full h-screen object-cover"
          src={EventBanner}
          alt="/"
        />
        <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
        <div className="absolute top-10 w-full h-full flex flex-col justify-center text-white">
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
            <h4 className="font-bold text-[#F0F8FF] text-4xl md:text-5xl lg:text-6xl drop-shadow-2xl">
              Our Awesome Events!
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
      <div className="w-full h-50 flex items-start py-20 -mt-20">
        <div className="w-3/4 bg-white flex flex-col p-20 ">
          <h1 className="text-center text-2xl p-5">DESCRIPTIONS</h1>
          <div className="text-justify">
            <p>
              Nanay Estrella's Restaurant is nestled in a calm spot, offering a
              lovely and charming setting that's just right for hosting weddings
              you'll always remember. The peaceful feeling of the place,
              combined with its beautiful surroundings, creates a special
              atmosphere that adds a touch of magic to your big day. In this
              stunning setting, Nanay Estrella's Restaurant creates an
              experience that goes beyond what you'd expect, blending together
              natural beauty, friendly service, and really good food. When
              couples and their dear guests come together, they're surrounded by
              an atmosphere that turns regular moments into amazing memories,
              making a lasting impression on everyone's hearts. Nanay Estrella's
              Restaurant shows how special moments can be, where nature's
              beauty, thoughtful service, and delicious food all come together
              to make a celebration you'll never forget. Nanay Estrella's
              Restaurant is nestled in a calm spot, offering a lovely and
              charming setting that's just right for hosting weddings you'll
              always remember. The peaceful feeling of the place, combined with
              its beautiful surroundings, creates a special atmosphere that adds
              a touch of magic to your big day. In this stunning setting, Nanay
              Estrella's Restaurant creates an experience that goes beyond what
              you'd expect, blending together natural beauty, friendly service,
              and really good food. When couples and their dear guests come
              together, they're surrounded by an atmosphere that turns regular
              moments into amazing memories, making a lasting impression on
              everyone's hearts. Nanay Estrella's Restaurant shows how special
              moments can be, where nature's beauty, thoughtful service, and
              delicious food all come together to make a celebration you'll
              never forget.
            </p>
          </div>
        </div>
        <div className="w-1/3 ralative flex flex-col">
          <div className="flex flex-col mt-64 mr-12">
            <button
              type="submit"
              className="mb-10 bg-[#C07936] w-40 h-12 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium text-center rounded-full"
            >
              Book Events Now!!!
            </button>
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
          <span className="text-[20px] font-['Open_Sans']">Event</span>
          <p className="font-bold text-gray text-[2rem]">WEDDING RECEPTIONS</p>
          <button
            type="submit"
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="w-full h-screen p-20 flex flex-col md:flex-row">
       
        <div className="w-full md:w-1/2 relative flex flex-col mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Event</span>
          <p className="font-bold text-gray text-[2rem]">CATHY 18th BIRTHDAY PARTY</p>
          <button
            type="submit"
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none"
          >
            LEARN MORE
          </button>
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image2}
            alt=""
            className="object-contain rounded-lg h-[100px] md:h-[651px] w-full"
          />
        </div>
      </div>
      <div className="w-full h-screen p-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image3}
            alt=""
            className="object-contain rounded-lg h-[100px] md:h-[651px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Event</span>
          <p className="font-bold text-gray text-[2rem]">FAMILY CELEBRATION</p>
          <button
            type="submit"
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="w-full h-screen p-20 flex flex-col md:flex-row">
       
        <div className="w-full md:w-1/2 relative flex flex-col mt-40 text-center">
          <span className="text-[20px] font-['Open_Sans']">Event</span>
          <p className="font-bold text-gray text-[2rem]">BIRTHDAY PARTIES</p>
          <button
            type="submit"
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none"
          >
            LEARN MORE
          </button>
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col">
          <img
            src={Image4}
            alt=""
            className="object-contain rounded-lg h-[100px] md:h-[651px] w-full"
          />
        </div>
      </div>
       <Footer/>
    </>
  );
};

export default Event;
