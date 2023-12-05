/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import location from "../../../Assets/location.png";
import con1 from "../../../Assets/icon1.png";
import con2 from "../../../Assets/icon2.png";
import con3 from "../../../Assets/icon3.png";
import con4 from "../../../Assets/icon4.png";
import con5 from "../../../Assets/icon5.png";
import con6 from "../../../Assets/icon6.png";
import SingleProduct from "./SingleProduct";
// import Chat from "./Chat";
export const HomeContext = createContext();

const HomeComponent = () => {
  const handleVisitButtonClick = () => {
    // Open the specified URL in a new tab
    window.open("https://maps.app.goo.gl/HAmxu3Xbu3aqztmw7", '_blank');
  };
  return (
    <Fragment>
      <Slider />
      {/* Category, Search & Filter Section */}
      <p className="text-center text-sm p-5 text-[#C07936]">MENU'S</p>
      <h1 className="text-center text-2xl p-5">Our Awesome Menu's</h1>
      <section className="m-4 md:mx-8 md:my-6">
        <ProductCategory />
      </section>
      {/* Product Section */}
      <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SingleProduct />
      </section>
{/* <Chat/> */}
      <div className="w-full md:h-50 flex flex-col md:flex-row items-start py-5 md:py-20 sm:py-10 -mt-5 md:-mt-20">
        <div className="w-full md:w-3/4 bg-white flex flex-col p-5 md:p-20">
          <h1 className="text-center text-2xl p-2 md:p-5">DESCRIPTIONS</h1>
          <div className="text-justify font-light">
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
        <div className="w-1/4 pt-[13%] bg-white t-50 b-0  h-100 flex flex-col  ">
          

          <div className="flex flex-col mr-[500px] mt-[20px]">
            <button
              type="submit"
              className="mb-10 bg-[#C07936] w-40 h-12 hover:bg-[#679641] cursor-pointer m-auto text-white text-md font-medium text-center py-1 rounded-full mt-4"
            >
             Book Events Now!!!
            </button>
          </div>
        </div>
      </div>

      <div class="container my-12 mx-auto mb-20 px-4 md:px-12">
        <p className="text-center text-sm p-5 text-[#C07936]">FEATURES</p>
        <h1 className="text-center text-2xl p-5">
          Our Awesome Services & Offers
        </h1>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden border border-grey  rounded-lg shadow-lg">
              <a href="/">
                <div class="relative group">
                  <img
                    src={con1}
                    alt=""
                    class="w-full h-[200px] object-contain transition-transform duration-300 transform group-hover:scale-150"
                  />
                  <header class="flex items-center justify-center md:p-4">
                    <div class="border border-none bg-[#8dbd66] p-3 rounded-xl">
                      <h1 class="text-lg text-center">
                        <a class="text-black font-semibold" href="/">
                          BOOK APPOINTMENT
                        </a>
                      </h1>
                    </div>
                  </header>
                </div>
              </a>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden border border-grey rounded-lg shadow-lg">
              <a href="/">
                <div class="relative group">
                  <img
                    src={con2}
                    alt=""
                    class="w-full h-[200px] object-contain transition-transform duration-300 transform group-hover:scale-150"
                  />
                  <header class="flex items-center justify-center md:p-4">
                    <div class="border border-none bg-[#8dbd66] p-3 rounded-xl">
                      <h1 class="text-lg text-center">
                        <a
                          class="text-black font-semibold font-semibold"
                          href="/"
                        >
                          ORDER ONLINE
                        </a>
                      </h1>
                    </div>
                  </header>
                </div>
              </a>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden border border-grey rounded-lg shadow-lg">
              <a href="/">
                <div class="relative group">
                  <img
                    src={con3}
                    alt=""
                    class="w-full h-[200px] object-contain transition-transform duration-300 transform group-hover:scale-150"
                  />
                  <header class="flex items-center justify-center md:p-4">
                    <div class="border border-none bg-[#8dbd66] p-3 rounded-xl">
                      <h1 class="text-lg text-center">
                        <a class="text-black font-semibold" href="/">
                          FOOD QUALITY
                        </a>
                      </h1>
                    </div>
                  </header>
                </div>
              </a>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden border border-grey rounded-lg shadow-lg">
              <a href="/">
                <div class="relative group">
                  <img
                    src={con4}
                    alt=""
                    class="w-full h-[200px] object-contain transition-transform duration-300 transform group-hover:scale-150"
                  />
                  <header class="flex items-center justify-center md:p-4">
                    <div class="border border-none bg-[#8dbd66] p-3 rounded-xl">
                      <h1 class="text-lg text-center">
                        <a class="text-black font-semibold" href="/">
                          SUPER TASTE
                        </a>
                      </h1>
                    </div>
                  </header>
                </div>
              </a>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden border border-grey rounded-lg shadow-lg">
              <a href="/">
                <div class="relative group">
                  <img
                    src={con5}
                    alt=""
                    class="w-full h-[200px] object-contain transition-transform duration-300 transform group-hover:scale-150"
                  />
                  <header class="flex items-center justify-center md:p-4">
                    <div class="border border-none bg-[#8dbd66] p-3 rounded-xl">
                      <h1 class="text-lg text-center">
                        <a class="text-black font-semibold" href="/">
                          PICTURESQUE SCENERY
                        </a>
                      </h1>
                    </div>
                  </header>
                </div>
              </a>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden border border-grey rounded-lg shadow-lg">
              <a href="/">
                <div class="relative group">
                  <img
                    src={con6}
                    alt=""
                    class="w-full h-[200px] object-contain transition-transform duration-300 transform group-hover:scale-150"
                  />

                  <header class="flex items-center justify-center md:p-4">
                    <div class="border border-none bg-[#8dbd66] p-3 rounded-xl">
                      <h1 class="text-lg text-center">
                        <a class="text-black font-semibold" href="/">
                          ONLINE REVIEWS
                        </a>
                      </h1>
                    </div>
                  </header>
                </div>
              </a>
            </article>
          </div>
        </div>
      </div>
      {/* Location */}
      <div class="container my-12  px-4 md:px-12">
        <p className="text-center text-sm p-5 text-[#C07936]">LOCATION</p>
        <h1 className="text-center text-2xl p-5">
          Our Beautiful Venue & Location
        </h1>
      </div>
      <div className="w-full h-screen -mt-3 flex items-start ">
      
        <div className="w-2/3 relative flex flex-col">
          <div className="flex-1">
            <img
              src={location}
              alt=""
              className="object-contain p-10 h-[651px] w-full"
            />
          </div>
          <div className="relative flex justify-center p-2 ml-[34%] -mt-[7%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.993161156271!2d124.05896637486043!3d9.934526374158233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa2523d6dd27eb%3A0x1aa786f45bd4e6c8!2sNanay%20Estrella&#39;s%20Restaurant!5e0!3m2!1sen!2sph!4v1691563546837!5m2!1sen!2sph"
              width="500"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute bottom-0"
            ></iframe>
          </div>
        </div>

        <div className="w-1/3 pt-[13%] bg-white t-50 b-0  h-100 flex flex-col  ">
          <h1 className="text-3xl font-bold">Simple Way</h1>
          <h1 className="text-3xl font-bold">To Visit Our Place</h1>
          <p className="py-5">
            Nanay Estrella's Restaurant 5.0 (2) W3M6+WFP, Clarin, Bohol <br />
            Address Located in: BIBLE BAPTIST CHURCH - SAGBAYAN
          </p>

          <div className="flex flex-col mr-[500px] mt-[20px]">
            <button
              type="submit"
              onClick={handleVisitButtonClick}
              className="mb-10 bg-[#C07936] w-36 h-12 hover:bg-[#679641] cursor-pointer m-auto text-white text-md font-medium text-center py-1 rounded-full mt-4"
            >
              Visit Now!!!
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;  
