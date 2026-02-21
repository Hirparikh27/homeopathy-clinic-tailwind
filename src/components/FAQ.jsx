import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const faqs = [
  {
    question: "Is homeopathy safe?",
    answer:
      "Homeopathy is a natural and mild form of treatment that is generally safe when taken under the guidance of a qualified practitioner.",
  },
  {
    question: "How long does treatment take?",
    answer:
      "Acute issues may improve quickly, while chronic conditions may take a few weeks or months.",
  },
  {
    question: "Can homeopathy treat chronic conditions?",
    answer:
      "Yes, it is commonly used to manage long-term and chronic health issues.",
  },
  {
    question: "Is homeopathy safe for children?",
    answer:
      "Yes, it is safe for children when given under professional guidance.",
  },
  {
    question: "Can I take homeopathy with other medicines?",
    answer:
      "Yes, it can often be taken alongside other medications with proper medical advice.",
  },
];
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section id="faq" className="pt-10 pb-20 bg-white">
      <div className="max-w-[1190px] mx-auto px-4 md:px-14 xl:px-0">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-20">
          {/* Left Side: Header Content */}
          <div className="xl:w-[40%] text-center xl:text-left flex flex-col items-center xl:items-start">
            <div className="bg-[#E8B086] text-[#5F2900] text-[18px] md:text-[20px] px-6 py-2 rounded-full inline-block font-josefin font-bold mb-6">
              Common Questions
            </div>
            <h2 className="font-cooper text-[36px] md:text-[44px] lg:text-[50px] font-normal leading-[1.1] text-[#1A1A1A] mb-6">
              Your Questions <br className="md:hidden xl:block" />
              Answered
            </h2>
            <p className="font-josefin text-[18px] md:text-[22px] text-[#666666] leading-[1.3] max-w-[300px] md:max-w-[400px] mx-auto xl:mx-0">
              Find answers to common questions about homeopathy
            </p>
          </div>

          {/* Right Side: Accordion */}
          <div className="xl:w-[60%] flex flex-col gap-2">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`overflow-hidden transition-colors duration-300 border ${
                  clicked === index
                    ? "bg-[#FAF5F0] rounded-[24px] border-[#E8B086]"
                    : "bg-transparent border-transparent border-b-[#E6E6E6] last:border-b-0"
                }`}
              >
                <div
                  className="p-6 md:p-8 flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <div className="flex gap-4 md:gap-6 items-center">
                    <span className="font-josefin text-[18px] md:text-[24px] font-bold text-[#1A1A1A]">
                      {index + 1}.
                    </span>
                    <h3 className="font-josefin text-[18px] md:text-[24px] font-bold text-[#1A1A1A] m-0 pb-0.5">
                      {item.question}
                    </h3>
                  </div>
                  <span className="text-[#295C51] text-[24px] md:text-[36px] font-light leading-none">
                    {clicked === index ? "−" : "+"}
                  </span>
                </div>
                <AnimatePresence>
                  {clicked === index && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 xl:pl-16 md:pl-14 pl-12">
                        <p className="font-josefin text-[16px] md:text-[20px] text-[#666666] leading-[1.5] m-0">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
