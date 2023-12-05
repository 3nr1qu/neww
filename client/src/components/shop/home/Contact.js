import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import menubanner from "../../../Assets/contactbanner.png";
import Image1 from "../../../Assets/bg2.png";
import "tailwindcss/tailwind.css";
import Footer from "../partials/Footer";
import { Navber } from "../partials";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleVisitButtonClick = () => {
    // Open the specified URL in a new tab
    window.open("https://maps.app.goo.gl/HAmxu3Xbu3aqztmw7", '_blank');
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x8xta0k",
        "template_18taatg",
        form.current,
        "q19E3aTkFYaiDhWkB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Send");
          setName("");
          setEmail("");
          setMessage("");
          // Display success message
          window.alert("Your Inquiries sent successfully!");
        },
        (error) => {
          console.log(error.text);
          // Display error message if needed
          window.alert("Message sending failed. Please try again.");
        }
      );
  };
  return (
    <div>
      <Navber />
      <div className="relative w-full h-screen flex">
        <div className="h-full hidden md:block">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={menubanner}
            alt=""
          />
        </div>

        <div className="w-full md:w-1/2 relative flex flex-col mt-36">
          <div className="absolute w-full h-full flex flex-col justify-center text-white">
            <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
              <img
                src={Image1}
                alt=""
                className="object-contain rounded-lg h-[100px] md:h-[651px] w-full"
              />
            </div>
          </div>
        </div>

        {/* Contact form column */}
        <div className="w-1/2 relative flex flex-col mt-20">
          <section className="text-gray-700 body-font relative">
            <div className="px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <span className="text-[20px] font-['Open_Sans']">
                  Have a Questions?
                </span>
                <p className="font-bold text-gray text-[2rem]">MAIL US!</p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <form
                  className="flex flex-wrap -m-2 flex-col items-center -m-2"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="name">Fullname</label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-400"
                      />
                    </div>
                  </div>

        {/* Email input */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-400"
                        placeholder="nanayestrella@gmail.com"
                      />
                    </div>
                  </div>
                  {/* Message input */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-slate-200 rounded border border-gray-300 focus:border-indigo-500 h-32 text-gray-700 py-1 px-3 resize-none rounded focus-within:outline-green-400 duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <input
                      style={{ background: "#679641" }}
                      className={`px-4 py-2 text-white text-center cursor-pointer uppercase`}
                      type="submit"
                      value="Send"
                      
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="w-full h-screen flex items-start ">
        <div className="w-1/2 relative flex flex-col">
          <div className="flex-1 mt-48"></div>
          <div
            className="relative h-0 overflow-hidden "
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full pl-[10%]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15719.972898073602!2d124.0615413!3d9.9345211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa2523d6dd27eb%3A0x1aa786f45bd4e6c8!2sNanay%20Estrella&#39;s%20Restaurant!5e0!3m2!1sen!2sph!4v1694737440229!5m2!1sen!2sph"
              width="600"
              height="450%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative flex flex-col mt-40 text-center">
          <span className="text-[2rem] mt-32 font-bold">Our Location</span>
          <p className="text-gray text-[1rem]">
            We are located @W3M6+WFPBogtongbod, Clarin, Bohol
          </p>
          <button
            type="submit"
            onClick={handleVisitButtonClick}
            className="bg-[#C07936] w-40 h-12 mt-10 hover:bg-[#679641] cursor-pointer m-auto text-white text-sm font-medium rounded-none"
          >
            VISIT US!
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
