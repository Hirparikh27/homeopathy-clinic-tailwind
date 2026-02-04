import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data";
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
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-[2.5rem] text-primary-dark mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-black/60">
            Common questions about homeopathy treatment
          </p>
        </div>

        <div className="max-w-[800px] mx-auto flex flex-col gap-[15px]">
          {faqs.map((item, index) => (
            <div
              className="bg-background rounded-[20px] overflow-hidden shadow-sm"
              key={index}
            >
              <div
                className="p-[20px_25px] flex justify-between items-center cursor-pointer transition-colors duration-300 hover:bg-[#fdfdfd]"
                onClick={() => toggle(index)}
              >
                <h3 className="text-[1.1rem] font-medium text-primary-dark m-0">
                  {item.question}
                </h3>
                <span className="text-primary text-[0.9rem]">
                  {clicked === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <AnimatePresence>
                {clicked === index && (
                  <motion.div
                    className="overflow-hidden px-[25px]"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="pb-[25px] text-[#666] text-base leading-relaxed m-0">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
