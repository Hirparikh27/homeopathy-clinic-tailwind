import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
const services = [
  {
    id: 1,
    title: "Bones & Muscles Issues",
    description:
      "Knee / Joints Pain, Backache / Sciatica, Gout / Rheumatism, Nerve Pain",
  },
  {
    id: 2,
    title: "Gastric & Digestive Issues",
    description:
      "Gas / Acidity, Constipation / Indigestion, Recurrent Mouth Ulcers, Piles / Haemorrhoids, Fatty Liver",
  },
  {
    id: 3,
    title: "Respiratory Issues",
    description:
      "Asthma, Recurrent Throat Infection, Pneumonia, Recurrent Cold & Coryza, Nasal Polyp, Recurrent Tonsillitis",
  },
  {
    id: 4,
    title: "Kidney Issues",
    description: "Kidney Stone, Recurrent UTIs",
  },
  {
    id: 5,
    title: "Child Issues",
    description: "Recurrent Cough, Bed Wetting, Slow Growth, Low Immunity",
  },
  {
    id: 6,
    title: "Female Issues",
    description:
      "Irregular Menses, Vaginal Discharge, Menopausal Problem, PCOD / PCOS, Pregnancy Issues",
  },
  {
    id: 7,
    title: "Skin & Hair Issues",
    description:
      "Acne, Skin Allergy, Psoriasis / Eczema, Ringworm / Fungal, Hair-fall / Hair-loss, Warts / Corns",
  },
  {
    id: 8,
    title: "Life Style Disorders",
    description: "Diabetes / BP / Thyroid, Migraine / Hormonal Issues",
  },
];
import bonesImg from "../assets/images/Bones & Muscles Issues.png";
import digestiveImg from "../assets/images/Gastric & Digestive Issues.png";
import respiratoryImg from "../assets/images/Respiratory Issues.png";
import kidneyImg from "../assets/images/Kidney Issues.png";
import childImg from "../assets/images/Child Issues.png";
import femaleImg from "../assets/images/Female Issues.png";
import skinImg from "../assets/images/Skin & Hair Issues.png";
import lifestyleImg from "../assets/images/Life Style Disorders.png";

const serviceImages = {
  1: bonesImg,
  2: digestiveImg,
  3: respiratoryImg,
  4: kidneyImg,
  5: childImg,
  6: femaleImg,
  7: skinImg,
  8: lifestyleImg,
};

const Services = () => {
  return (
    <section id="services" className="pt-10 pb-20">
      <div className="max-w-[1190px] mx-auto px-4 lg:px-0">
        <div className="flex flex-col items-start gap-5 mb-10 w-full md:flex-row md:justify-between md:items-start md:gap-0 md:mb-[88px]">
          <div className="text-left flex flex-col max-w-[500px]">
            <h2 className="font-cooper font-normal leading-none text-[#1A1A1A] text-[32px] lg:text-[44px]">
              Our Homeopathic Treatment Services
            </h2>
          </div>
          <div className="text-left flex flex-col max-w-[600px] lg:text-left lg:items-start">
            <p className="font-josefin font-normal leading-[1.3] text-[#666666] mb-6 text-[18px] lg:text-[24px] lg:text-[#666666] lg:leading-[1.3] lg:text-left">
              At Enaaya Homeopathy Clinic, we believe in healing the root
              cause—not just symptoms.
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
      </div>

      <div className="max-w-[1190px] mx-auto px-4 lg:px-0">
        <div className="overflow-x-auto scrollbar-none pb-4 lg:pb-8 touch-pan-x">
          <div className="flex flex-row gap-6">
            {services.map((service, index) => (
              <motion.div
                className="w-[220px] md:w-[240px] shrink-0"
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-[326.37px] rounded-[140px_140px_8px_8px] border-[2px] border-white shadow-[0px_0.93px_1.86px_-0.93px_#0000001A,0px_3.93px_2.79px_0px_#0000001A] overflow-hidden group transition-transform duration-300 hover:-translate-y-[5px]">
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
                  <div className="absolute inset-0 bg-[#1A1A1A]/90 flex items-center justify-center text-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pb-[60px]">
                    <div className="text-white font-josefin text-[16px] leading-[1.2] font-normal px-2 drop-shadow-md flex flex-col gap-1 items-center justify-center h-full">
                      {service.description.split(",").map((line, i) => (
                        <span key={i} className="block">
                          {line.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute  bottom-0 left-0 w-full bg-primary text-white p-[15px_10px] text-center font-josefin text-[0.95rem] font-semibold z-20 transition-colors duration-300 group-hover:bg-primary-dark">
                    {service.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
