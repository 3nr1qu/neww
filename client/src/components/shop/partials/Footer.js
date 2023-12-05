import React, { Fragment } from "react";
import logo from "../../../Assets/logo.png";

const Footer = (props) => {
  return (
    <Fragment>
      <div style={{ backgroundColor: "#679641" }} className="text-gray">
        <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
          <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
            <img src={logo} alt="" className="h-12" />
            <div className="ml-2">
              <span className="font-bold">Nanay Estrella's Restaurant</span>
            </div>

       
            <p className="ml-2 font-light">Fresh taste, less Price Delight in every bite.</p>
            <div className="flex items-center mt-[15px]"></div>
          </ul>

          <ul className="text-center sm:text-start">
            <h1 className="mb-1 font-semibold">Services</h1>
            <h1 className="mb-1 font-light">Services</h1>
            <h1 className="mb-1 font-light">Services</h1>
            <h1 className="mb-1 font-light">Services</h1>
          </ul>
          <ul className="text-center sm:text-start">
            <h1 className="mb-1 font-semibold">Events</h1>
            <h1 className="mb-1 font-light">Events</h1>
            <h1 className="mb-1 font-light">Events</h1>
            <h1 className="mb-1 font-light">Events</h1>
          </ul>

          <ul className="text-center sm:text-start">
            <h1 className="mb-1 font-semibold">Menu's</h1>
            <h1 className="mb-1 font-light">Menu's</h1>
            <h1 className="mb-1 font-light">Menu's</h1>
            <h1 className="mb-1 font-light">Menu's</h1>
          </ul>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
   text-center pt-2 text-gray text-sm pb-8"
        >
          <span>© 2023 NanayEstrellaRestaurant. All Rights Reserved.</span>
          <span >Designed by: <span className="underline">SMCB TEAM</span></span>
          <div className="sm:block flex items-center justify-center w-full">
            <img
              src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
