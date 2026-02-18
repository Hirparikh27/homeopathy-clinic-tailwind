import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import pcIcon from "../assets/images/PC.svg";
import scIcon from "../assets/images/SC.svg";
import neIcon from "../assets/images/NE.svg";
import tcIcon from "../assets/images/TC.svg";
import clinicImg from "../assets/images/clinic.png"; // Assuming path based on previous file usage

const Trust = () => {
  const trustFeatures = [
    {
      id: 1,
      title: "Personalized Care",
      desc: "Every patient receives a personalized treatment plan based on their symptoms.",
      icon: pcIcon,
      side: "left",
    },
    {
      id: 2,
      title: "Safe for Children & Elderly",
      desc: "Our treatments are safe and effective for patients of all ages, from infants to seniors.",
      icon: scIcon,
      side: "left",
    },
    {
      id: 3,
      title: "No Side Effects",
      desc: "Homeopathic medicines are gentle, natural, and free from harmful side effects.",
      icon: neIcon,
      side: "right",
    },
    {
      id: 4,
      title: "Treats Root Cause",
      desc: "We focus on addressing the underlying cause of illness, not just symptom suppression.",
      icon: tcIcon,
      side: "right",
    },
  ];

  return (
    <section id="trust" className="pt-10 pb-20 bg-white md:pb-16">
      <div className="max-w-[1190px] mx-auto px-4 lg:px-0">
        {/* Header Section */}
        {/* Header Section */}
        <div className="flex flex-col items-start gap-5 mb-10 w-full md:flex-row md:justify-between md:items-start md:gap-0 md:mb-[88px]">
          <div className="text-left flex flex-col max-w-[500px]">
            <h2 className="font-cooper text-[32px] font-normal leading-[1.2] text-[#1A1A1A] lg:text-[44px]">
              Why Patients Trust Enaaya Homeopathy
            </h2>
          </div>
          <div className="text-left flex flex-col max-w-[470px] lg:text-left lg:items-start">
            <p className="font-josefin text-[18px] font-normal leading-[1.3] text-[#1A1A1A99] mb-6 lg:text-[24px] lg:text-[#666666] lg:leading-[1.3] lg:text-left">
              Because trust is earned through care, and results speak for
              themselves
            </p>
            <Link
              to="footer"
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-primary text-white h-[48px] w-[143px] flex items-center justify-center gap-2 rounded-[72px] font-bold font-josefin text-[18px] leading-none hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300 cursor-pointer no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Content Section: 3 Cols on Desktop, Stacked on Mobile */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
          {/* Left Column */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex lg:flex-col lg:flex-1 lg:gap-10">
            {trustFeatures
              .filter((f) => f.side === "left")
              .map((feature) => (
                <motion.div
                  key={feature.id}
                  className="bg-[#F8FAF2] rounded-[24px] p-6 lg:p-6 w-full flex flex-col gap-4 lg:gap-10 md:h-[229px] lg:h-[229px] md:w-full lg:w-[375.33px] lg:justify-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <h3 className="font-josefin text-[22px] font-semibold leading-none text-[#1A1A1A]">
                      {feature.title}
                    </h3>
                    <p className="font-josefin text-[16px] font-normal leading-[1.3] text-[#666666]">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Center Image */}
          <motion.div
            className="w-full aspect-[3/4] overflow-hidden rounded-2xl lg:flex-[1] lg:h-auto lg:order-none order-first"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={clinicImg}
              alt="Clinic Entrance"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex lg:flex-col lg:flex-1 lg:gap-10">
            {trustFeatures
              .filter((f) => f.side === "right")
              .map((feature) => (
                <motion.div
                  key={feature.id}
                  className="bg-[#F8FAF2] rounded-[24px] p-6 lg:p-6 w-full flex flex-col gap-4 lg:gap-10 md:h-[229px] lg:h-[229px] md:w-full lg:w-[375.33px] lg:justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <h3 className="font-josefin text-[22px] font-semibold leading-none text-[#1A1A1A]">
                      {feature.title}
                    </h3>
                    <p className="font-josefin text-[16px] font-normal leading-[1.3] text-[#666666]">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
