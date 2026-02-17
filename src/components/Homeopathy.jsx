import React from "react";
import { motion } from "framer-motion";
import homeopathyImg from "../assets/images/what.png";

const Homeopathy = () => {
  const highlights = [
    { text: "Natural & Non-Toxic", color: "#5F2900" },
    { text: "No Dependency", color: "#5F2900" },
    { text: "Safe for All Ages", color: "#5F2900" },
    { text: "Long-Term Relief", color: "#5F2900" },
  ];

  return (
    <section id="homeopathy" className="pt-10 pb-20 bg-white md:pb-16">
      <div className="max-w-[1190px] mx-auto px-4 lg:px-0">
        <div className="bg-[#F8F8F8] rounded-[24px] p-8 relative overflow-hidden lg:p-[56px] md:p-14 sm:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[88px]">
            {/* Content Side */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-cooper text-[32px] md:text-[44px] font-normal leading-[1.2] text-[#1A1A1A] mb-4 md:mb-6">
                What is Homeopathy?
              </h2>
              <p className="font-josefin text-[16px] md:text-[21px] font-normal leading-[1.4] text-[#666666] mb-8 md:mb-10 max-w-[600px] mx-auto lg:mx-0">
                Homeopathy is a natural system of medicine that stimulates the
                body's self-healing ability using highly diluted remedies.
              </p>

              {/* Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full sm:w-fit mx-auto lg:mx-0">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#E8B086] px-4 py-2.5 rounded-[99px] flex items-center justify-center min-w-0 md:min-w-[225px] h-auto sm:h-[42px]"
                  >
                    <span className="font-josefin font-bold text-[16px] md:text-[18px] leading-tight text-[#5F2900] text-center">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <motion.div
              className="flex-shrink-0 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <img
                  src={homeopathyImg}
                  alt="Homeopathy Remedies"
                  className="w-full max-w-[450px] md:max-w-none md:h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeopathy;
