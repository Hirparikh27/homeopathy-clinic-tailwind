import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-auto max-w-[1206px] mx-3 sm:mx-4 rounded-[24px] sm:rounded-[32px] flex items-center bg-primary overflow-hidden p-[32px_16px] sm:p-[60px_24px] lg:min-h-[511px] lg:mx-auto lg:rounded-[40px] lg:p-20 lg:px-[72px]"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/images/hero-bg.png')] bg-no-repeat bg-center bg-cover opacity-15 z-[1]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(20,45,40,0.4)_100%)] z-[2]"></div>
      <div className="container relative z-[3] w-full max-w-[1206px] p-0">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 w-full lg:grid-cols-[1fr_365.04px] lg:gap-4 lg:text-left text-center">
          <motion.div
            className="pl-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#E8B086] text-white p-[6px_14px] sm:p-[8px_16px] rounded-[42.24px] inline-block font-josefin font-semibold text-[14px] sm:text-[16px] leading-none text-center mb-4 sm:mb-6 lg:text-[19.01px] lg:p-[9.63px_22.53px_5.63px_22.53px]">
              Now Open in Ahmedabad
            </div>
            <h1 className="font-cooper text-[26px] sm:text-[32px] font-normal text-white mb-4 sm:mb-6 leading-[1.2] lg:text-[48px] lg:leading-none">
              Gentle. Natural. Holistic <br />
              Healing with Homeopathy
            </h1>
            <p className="font-josefin text-[16px] sm:text-[18px] text-white/80 mb-6 sm:mb-[30px] leading-[1.4] font-light whitespace-normal lg:text-[23px] lg:mb-10">
              Personalized Homeopathic Care for Chronic & Acute Conditions
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                to="appointment"
                smooth={true}
                className="bg-white text-[#295C51] px-6 h-12 sm:h-14 w-full max-w-xs sm:w-52 flex items-center justify-center font-josefin text-[16px] sm:text-[18px] font-bold leading-[1.1] rounded-[72px] tracking-normal cursor-pointer hover:bg-background hover:-translate-y-0.5 transition-all duration-300 no-underline"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end lg:pr-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/src/assets/images/doctor.png"
              alt="Dr. Bhavya Koladiya"
              className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px] h-auto object-cover rounded-[14.98px_44.93px_14.98px_44.93px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] lg:max-w-[365.04px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
