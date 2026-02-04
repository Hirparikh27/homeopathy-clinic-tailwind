import React from "react";
import { motion } from "framer-motion";
import { services } from "../data";
import frameImg from "../assets/images/Frame.png";
import leafImg from "../assets/images/image 105.png";
import service1 from "../assets/images/service-1.png";

const serviceImages = {
  1: service1,
  2: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
  3: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&w=800&q=80",
  4: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
  5: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&w=800&q=80",
  6: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
};

const Services = () => {
  return (
    <section id="services" className="pb-20">
      <div className="bg-[#FAF5F0] w-full flex items-center justify-center mb-10 px-5 py-10 lg:h-[250px] lg:mb-20 lg:p-0">
        <div className="container p-0">
          <div className="font-cooper font-normal text-[#1A1A1A] text-center leading-[1.2] text-[28px] lg:text-[56px]">
            BHMS Qualified Doctor,{" "}
            <img
              src={frameImg}
              alt="flower"
              className="w-auto inline-block align-middle mx-[10px] relative -top-1 h-[30px] lg:h-[60px]"
            />{" "}
            Safe for All Ages <br />
            Holistic & Natural Treatment{" "}
            <img
              src={leafImg}
              alt="leaf"
              className="w-auto inline-block align-middle mx-[10px] relative -top-1 h-[30px] lg:h-[60px]"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col items-start gap-5 mb-10 w-full lg:flex-row lg:justify-between lg:items-start lg:gap-0 lg:mb-[88px]">
          <div className="text-left flex flex-col max-w-[500px]">
            <h2 className="font-cooper font-normal leading-none text-[#1A1A1A] text-[32px] lg:text-[44px]">
              Our Homeopathic Treatment Services
            </h2>
          </div>
          <div className="text-left flex flex-col max-w-[470px]">
            <p className="font-josefin font-normal leading-[1.1] text-[#1A1A1A99] mb-6 text-[18px] lg:text-[24px]">
              At Enaaya Homeopathy Clinic, we believe in healing the root
              cause—not just.
            </p>
            <button className="bg-primary text-white h-12 w-24 flex items-center justify-center rounded-[72px] font-medium font-josefin text-[21px] leading-none hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300">
              Label
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:overflow-x-auto lg:pb-8 lg:gap-6 scrollbar-none">
          {services.map((service, index) => (
            <motion.div
              className="w-full max-w-[260px] shrink-0"
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-[326.37px] rounded-[140px_140px_8px_8px] border-[3.73px] border-white shadow-[0_0.93px_1.86px_-0.93px_rgba(0,0,0,0.1),0_0.93px_2.79px_0px_rgba(0,0,0,0.1)] overflow-hidden group transition-transform duration-300 hover:-translate-y-[5px]">
                <img
                  src={
                    typeof serviceImages[service.id] === "string"
                      ? serviceImages[service.id]
                      : serviceImages[service.id]
                  }
                  alt={service.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Description Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pb-[60px]">
                  <p className="text-white font-inter text-[1rem] leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-primary text-white p-[15px_10px] text-center font-inter text-[0.95rem] font-medium z-20 transition-colors duration-300 group-hover:bg-primary-dark">
                  {service.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
