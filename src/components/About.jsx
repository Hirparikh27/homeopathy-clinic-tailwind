import React from "react";
import { motion } from "framer-motion";
import capIcon from "../assets/images/cap.svg";
import doctorImg from "../assets/images/Bhavya.png";
import leafImg from "../assets/images/leaf.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white md:py-10">
      <div className="container">
        <div className="bg-[#295C51] rounded-[32px] p-16 relative overflow-hidden max-w-[1158px] min-h-[537px] lg:p-[40px] md:p-[40px_20px]">
          <div className="flex gap-20 items-center relative z-[2] lg:gap-10 lg:flex-row md:flex-col md:text-center">
            {/* Image Card */}
            <motion.div
              className="w-[380px] h-[380px] shrink-0 md:w-full md:max-w-[320px] md:h-[320px] md:mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-3 rounded-2xl relative shadow-[0_4.89px_19.56px_0_rgba(0,0,0,0.08)] flex flex-col gap-3 h-full">
                <img
                  src={doctorImg}
                  alt="Dr. Bhavya Koladiya"
                  className="w-full h-[calc(100%-40px)] rounded-xl block object-cover"
                />
                <div className="font-caveat text-center text-[28px] font-bold leading-[1] text-[#295C51]">
                  Dr. Bhavya Koladiya
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex-1 flex flex-col items-center md:items-center lg:items-start"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary text-white p-[10px_24px] rounded-[50px] inline-block font-josefin text-[17px] font-semibold leading-none mb-[20px] text-center w-max">
                Meet Your Doctor
              </div>
              <h2 className="font-cooper text-[40px] font-normal text-white mb-6 leading-[1.2] text-center md:text-center lg:text-left lg:text-[40px]">
                Meet Dr. Bhavya Koladiya: Your{" "}
                <br className="hidden lg:block" />
                Partner in Healing
              </h2>
              <p className="text-white/80 font-josefin text-[18px] font-normal mb-10 leading-[1.5] text-center md:text-center lg:text-left md:text-[16px] max-w-[550px]">
                Dr. Koladiya uses classical homeopathy to treat the root cause{" "}
                <br className="hidden lg:block" />
                of your health concerns, ensuring personalized and long-term
                wellness.
              </p>

              <div className="bg-white/10 text-white w-full h-12 rounded-[72px] inline-flex items-center justify-center gap-3 p-[0_24px] font-josefin text-[16px] font-semibold leading-[1.1] border border-white/20 md:w-full md:justify-center md:text-[14px] lg:w-auto lg:h-12 lg:justify-start">
                <img src={capIcon} alt="cap" className="w-5 h-5 opacity-80" />
                <span>BHMS (Bachelor of Homeopathic Medicine & Surgery)</span>
              </div>
            </motion.div>
          </div>

          {/* Background Decorations */}
          <div className="absolute w-[300px] opacity-20 pointer-events-none z-[1] top-[-50px] right-[-50px] rotate-0">
            <img
              src={leafImg}
              alt=""
              className="w-full h-auto brightness-0 invert"
            />
          </div>
          <div className="absolute w-[300px] opacity-20 pointer-events-none z-[1] bottom-[-50px] left-[-80px] rotate-[180deg] scale-y-[-1]">
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
