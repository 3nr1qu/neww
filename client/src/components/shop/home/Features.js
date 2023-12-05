/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import con1 from "../../../Assets/icon1.png";
import con2 from "../../../Assets/icon2.png";
import con3 from "../../../Assets/icon3.png";
import con4 from "../../../Assets/icon4.png";
import con5 from "../../../Assets/icon5.png";
import con6 from "../../../Assets/icon6.png";
import location from "../../../Assets/location.png";
const Features = () => {
  return (
    <>
      <div class="container my-12 mx-auto px-4 md:px-12">
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
                    <div class="border border-none bg-[#679641] p-3 rounded-xl">
                      <h1 class="text-lg text-center">
                        <a class="text-gray font-semibold" href="/">
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
                    <div class="border border-none bg-[#679641] p-3 rounded-xl">
                      <h1 class="text-lg text-center">
                        <a
                          class="text-gray font-semibold font-semibold"
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
                    <div class="border border-none bg-[#679641] p-3 rounded-xl">
                      <h1 class="text-lg text-center">
                        <a class="text-gray font-semibold" href="/">
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
                    <div class="border border-none bg-[#679641] p-3 rounded-xl">
                      <h1 class="text-lg text-center">
                        <a class="text-gray font-semibold" href="/">
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
                    <div class="border border-none bg-[#679641] p-3 rounded-xl">
                      <h1 class="text-lg text-center">
                        <a class="text-gray font-semibold" href="/">
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
                    <div class="border border-none bg-[#679641] p-3 rounded-xl">
                      <h1 class="text-lg text-center">
                        <a class="text-gray font-semibold" href="/">
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
      <div className="w-full h-screen flex items-start">
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
              className="mb-10 bg-[#C07936] w-36 h-12 hover:bg-[#679641] cursor-pointer m-auto text-white text-md font-medium text-center py-1 rounded-full mt-4"
            >
              Visit Now!!!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
