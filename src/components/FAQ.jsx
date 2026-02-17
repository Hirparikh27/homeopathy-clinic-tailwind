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
      <div className="max-w-[1190px] mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Side: Header Content */}
          <div className="lg:w-[40%] text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="bg-[#E8B086] text-[#5F2900] text-[18px] px-6 py-2 rounded-full inline-block font-josefin font-bold mb-6">
              Common Questions
            </div>
            <h2 className="font-cooper text-[36px] md:text-[44px] font-normal leading-[1.1] text-[#1A1A1A] mb-6">
              Your Questions <br />
              Answered
            </h2>
            <p className="font-josefin text-[18px] text-[#666666] leading-[1.3] max-w-[300px] mx-auto lg:mx-0">
              Find answers to common questions about homeopathy
            </p>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-[60%] flex flex-col">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${
                  clicked === index
                    ? "bg-[#FAF5F0] rounded-[24px] border border-[#E8B086] my-3 overflow-hidden"
                    : clicked === index - 1
                      ? "bg-transparent border-b-0"
                      : "bg-transparent border-b border-[#E6E6E6] last:border-0"
                }`}
              >
                <div
                  className="p-6 flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <div className="flex gap-4">
                    <span className="font-josefin text-lg font-bold text-[#1A1A1A]">
                      {index + 1}.
                    </span>
                    <h3 className="font-josefin text-lg font-bold text-[#1A1A1A] m-0">
                      {item.question}
                    </h3>
                  </div>
                  <span className="text-[#295C51] text-xl font-light">
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
                      <div className="px-6 pb-6 lg:pl-12">
                        <p className="font-josefin text-base text-[#666666] leading-relaxed m-0">
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
