import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { useHistory } from "react-router-dom";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import { prevSlide, nextSlide } from "./Mixins";

const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);
  const history = useHistory();

  useEffect(() => {
    sliderImages(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="relative mt-16 bg-gray-100 border-2 ">
        {data.sliderImages.length > 0 ? (
          <img
          className="w-full h-[384px] md:h-full object-cover flex flex-col mt-32 md:mt-32 lg:mt-8 "
            src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
            alt="sliderImage"
          />
        ) : (
          ""
        )}

        {data?.sliderImages?.length > 0 ? (
          <>
        
            <svg
              onClick={(e) =>
                prevSlide(data.sliderImages.length, slide, setSlide)
              }
              className={`z-10 absolute top-0 left-0 mt-52 md:mt-64 flex justify-end items-center box-border flex justify-center w-8 h-8 md:w-12 md:h-12 text-gray-700 cursor-pointer hover:text-yellow-700 `}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              onClick={(e) =>
                nextSlide(data.sliderImages.length, slide, setSlide)
              }
              className={`z-10 absolute top-0 right-0 mt-52 md:mt-64 flex justify-start items-center box-border flex justify-center w-8 h-8 md:w-12 md:h-12 text-gray-700 cursor-pointer hover:text-yellow-700`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center ml-16 flex flex-col mt-28 md:mt-32 lg:mt-8">
              <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4 mr-3">
                <h4 className="font-bold text-3xl md:text-4xl lg:text-5xl drop-shadow-2xl">
                  Fresh taste, less Price
                </h4>
                <h4 className="font-bold text-[#e5c9ae] text-3xl md:text-4xl lg:text-5xl drop-shadow-2xl">
                  Delight in every bite.
                </h4>

                <p
                  style={{ width: "60%" }}
                  className="w-50% drop-shadow-2xl font-light py-2 text-sm md:text-xl lg:text-2xl"
                >
                  "Indulge in the exquisite flavors that await you. Our
                  commitment to quality and taste is unmatched. Discover the
                  difference at Nanay Estrella's Restaurant."
                </p>
                <div className="mt-6">
                  <div className="flex flex-col w-full md:w-auto md:flex-row lg:flex-row lg:flex-col xl:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <button
                      style={{ backgroundColor: "#679641" }}
                      type="submit"
                      className="px-3 py-3 w-32 md:w-[160px] cursor-pointer text-white text-sm md:text-lg lg:text-lg xl:text-lg font-medium text-center rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#679641] duration-300"
                    >
                      Make Order
                    </button>
                  </div>
                  <div className="flex flex-col py-5 md:py-10 mb-10 md:mb-10 md:flex-row lg:flex-row lg:flex-col xl:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <button
                      style={{ backgroundColor: "#679641" }}
                      type="submit"
                      className="px-4 py-3 w-44 md:w-64 cursor-pointer text-white text-sm md:text-lg lg:text-lg xl:text-lg font-medium text-center rounded-full transition ease-in-out delay-150 bg-[#C07936] hover:-translate-y-1 hover:scale-110 hover:bg-[#679641] duration-300"
                      onClick={(e) => history.push("/appointment")}
                    >
                      Book An Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
