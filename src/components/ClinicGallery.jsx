import React from "react";
import { motion } from "framer-motion";
import entranceImg from "../assets/images/Enterance.png";
import officeImg from "../assets/images/main-office.png";
import cornerImg from "../assets/images/main-office-corner.png";
import recepImg from "../assets/images/recepnist.png";

const ClinicGallery = () => {
  const subImages = [
    { src: officeImg, alt: "Consultation Desk" },
    { src: recepImg, alt: "Reception Area" },
    { src: cornerImg, alt: "Clinic Corner" },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white overflow-hidden" id="gallery">
      <div className="max-w-[1190px] mx-auto px-4 lg:px-0">
        <div className="flex flex-col gap-10">
          {/* Top Row: Text + Main Image */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
            {/* Left: Text Content */}
            <motion.div
              className="flex-1 max-w-[579px] flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-cooper text-[#1A1A1A] text-[32px] sm:text-[40px] lg:text-[44px] leading-[1] font-normal">
                A Space Where Healing Feels Personal
              </h2>
              <p className="font-josefin text-[#666666] text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.3] font-normal">
                Built on Trust. Designed for Healing.{" "}
                <br className="hidden sm:block" />
                Step into care you can truly rely on.
              </p>
              <a
                href="https://www.google.com/maps/place/Enaaya+Homeopathy+Clinic+%7C+Dr+Bhavya+Koladiya+(B.H.M.S)/@23.0559378,72.5255543,17z/data=!3m1!4b1!4m6!3m5!1s0x395e856564bfe46d:0xa8500db9268a3808!8m2!3d23.0559329!4d72.5281292!16s%2Fg%2F11ywjrtq10?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[171px] h-[48px] bg-primary text-white font-josefin text-[18px] font-bold rounded-[72px] flex items-center justify-center gap-2 shadow-lg"
                >
                  Get Directions
                </motion.button>
              </a>
            </motion.div>

            {/* Right: Main Image Card */}
            <motion.div
              className="w-full lg:w-[579px] lg:h-[370px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-4 rounded-[12px] shadow-[0_3.62px_14.47px_0_rgba(0,0,0,0.08)] border border-white h-full">
                <img
                  src={entranceImg}
                  alt="Clinic Entrance"
                  className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover rounded-[8px]"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: 3 Images Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {subImages.map((img, index) => (
              <motion.div
                key={index}
                className="w-full h-[280px] sm:h-[320px] lg:h-[356px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-4 rounded-[12px] shadow-[0_3.62px_14.47px_0_rgba(0,0,0,0.08)] border border-white h-full">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-[8px]"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicGallery;
