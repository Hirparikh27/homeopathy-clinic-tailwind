import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import leafIcon from "../assets/images/flower.png";

const CTA = () => {
  return (
    <section className="relative px-4" id="cta">
      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        <div className="h-1/2 bg-white w-full"></div>
        <div className="h-1/2 bg-[#FAF5F0] w-full"></div>
      </div>

      <div className="max-w-[1190px] mx-auto relative z-10 px-4 lg:px-0">
        <motion.div
          className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-[40px] py-8 lg:py-0 lg:h-[170px] gap-8 lg:gap-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Side: Icon + Heading */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[48px]">
            <div className="w-[87px] h-[87px] bg-[#E8EEED] rounded-full flex items-center justify-center shrink-0">
              <img
                src={leafIcon}
                alt="Flower Icon"
                className="w-[45px] h-auto object-contain"
              />
            </div>
            <h2 className="font-josefin text-[#295C51] text-[24px] sm:text-[32px] lg:text-[39px] font-semibold leading-[1.2] text-center lg:text-left">
              Ready to Take the First Step <br className="hidden lg:block" />
              Toward Healing?
            </h2>
          </div>

          {/* Right Side: Button */}
          <Link
            to="footer"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-[#295C51] text-white h-[54px] px-10 flex items-center justify-center rounded-[72px] font-bold font-josefin text-[18px] leading-none hover:bg-[#204a41] hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg shrink-0"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
