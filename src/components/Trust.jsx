import React from "react";
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
    <section id="trust" className="py-20 bg-[#FAF9F6] md:py-16">
      <div className="container">
        {/* Header Section */}
        {/* Header Section */}
        <div className="flex flex-col gap-8 mb-10 lg:flex-row lg:justify-between lg:items-end lg:mb-[88px] lg:gap-0">
          <div className="text-left">
            <h2 className="font-cooper text-[32px] font-normal leading-[1.2] text-[#1A1A1A] max-w-[485px] lg:text-[44px]">
              Lorem Ipsum Donor
              <br />
              Sit Amet Lorem
            </h2>
          </div>
          <div className="text-left flex flex-col gap-6 max-w-[420px] lg:gap-[19px]">
            <p className="font-josefin text-[18px] font-normal leading-[1.4] text-[#1A1A1A99] lg:text-[18px] lg:leading-[1.4]">
              At Enaaya Homeopathy Clinic, we believe in
              <br className="hidden lg:block" />
              healing the root cause—not just.
            </p>
            <button className="bg-[#295C51] text-white h-[50px] w-[100px] flex items-center justify-center rounded-[72px] font-medium font-josefin text-[16px] leading-none hover:bg-[#204a41] hover:-translate-y-0.5 transition-all duration-300">
              Label
            </button>
          </div>
        </div>

        {/* Content Section: 3 Cols on Desktop, Stacked on Mobile */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8 flex-1 lg:gap-10">
            {trustFeatures
              .filter((f) => f.side === "left")
              .map((feature) => (
                <motion.div
                  key={feature.id}
                  className="bg-white/50 border border-white rounded-[18px] p-8 w-full flex flex-col gap-6 lg:gap-10 lg:h-[221px] lg:w-[364.67px] lg:justify-center backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <h3 className="font-josefin text-[20px] font-medium leading-none text-[#1A1A1A] lg:text-[22px]">
                      {feature.title}
                    </h3>
                    <p className="font-josefin text-[15px] font-light leading-[1.3] text-[#1A1A1AE5] lg:leading-[1.1]">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Center Image */}
          <motion.div
            className="w-full h-[300px] overflow-hidden rounded-2xl flex-[1.2] lg:h-[466px] lg:order-none order-first"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={clinicImg}
              alt="Clinic"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 flex-1 lg:gap-10">
            {trustFeatures
              .filter((f) => f.side === "right")
              .map((feature) => (
                <motion.div
                  key={feature.id}
                  className="bg-white/50 border border-white rounded-[18px] p-8 w-full flex flex-col gap-6 lg:gap-10 lg:h-[221px] lg:w-[364.67px] lg:justify-center backdrop-blur-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <h3 className="font-josefin text-[20px] font-medium leading-none text-[#1A1A1A] lg:text-[22px]">
                      {feature.title}
                    </h3>
                    <p className="font-josefin text-[15px] font-light leading-[1.3] text-[#1A1A1AE5] lg:leading-[1.1]">
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
