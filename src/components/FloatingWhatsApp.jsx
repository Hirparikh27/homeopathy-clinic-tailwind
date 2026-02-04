import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../data";

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[25px] right-[25px] bg-[#25D366] text-white w-[60px] h-[60px] rounded-full flex items-center justify-center text-[2rem] z-[1000] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 animate-pulse-green"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;
