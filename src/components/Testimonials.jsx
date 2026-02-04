import React from "react";
import { motion } from "framer-motion";

const row1 = [
  {
    type: "text",
    rating: 5,
    text: "I had chronic acidity and IBS for years. With Enaaya Homeopathy, I finally feel relief. Dr. Bhavya's treatment approach is truly holistic.",
    patient: "Patient",
    condition: "Chronic Acidity & IBS",
  },
  {
    type: "video",
    videoThumb: "https://placehold.co/400x500/295C51/ffffff?text=Video+Story+1",
    patient: "Patient",
    condition: "Chronic Acidity & IBS",
  },
  {
    type: "text",
    rating: 5,
    text: "I had chronic acidity and IBS for years. With Enaaya Homeopathy, I finally feel relief. Dr. Bhavya's treatment approach is truly holistic.",
    patient: "Patient",
    condition: "Chronic Acidity & IBS",
  },
  {
    type: "video",
    videoThumb: "https://placehold.co/400x500/295C51/ffffff?text=Video+Story+2",
    patient: "Patient",
    condition: "Chronic Acidity & IBS",
  },
  {
    type: "text",
    rating: 5,
    text: "I had chronic acidity and IBS for years. With Enaaya Homeopathy, I finally feel relief. Dr. Bhavya's treatment approach is truly holistic.",
    patient: "Patient",
    condition: "Chronic Acidity & IBS",
  },
];

const row2 = [
  {
    type: "video",
    videoThumb: "https://placehold.co/400x500/295C51/ffffff?text=Video+Story+3",
    patient: "Patient",
    condition: "Chronic Acidity & IBS",
  },
  {
    type: "text",
    rating: 5,
    text: "I had chronic acidity and IBS for years. With Enaaya Homeopathy, I finally feel relief. Dr. Bhavya's treatment approach is truly holistic.",
    patient: "Patient",
    condition: "Chronic Acidity & IBS",
  },
  {
    type: "video",
    videoThumb: "https://placehold.co/400x500/295C51/ffffff?text=Video+Story+4",
    patient: "Patient",
    condition: "Chronic Acidity & IBS",
  },
  {
    type: "text",
    rating: 5,
    text: "I had chronic acidity and IBS for years. With Enaaya Homeopathy, I finally feel relief. Dr. Bhavya's treatment approach is truly holistic.",
    patient: "Patient",
    condition: "Chronic Acidity & IBS",
  },
  {
    type: "video",
    videoThumb: "https://placehold.co/400x500/295C51/ffffff?text=Video+Story+5",
    patient: "Patient",
    condition: "Chronic Acidity & IBS",
  },
];

const Card = ({ item, index }) => (
  <motion.div
    className={`h-[300px] rounded-2xl overflow-hidden shrink-0 transition-shadow duration-300 hover:shadow-lg ${
      item.type === "text"
        ? "w-[272.73px] bg-white p-[28px_22px] flex flex-col justify-between"
        : "w-[214.55px] bg-[#295C51] relative"
    } md:min-w-[260px] md:h-[350px]`}
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    {item.type === "text" ? (
      <>
        <div>
          <div className="flex gap-0.5 mb-3">
            {[...Array(item.rating)].map((_, i) => (
              <span key={i} className="text-[#E6AA8A] text-base">
                ★
              </span>
            ))}
          </div>
          <p className="font-josefin text-sm leading-[1.4] text-[#1A1A1A] m-0 line-clamp-6 italic">
            "{item.text}"
          </p>
        </div>
        <div className="flex flex-col gap-0.5 mt-auto">
          <div className="font-josefin text-[13px] font-medium text-[#1A1A1A]">
            {item.patient}
          </div>
          <div className="font-josefin text-[11px] text-[#1A1A1A] opacity-50">
            {item.condition}
          </div>
        </div>
      </>
    ) : (
      <div className="w-full h-full relative group">
        <img
          src={item.videoThumb}
          alt="Video"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 5V19L19 12L8 5Z" fill="white" />
          </svg>
        </div>
      </div>
    )}
  </motion.div>
);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-[100px] bg-[#FAF5F0] relative overflow-hidden md:py-[60px]"
    >
      <div className="container relative z-10">
        <div className="flex flex-col gap-8 mb-10 lg:flex-row lg:justify-between lg:items-end lg:mb-[60px] lg:gap-0">
          <div className="text-left">
            <h2 className="font-cooper text-[32px] font-normal leading-none text-[#1A1A1A] max-w-[485px] lg:text-[44px]">
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
      </div>

      <div className="flex flex-col gap-8 overflow-x-auto py-10 scrollbar-none relative">
        {/* Gradients */}
        <div className="absolute top-0 left-0 w-[150px] h-full bg-gradient-to-r from-[#FAF5F0] via-[#FAF5F0]/25 to-transparent z-[5] pointer-events-none lg:hidden"></div>
        <div className="absolute top-0 right-0 w-[150px] h-full bg-gradient-to-l from-[#FAF5F0] via-[#FAF5F0]/25 to-transparent z-[5] pointer-events-none lg:hidden"></div>

        <div className="flex gap-[14.64px] px-5">
          {row1.map((item, index) => (
            <Card key={`top-${index}`} item={item} index={index} />
          ))}
        </div>

        <div className="flex gap-[14.64px] px-5 ml-10">
          {row2.map((item, index) => (
            <Card key={`bottom-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
