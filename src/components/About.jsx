import React from "react";
import { motion } from "framer-motion";
import capIcon from "../assets/images/cap.svg";
import doctorImg from "../assets/images/Bhavya.png";
import leafImg from "../assets/images/leaf.png";

const About = () => {
  return (
    <section id="about" className="pt-10 pb-20 bg-white">
      <div className="max-w-[1190px] mx-auto px-4 lg:px-0">
        <div className="bg-[#295C51] rounded-[32px] p-2 sm:p-8 md:p-14 lg:p-24 relative overflow-hidden min-h-0 flex items-center">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-stretch justify-center relative z-[2] w-full text-center lg:text-left">
            {/* Image Card */}
            <motion.div
              className="w-full shrink-0 lg:w-[390px] mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-2 rounded-[16px] relative shadow-[0_4.89px_19.56px_0_rgba(0,0,0,0.08)] flex flex-col gap-2 min-h-0 lg:h-[508px]">
                <img
                  src={doctorImg}
                  alt="Dr. Bhavya Koladiya"
                  className="w-full h-auto sm:h-[450px] lg:h-[445px] rounded-2xl block object-cover object-top"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                  loading="lazy"
                />
                <div className="font-caveat text-center text-[27.36px] font-bold leading-[1.1] text-[#295C51] pb-1">
                  Dr. Bhavya Koladiya
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex flex-col justify-center items-center md:items-center lg:items-start lg:justify-between lg:flex-1 w-full lg:h-[508px] lg:py-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary text-[#295C51] p-[10px_24px] rounded-[50px] inline-block font-josefin text-[17px] font-semibold leading-none mb-4 sm:mb-6 lg:mb-0 text-center w-max">
                Meet Your Doctor
              </div>
              <h2 className="font-cooper text-white mb-6 lg:mb-0 text-center lg:text-left w-full px-1 flex flex-col gap-0">
                <span className="text-[28px] sm:text-[32px] md:text-[40px] font-bold leading-[1.1] lg:whitespace-nowrap">
                  Meet Dr. Bhavya Koladiya
                </span>
                <span className="text-[28px] sm:text-[32px] md:text-[40px] font-normal leading-[1.1] mt-1 lg:whitespace-nowrap">
                  Your Partner in Natural Healing
                </span>
              </h2>
              <div className="flex flex-col gap-4 mb-10 lg:mb-0 w-full">
                <p className="text-[#FAF5F0] font-josefin text-[16px] sm:text-[18px] font-normal leading-[1.5] text-center lg:text-left lg:max-w-[580px] px-2 outline-none">
                  Dr. Bhavya Koladiya, BHMS, is a dedicated and experienced
                  homeopathy doctor in Ahmedabad, specializing in classical
                  homeopathic treatment that addresses the root cause of
                  illness. With a patient-first approach, Dr. Koladiya provides
                  individualized treatment plans designed for safe, gentle, and
                  long-lasting results.
                </p>
                <p className="text-[#FAF5F0] font-josefin text-[16px] sm:text-[18px] font-normal leading-[1.5] text-center lg:text-left lg:max-w-[580px] px-2 outline-none">
                  At Enaaya Homeopathy, every consultation focuses on
                  understanding your complete health history, lifestyle, and
                  emotional well-being to deliver holistic and effective care.
                  Patients trust Dr. Bhavya for ethical guidance, transparent
                  communication, and consistent results.
                </p>
              </div>

              <div className="bg-white/10 text-white w-full max-w-full sm:max-w-[580px] min-h-[44px] h-auto py-3 px-4 xs:px-6 rounded-[24px] inline-flex items-center justify-center gap-3 border border-white/20 md:w-full md:justify-center lg:w-auto lg:shrink-0 lg:mt-0">
                <img
                  src={capIcon}
                  alt="cap"
                  className="w-6 h-6 sm:w-8 sm:h-8 shrink-0"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(82%) sepia(21%) saturate(1000%) hue-rotate(325deg) brightness(97%) contrast(89%)",
                  }}
                />
                <div className="flex flex-col">
                  <span className="font-josefin text-[14px] xs:text-[15px] sm:text-[16px] font-semibold leading-tight text-center lg:text-left sm:whitespace-nowrap">
                    BHMS (Bachelor of Homeopathic Medicine & Surgery)
                  </span>
                  <span className="font-josefin text-[12px] xs:text-[13px] sm:text-[14px] font-normal text-white/60 leading-tight text-center lg:text-left mt-0.5">
                    Certified Classical Homeopathy Practitioner
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Background Decorations */}
          <div className="absolute w-[300px] opacity-60 pointer-events-none z-[1] top-[-98px] right-[-50px] rotate-0">
            <img
              src={leafImg}
              alt=""
              className="w-full h-auto brightness-0 invert"
              loading="lazy"
            />
          </div>
          <div className="absolute w-[300px] opacity-60 pointer-events-none z-[1] bottom-[-50px] left-[-120px] rotate-[180deg] scale-y-[-1]">
            <img
              src={leafImg}
              alt=""
              className="w-full h-auto brightness-0 invert"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
