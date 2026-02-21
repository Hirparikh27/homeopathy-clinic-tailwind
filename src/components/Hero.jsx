import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import doctorImg from "../assets/images/Bhavya1.png";
import LazyImage from "./LazyImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-auto max-w-[1190px] mx-3 sm:mx-4 rounded-[24px] sm:rounded-[32px] flex items-center bg-primary overflow-hidden p-[32px_16px] pb-[80px] sm:p-[60px_24px] sm:pb-[100px] md:p-[80px_48px] md:pb-[140px] lg:min-h-[511px] lg:mx-auto lg:rounded-[40px] lg:p-20 lg:px-[72px]"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/images/hero-bg.png')] bg-no-repeat bg-center bg-cover opacity-15 z-[1]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(20,45,40,0.4)_100%)] z-[2]"></div>
      <div className="container relative z-[3] w-full max-w-[1190px] p-0">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 w-full md:grid-cols-2 md:gap-12 md:text-left lg:grid-cols-[1fr_365.04px] lg:gap-4 text-center">
          <motion.div
            className="pl-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#E8B086] text-[#295C51] p-[6px_14px] sm:p-[8px_16px] rounded-[42.24px] inline-block font-josefin font-semibold text-[14px] sm:text-[16px] leading-none text-center mb-4 sm:mb-6 lg:text-[19.01px] lg:p-[9.63px_22.53px_5.63px_22.53px]">
              Now Open in Ahmedabad
            </div>
            <h1 className="font-cooper text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal text-white mb-4 sm:mb-6 leading-none">
              Gentle. Natural. Holistic <br />
              Healing with Homeopathy
            </h1>
            <p className="font-josefin text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#FAF5F0] mb-6 sm:mb-[30px] lg:mb-10 lg:leading-none font-normal">
              Personalized Homeopathic Care for Chronic & Acute Conditions
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                to="footer"
                smooth={true}
                offset={-80}
                className="w-[143px] h-[48px] px-6 bg-white text-[#295C51] flex items-center justify-center gap-2 rounded-[72px] font-josefin font-bold text-[18px] leading-none cursor-pointer hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 no-underline"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end lg:pr-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <img
              src={doctorImg}
              alt="Dr. Bhavya Koladiya"
              className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[340px] h-auto object-cover rounded-[14.98px_44.93px_14.98px_44.93px] lg:max-w-[365.04px]"
            /> */}
            <LazyImage
              src={doctorImg}
              alt="Dr. Bhavya Koladiya"
              title="Dr. Bhavya Koladiya"
              wrapperClass="
      w-full
      max-w-[240px]
      sm:max-w-[280px]
      md:max-w-[340px]
      lg:max-w-[365.04px]
      rounded-[14.98px_44.93px_14.98px_44.93px]
      overflow-hidden
    "
              className="object-cover"
              skeletonClass="bg-gray-200 animate-pulse rounded-[14.98px_44.93px_14.98px_44.93px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
