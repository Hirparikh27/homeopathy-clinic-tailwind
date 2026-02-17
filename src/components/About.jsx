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
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center relative z-[2] w-full text-center lg:text-left">
            {/* Image Card */}
            <motion.div
              className="w-full max-w-[300px] sm:max-w-[320px] shrink-0 lg:w-[380px] mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-2 rounded-2xl relative shadow-[0_4.89px_19.56px_0_rgba(0,0,0,0.08)] flex flex-col gap-2">
                <img
                  src={doctorImg}
                  alt="Dr. Bhavya Koladiya"
                  className="w-full h-auto rounded-2xl block object-top"
                />
                <div className="font-caveat text-center text-[27.36px] font-bold leading-[1.1] text-[#295C51]">
                  Dr. Bhavya Koladiya
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex flex-col justify-center items-center md:items-center lg:items-start"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary text-[#295C51] p-[10px_24px] rounded-[50px] inline-block font-josefin text-[17px] font-semibold leading-none mb-[30px] text-center w-max">
                Meet Your Doctor
              </div>
              <h2 className="font-cooper text-[26px] xs:text-[28px] sm:text-[40px] font-normal text-white mb-6 leading-[1.2] text-center lg:text-left w-full px-1">
                Meet Dr. Bhavya Koladiya: Your{" "}
                <br className="hidden lg:block" />
                Partner in Healing
              </h2>
              <p className="text-white/60 font-josefin text-[16px] sm:text-[18px] font-normal mb-10 leading-[1.3] text-center lg:text-left max-w-[700px] px-2 outline-none">
                Dr. Koladiya uses classical homeopathy to treat the root cause
                of your health concerns, ensuring personalized and long-term
                wellness.
              </p>

              <div className="bg-white/10 text-white w-full max-w-[480px] min-h-[44px] h-auto py-2.5 px-3 xs:px-4 sm:px-6 rounded-[20px] sm:rounded-full inline-flex items-center justify-center gap-1.5 xs:gap-2 border border-white/20 md:w-full md:h-12 md:py-0 md:justify-center lg:w-auto lg:h-[46px] lg:justify-start lg:gap-3 lg:px-6 shrink-0">
                <img
                  src={capIcon}
                  alt="cap"
                  className="w-4 h-4 sm:w-6 sm:h-6 shrink-0"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(82%) sepia(21%) saturate(1000%) hue-rotate(325deg) brightness(97%) contrast(89%)",
                  }}
                />
                <span className="font-josefin text-[13px] xs:text-[14.5px] sm:text-[16px] font-semibold leading-[1.2] text-center lg:text-left tracking-tight xs:tracking-normal">
                  BHMS (Bachelor of Homeopathic Medicine & Surgery)
                </span>
              </div>
            </motion.div>
          </div>

          {/* Background Decorations */}
          <div className="absolute w-[300px] opacity-60 pointer-events-none z-[1] top-[-98px] right-[-50px] rotate-0">
            <img
              src={leafImg}
              alt=""
              className="w-full h-auto brightness-0 invert"
            />
          </div>
          <div className="absolute w-[300px] opacity-60 pointer-events-none z-[1] bottom-[-50px] left-[-120px] rotate-[180deg] scale-y-[-1]">
            <img
              src={leafImg}
              alt=""
              className="w-full h-auto brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
